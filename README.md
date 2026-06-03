# FEBQI Lab Homepage

Bilingual (English / Japanese) lab website for the FEBQI group at RIKEN.

Homepage of the **FEBQI (Floating Electrons and Beyond for Quantum Information) Lab**, led by Erika Kawakami at the RIKEN Center for Quantum Computing.

- **Live site (production):** https://febqi.github.io/lab-hp/
- **Live site (development):** separate staging site (URL not listed here)

## Development workflow

1. Edit files in the development repository
2. Push to verify: `git push`
3. When ready to publish to `febqi/lab-hp`: trigger the **Mirror to febqi/lab-hp** workflow from the Actions tab in the development repository

### Mirror workflow setup

The workflow (`.github/workflows/mirror-to-febqi.yml`) pushes `main` from the development repository to `febqi/lab-hp` on demand (manual trigger only).

**Required secret in the development repository:**

| Secret name | Value |
|---|---|
| `FEBQI_TOKEN` | Classic Personal Access Token with `repo` + `workflow` scopes, belonging to an account with write access to `febqi/lab-hp` |

To regenerate: GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic) → check `repo` and `workflow` → save as `FEBQI_TOKEN` in the development repository's secrets.

## Built with

This site is built on [al-folio](https://github.com/alshedivat/al-folio), a beautiful Jekyll theme for academics, and its multilingual fork [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio) by [george-gca](https://github.com/george-gca). Hosted on GitHub Pages.

We are grateful to the al-folio developers and contributors for creating and maintaining such a polished and feature-rich academic theme, and to george-gca for the excellent multilingual extension that made bilingual support straightforward to implement.

## Languages

English (`_pages/en-us/`, `_posts/en-us/`, `_data/en-us/`) and Japanese (`_pages/ja/`, `_posts/ja/`, `_data/ja/`).

## Site structure

See [STRUCTURE.md](STRUCTURE.md) for how to add content and maintain the site.
