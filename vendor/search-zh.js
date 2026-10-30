/*!
 * free-for.dev 中文版 · 轻量中文搜索插件
 * 为 docsify 提供一个适合中文（无空格分词）的本地搜索：
 * 直接复用已渲染的 DOM 建立索引，逐条服务一行，按"全部关键词子串命中"过滤。
 */
(function () {
  'use strict';

  var ENTRIES = [];
  var MAX_RESULTS = 80;
  var FLASH_CLASS = 'zh-flash';

  function norm(s) {
    return (s || '').replace(/\s+/g, ' ').trim();
  }

  function isExternal(href) {
    return !!href && /^https?:/i.test(href);
  }

  /* ---------- 建立索引：h2 分段 + 顶层 li 作为一条服务 ---------- */
  function buildIndex() {
    var root = document.querySelector('.markdown-section');
    if (!root) return 0;

    var entries = [];
    var section = { title: '页面开头', href: '#/' };

    for (var i = 0; i < root.children.length; i++) {
      var el = root.children[i];
      if (!el.tagName) continue;

      if (el.tagName === 'H2') {
        var anchor = el.querySelector('a.anchor');
        section = {
          title: norm(el.textContent),
          href: anchor ? anchor.getAttribute('href') : '#/?id=' + encodeURIComponent(el.id || '')
        };
      } else if (el.tagName === 'UL') {
        var lis = el.children;
        for (var j = 0; j < lis.length; j++) {
          var li = lis[j];
          if (!li.tagName || li.tagName !== 'LI') continue;
          var text = norm(li.textContent);
          if (text.length < 2) continue;

          var link = li.querySelector('a');
          if (!link) continue;

          var href = link.getAttribute('href') || '';
          entries.push({
            text: text,
            lower: text.toLowerCase(),
            name: norm(link.textContent),
            nameLower: norm(link.textContent).toLowerCase(),
            url: isExternal(href) ? href : '',
            sectionTitle: section.title,
            sectionHref: section.href,
            el: li
          });
        }
      }
    }

    ENTRIES = entries;
    return entries.length;
  }

  /* ---------- 搜索 ---------- */
  function search(query) {
    var q = norm(query).toLowerCase();
    if (!q) return [];
    var tokens = q.split(' ').filter(function (t) { return t.length > 0; });
    if (!tokens.length) return [];

    var hits = [];
    for (var i = 0; i < ENTRIES.length; i++) {
      var e = ENTRIES[i];
      var ok = true;
      for (var k = 0; k < tokens.length; k++) {
        if (e.lower.indexOf(tokens[k]) === -1) { ok = false; break; }
      }
      if (!ok) continue;
      // 服务名命中优先
      var score = 0;
      for (var m = 0; m < tokens.length; m++) {
        if (e.nameLower.indexOf(tokens[m]) !== -1) score += 10;
        if (e.nameLower.indexOf(tokens[m]) === 0) score += 10;
        if (e.sectionTitle.toLowerCase().indexOf(tokens[m]) !== -1) score += 1;
      }
      hits.push({ e: e, score: score, order: i });
    }

    hits.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return a.order - b.order;
    });
    return hits;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function highlight(text, tokens) {
    var safe = escapeHtml(text);
    for (var i = 0; i < tokens.length; i++) {
      var t = escapeHtml(tokens[i]);
      if (!t) continue;
      var re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      safe = safe.replace(re, '<span class="zh-hit">$1</span>');
    }
    return safe;
  }

  /* ---------- 结果渲染 ---------- */
  function render(panel, listEl, hintEl, query) {
    var tokens = norm(query).toLowerCase().split(' ').filter(function (t) { return t; });
    if (!tokens.length) {
      panel.classList.remove('active');
      listEl.innerHTML = '';
      hintEl.textContent = '';
      return;
    }

    var hits = search(query);
    listEl.innerHTML = '';

    if (!hits.length) {
      hintEl.textContent = '没有匹配「' + query + '」的条目';
      panel.classList.add('active');
      return;
    }

    var n = Math.min(hits.length, MAX_RESULTS);
    hintEl.textContent = '命中 ' + hits.length + ' 条' + (hits.length > n ? '（显示前 ' + n + ' 条）' : '') + '，点击跳转';

    var frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var hit = hits[i];
      var e = hit.e;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.setAttribute('href', e.sectionHref);
      a.setAttribute('data-zh-index', String(hit.order));
      a.innerHTML =
        '<span class="zh-tag">' + escapeHtml(e.sectionTitle) + '</span>' +
        highlight(e.text.length > 160 ? e.text.slice(0, 160) + '…' : e.text, tokens);
      li.appendChild(a);
      frag.appendChild(li);
    }
    listEl.appendChild(frag);
    panel.classList.add('active');

    Array.prototype.forEach.call(listEl.querySelectorAll('a'), function (a) {
      a.addEventListener('click', function (ev) {
        var idx = parseInt(a.getAttribute('data-zh-index'), 10);
        panel.classList.remove('active');
        inputEl.value = '';
        setTimeout(function () { focusEntry(idx); }, 320);
      });
    });
  }

  /* ---------- 从搜索跳转到具体条目并高亮 ---------- */
  function focusEntry(idx) {
    var root = document.querySelector('.markdown-section');
    if (!root) return;
    var entry = ENTRIES[idx];
    if (!entry) return;

    var target = entry.el && document.contains(entry.el) ? entry.el : null;
    if (!target) {
      // 页面被重新渲染过，按文本重新定位
      var lis = root.querySelectorAll('li');
      for (var i = 0; i < lis.length; i++) {
        if (norm(lis[i].textContent) === entry.text) { target = lis[i]; break; }
      }
    }
    if (!target) return;

    target.scrollIntoView({ block: 'center', behavior: 'smooth' });
    target.classList.add(FLASH_CLASS);
    setTimeout(function () { target.classList.remove(FLASH_CLASS); }, 2400);
  }

  /* ---------- 注入搜索框 ---------- */
  var inputEl = null;

  function inject() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    var existing = sidebar.querySelector('.zh-search');
    if (existing) { inputEl = existing.querySelector('input'); return; }

    var box = document.createElement('div');
    box.className = 'zh-search';
    box.innerHTML =
      '<input type="search" autocomplete="off" spellcheck="false" ' +
      'placeholder="搜索服务、功能、关键词…" aria-label="搜索服务">' +
      '<div class="zh-search-panel">' +
      '<div class="zh-search-hint"></div>' +
      '<ul class="zh-search-list"></ul>' +
      '</div>';

    var nav = sidebar.querySelector('.sidebar-nav');
    if (nav && nav.parentNode) {
      nav.parentNode.insertBefore(box, nav);
    } else {
      sidebar.appendChild(box);
    }

    inputEl = box.querySelector('input');
    var panel = box.querySelector('.zh-search-panel');
    var listEl = box.querySelector('.zh-search-list');
    var hintEl = box.querySelector('.zh-search-hint');

    inputEl.addEventListener('input', function () {
      render(panel, listEl, hintEl, inputEl.value);
    });

    inputEl.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        inputEl.value = '';
        render(panel, listEl, hintEl, '');
        inputEl.blur();
      } else if (ev.key === 'Enter') {
        var first = listEl.querySelector('a');
        if (first) {
          first.click();
          ev.preventDefault();
        }
      }
    });

    document.addEventListener('click', function (ev) {
      if (!box.contains(ev.target)) panel.classList.remove('active');
    });
  }

  /* ---------- docsify 插件入口 ---------- */
  function ZHSearch(hook) {
    hook.doneEach(function () {
      inject();
      buildIndex();
    });
  }

  window.ZHSearch = ZHSearch;
})();
