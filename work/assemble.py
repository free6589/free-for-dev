#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把中文分片组装成 README.md（含中文目录）与 _sidebar.md。"""
import re, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORK = os.path.join(ROOT, 'work')

# ---- docsify slugify 的 Python 复刻（docsify v4）----
_PUNCT = re.compile(r'[\u2000-\u206F\u2E00-\u2E7F\\\'!"#$%&()*+,./:;<=>?@\[\]^`{|}~]')

def slugify(s):
    s = s.strip()
    s = re.sub(r'[A-Z]+', lambda m: m.group(0).lower(), s)
    s = re.sub(r'<[^>]+>', '', s)
    s = _PUNCT.sub('', s)
    s = re.sub(r'\s', '-', s)
    s = re.sub(r'-+', '-', s)
    s = re.sub(r'^(\d)', r'_\1', s)
    return s

def read(p):
    with open(p, encoding='utf-8') as f:
        return f.read()

def main():
    intro = read(os.path.join(WORK, 'intro-zh.md')).rstrip('\n')
    chunks = []
    for i in range(1, 9):
        p = os.path.join(WORK, 'zh', 'chunk-%02d.md' % i)
        if not os.path.exists(p):
            sys.exit('缺少分片: ' + p)
        chunks.append(read(p).rstrip('\n'))

    body = '\n\n'.join(chunks) + '\n'
    # 返回顶部锚点改为中文标题锚点
    body = body.replace('(#table-of-contents)', '(#目录)')

    # 收集二级标题
    heads = [l[3:].strip() for l in body.split('\n') if l.startswith('## ')]
    if not heads:
        sys.exit('未找到任何二级标题')

    seen, slugs = {}, []
    for h in heads:
        sl = slugify(h)
        n = seen.get(sl, 0)
        seen[sl] = n + 1
        slugs.append(sl if n == 0 else '%s-%d' % (sl, n))
    if len(set(slugs)) != len(slugs):
        sys.exit('锚点不唯一')
    for h, sl in zip(heads, slugs):
        if not h or not sl:
            sys.exit('空标题: %r' % h)

    note = ('> 本页是 [free-for-dev](https://github.com/ripienaar/free-for-dev) 的**中文翻译版**，'
            '原文由 ripienaar 与 1600 多位贡献者共同维护，内容以英文原版为准。'
            '中文译文可能滞后于上游更新，如发现翻译问题欢迎提 Issue。'
            '如果这份清单对你有帮助，欢迎给原项目点个 Star。')

    toc_lines = ['## 目录', '']
    toc_lines += ['  * [%s](#%s)' % (h, sl) for h, sl in zip(heads, slugs)]
    toc = '\n'.join(toc_lines) + '\n'

    # 目录插在 intro 之后、正文之前
    # 注意：不要做全局空行折叠，原文存在少量连续双空行需保留
    readme = intro.rstrip('\n') + '\n\n' + note + '\n\n' + toc + '\n' + body.lstrip('\n')

    with open(os.path.join(ROOT, 'README.md'), 'w', encoding='utf-8') as f:
        f.write(readme)

    side = ['* [目录](#目录)', '']
    side += ['* [%s](#%s)' % (h, sl) for h, sl in zip(heads, slugs)]
    with open(os.path.join(ROOT, '_sidebar.md'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(side) + '\n')

    items = sum(1 for l in body.split('\n') if l.startswith('  * '))
    links = len(re.findall(r'\]\(https?://', body))
    print('README.md 章节 %d 个，条目 %d 条，外链 %d 个，%d 字节' % (
        len(heads), items, links, len(readme.encode())))
    print('_sidebar.md %d 行' % (len(side)))
    print('前 5 个锚点: %s' % ', '.join(slugs[:5]))

if __name__ == '__main__':
    main()
