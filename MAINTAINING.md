# 中文版维护说明

本项目是 [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) 的简体中文版本，
用 [docsify](https://docsify.js.org/) 渲染 `README.md`，静态托管在 Vercel。

## 目录结构

```
.
├── README.md          # 中文正文（由 work/ 下的分片自动组装，不要手改）
├── README.en.md       # 上游英文原文快照，用于对照与增量翻译
├── _sidebar.md        # 左侧目录（自动生成）
├── index.html         # docsify 入口
├── vendor/            # 本地化的 docsify / 样式 / 中文搜索插件（不依赖 CDN）
└── work/
    ├── BRIEF.md       # 翻译规范（术语表、结构约束）
    ├── intro-zh.md    # 中文前言
    ├── assemble.py    # 分片 → README.md + _sidebar.md 的组装脚本
    ├── src/           # 按章节切分出的英文原文分片
    └── zh/            # 对应的中文分片
```

## 站点特性

- **不依赖外网 CDN**：docsify 与主题样式全部本地化在 `vendor/`，离线也能跑。
- **中文搜索**：`vendor/search-zh.js` 是自写插件。docsify 自带的搜索按空格分词，
  对中文无效；本插件直接复用已渲染的 DOM 建索引，按"关键词子串全部命中"过滤，
  命中后跳转到所属章节并高亮该条目。
- **左侧常驻目录**：`_sidebar.md` 由 `assemble.py` 从二级标题生成。

## 如何更新到上游最新版

```bash
# 1. 拉取上游最新英文原文
git remote add upstream https://github.com/ripienaar/free-for-dev.git   # 首次
git fetch upstream master
git show upstream/master:README.md > README.en.md

# 2. 找出与上次快照的差异（新增/删除/修改的条目）
git diff HEAD:README.en.md README.en.md --word-diff=plain | head -200

# 3. 按 work/BRIEF.md 的规则翻译差异部分，更新 work/zh/ 下对应分片
# 4. 重新组装
python3 work/assemble.py

# 5. 提交并部署
git commit -am "同步上游更新"
git push
vercel --prod
```

也可以重新切分上游原文后整批重译：`work/src/chunk-*.md` 是按二级标题均衡切分出来的分片，
每片交给一次翻译即可，`assemble.py` 负责拼装与生成中文目录锚点。

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://127.0.0.1:8000/
```

> 注意：docsify 通过 `fetch` 读取 `README.md`，必须用 HTTP 服务打开，直接双击
> `index.html`（`file://`）会被浏览器的同源策略拦下。

## 翻译约定（摘要，完整见 work/BRIEF.md）

- 结构、缩进、条目数、URL 与原文一一对应，一条服务占一行，不擅自合并或拆分。
- 产品名、品牌名、URL、数字、限额、版本号一律不译。
- 术语统一：free tier→免费额度、free plan→免费套餐、self-hosted→自托管、
  no credit card required→无需信用卡、custom domain→自定义域名。
- 内容以英文原版为准；中文译文滞后于上游时以原文为准。
