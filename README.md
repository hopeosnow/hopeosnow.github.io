# Hopes — Hexo 博客

站点标题 **Hopes**，含 Hydronos 博客栏目、淡蓝主题、动画与 404 页面。

## 本地预览

```bash
npm install
npx hexo server   # http://localhost:4000
```

## 写博文

在 `source/_posts/` 新建 `.md` 文件，front-matter 示例：

```yaml
---
title: 文章标题
date: 2026-11-08 21:30:00
categories:
  - Hydronos   # 归到 Hydronos 栏目就写这个
---
```

## 部署到 GitHub Pages

1. 在 GitHub 建仓库，仓库 Settings → Pages → Source 选 **GitHub Actions**
2. 改 `_config.yml` 里的 `url`：
   - 仓库叫 `yourname.github.io` → `https://yourname.github.io`
   - 其他仓库名（项目页）→ `https://yourname.github.io/仓库名`（当前占位值）
   （url 决定静态资源路径前缀，不改会导致 CSS/JS 404）
3. push 到 `main` 分支，Actions 自动构建部署
