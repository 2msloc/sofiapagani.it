# Sofia Pagani — Portfolio

Static portfolio site. Hugo. Zero runtime dependencies.

```sh
hugo server    # preview → http://localhost:1313
hugo --minify  # build → /public
```

Requires `hugo >= 0.100` (extended).

---

## Update portfolio

### New project

1. Add photos to `static/images/portfolio/`:

```
project-name-cover.jpg
project-name-01.jpg
project-name-02.jpg
```

2. Create `content/portfolio/project-name.md`:

```yaml
---
title: "Project Name"
code: "PN—05"
category: "Portrait"
cover: "project-name-cover.jpg"
weight: 5
description: "One sentence."
images:
  - "project-name-01.jpg"
  - "project-name-02.jpg"
---
```

### Reorder

Change `weight` in `.md` files. Lower numbers appear first.

### Remove

Delete the `.md` from `content/portfolio/`.

### Contact & social

Edit `hugo.toml` → `[params]`:

```toml
email = "info@sofiapagani.it"
instagram = "https://instagram.com/quietssofy"
```

---

## Deploy

GitHub Pages with custom domain `sofiapagani.it`.

1. Push to `main` → automatic deploy via GitHub Actions
2. DNS: point A records to GitHub Pages IPs, CNAME `www` to `{user}.github.io`
3. Settings → Pages → Custom domain → `sofiapagani.it`

---

## Structure

```
content/
  _index.md
  contatti.md
  portfolio/
    _index.md
    silenzi-urbani.md
    volti-sospesi.md
    materia-prima.md
    confini.md

static/
  CNAME
  images/portfolio/

themes/minima/
  layouts/
  static/css/
  static/js/

hugo.toml
```
