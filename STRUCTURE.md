# Lab HP — Site Structure

## Overview

Jekyll-based bilingual (English / Japanese) lab website, based on [al-folio](https://github.com/alshedivat/al-folio).

---

## Adding Content

### Blog post (news)
Create two files — one per language:
```
_posts/en-us/YYYY-MM-DD-slug.md
_posts/ja/YYYY-MM-DD-slug.md
```
Frontmatter:
```yaml
---
layout: post
title: Title here
date: 2026-06-01 00:00:00+0900
description: Short description
tags: publication        # or: news, award, outreach
categories: news
thumbnail: /assets/img/image.png
---
```

### Publication
Edit `_bibliography/papers.bib` only — `assets/papers.bib` is auto-generated at build time by `_plugins/export-bib.rb`.

### Presentation
Add an entry to `_data/presentations.yml`.
Pre-2023 data lives in `_data/presentations_before2023.yml`.

### Outreach activity
Add an entry to `_data/outreach_activities.yml`.
Pre-2023 data lives in `_data/outreach_activities_before2023.yml`.

### Award
Add an entry to `_data/awards.yml`.

### Project page
Create a file in `_projects/` (language-neutral, single file).

---

## Directory Structure

```
_bibliography/papers.bib     ← Single source for all publications (BibTeX)
_data/
  presentations.yml          ← Presentations (2023–present)
  presentations_before2023.yml
  outreach_activities.yml    ← Outreach (2023–present)
  outreach_activities_before2023.yml
  awards.yml
  coauthors.yml              ← Coauthor metadata (for underline highlighting)
  en-us/strings.yml          ← UI strings (English)
  ja/strings.yml             ← UI strings (Japanese)
_pages/
  en-us/                     ← English pages
  ja/                        ← Japanese pages (always keep in sync)
_posts/
  en-us/                     ← English blog posts
  ja/                        ← Japanese blog posts
_projects/                   ← Project pages
_plugins/
  export-bib.rb              ← Copies _bibliography/papers.bib → assets/papers.bib
assets/img/                  ← Images (flat structure)
```

---

## Bilingual Rule

Every change to an English file must be reflected in the Japanese file and vice versa.

---

## Local Development

```bash
/usr/local/opt/ruby/bin/bundle exec jekyll serve --config _config.yml,_config_local.yml
```

Open http://localhost:4000

---

## Deployment

Push to `erikawa-e/lab-hp` → GitHub Actions builds and deploys automatically.
Mirror to `febqi/lab-hp` manually when ready.

---

## FAQ

### How do I add a new lab member?
1. Add a photo to `assets/img/`
2. Create a profile file: `_pages/en-us/member_name.md` and `_pages/ja/member_name.md`
3. Add the member to `_pages/en-us/profiles.md` and `_pages/ja/profiles.md`
4. Add coauthor metadata to `_data/coauthors.yml` (for underline highlighting in publications)

### How do I add a new presentation?
Add an entry to `_data/presentations.yml`:
```yaml
- title: "Talk title"
  date: "Jan 1, 2026"
  year: 2026
  type: Oral          # or: Poster
  invited: true       # omit if not invited
  presenter_html: "<u>E. Kawakami</u>"
  conference: "Conference Name"
  venue: "City, Country"
  lang: en            # or: ja
```

### How do I add a new paper?
Add a BibTeX entry to `_bibliography/papers.bib`. Set `selected={true}` to feature it on the top page.

### How do I add a news post?
Create `_posts/en-us/YYYY-MM-DD-slug.md` and `_posts/ja/YYYY-MM-DD-slug.md`. See the Adding Content section above.

### How do I add an award?
Add an entry to `_data/awards.yml`.

### The Japanese and English pages look different — what happened?
Always edit both `_pages/en-us/` and `_pages/ja/` (and `_posts/`) together. They are not auto-synced.

### Where do I put images?
Place image files in `assets/img/` and reference them as `/assets/img/filename.png`.
