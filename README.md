# Whiskful

A small, build-free website for Whiskful. GitHub Pages serves `index.html` from
the repository root. All local asset paths are relative, so the page works at
both `/whiskful-public/` and a custom domain.

## Local preview

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000>. No package installation or build is needed.

## Editing

- `index.html`: page copy and the supplied Mailchimp embed (formatting changes only).
- `about/index.html`: the baker biography, available at `/about/`.
- `menu/index.html`: specialty cakes, sizes, and other desserts.
- `styles.css`: layout and Mailchimp style overrides.
- `navigation.js`: the accessible mobile menu shared by all pages.
- `assets/`: the logo and baker portrait, shared social icons, and favicon.
- `.nojekyll`: lets GitHub Pages serve the static files directly.

All pages use relative links and local images. The header and footer are static
HTML so navigation remains available without JavaScript; the stylesheet, mobile
menu behavior, and SVG icon symbols are shared. Keep the navigation links in all
pages in sync when adding a page. Only the Mailchimp form loads external assets.

## Formatting and checks

Use [prek](https://prek.j178.dev/) through [uv](https://docs.astral.sh/uv/)
to install the Git hooks and run them across the repository:

```sh
uvx prek==0.5.7 install
uvx prek==0.5.7 run --all-files
```

## Rights and third-party materials

Whiskful’s original content and code are **all rights reserved**, including
photographs, text, and artwork. Public availability does not grant a reuse
license. See [LICENSE.md](LICENSE.md) and
[third-party notices](THIRD_PARTY_NOTICES.md) for exceptions and attribution.
