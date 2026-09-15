# TLS project handoff (for a new Claude Code session)

Written 2026-09-14 when this project moved out of an unrelated session. **Read this first**, then `README.md` and the other files in `docs/`.

## Scope boundary
- This project is **only** the two TLS websites, in `C:\Users\Parlevu_Global\lettlshelp.com` (its own git repo).
- **dadstillhere / `dadstillhere.com-landingpage` / the home-folder repo is unrelated.** Don't touch it from this project.

## Client & brands
- Owner: **Tanika L. Smith** · LetTLSHelp@gmail.com · +1 (240) 650-0007 · LinkedIn linkedin.com/in/lettlshelp
- **Transformative Life Solutions** → https://TransformativeLifeSolutions.com: family, parenting, divorce/separation, interpersonal, and workplace (non-consumer-facing only) mediation, plus conflict coaching.
- **Transformative Leadership Systems** → https://TransformativeLeadershipSystems.com: B2B-only arbitration and med-arb, business mediation, negotiation support (including NDAs), and leadership conflict coaching. The name is **Systems** (the June draft and signature say "Solutions"; that's wrong).
- Future emails (not active): Services@TransformativeLifeSolutions.com, Services@TransformativeLeadershipSystems.com

## Source materials (in ~/Downloads)
- **Source of truth:** `TLS_Website Development Guide_ 09132026.pdf` and `TLS2_Website Development Guide_ 09132026.pdf`. The June 29 drafts in `Guides for Website Design/` are superseded.
- `Logos/Logos/`: JPEG logos. The owner also pasted sharper versions in chat, but those weren't saved to disk; ask for SVG/PNG files.
- `Color Pallets/Color Pallets/`: both palette sheets (the Leadership palette was confirmed in chat).
- `Imagery for Websites/Imagery for Websites/`: 27 sample photos. Which ones are used and why is in `docs/consistency-review.md`.
- The owner's full brief (pages, style, integrations, disclaimers, keywords) is summarized in `docs/architecture.md` and `docs/seo-plan.md`.

## Decisions made with the user
| Decision | Detail |
|---|---|
| Deliverable | Phase 1: HTML wireframe (done). Phase 2: WordPress block theme (`tls-base` parent + `tls-life` / `tls-leadership` children) **after owner approval** |
| Repo | One repo, both sites, shared design system; deployed as two separate WordPress installs; hosting target about $10/mo |
| Confidentiality disclaimer | Show both options on each Terms page, flagged "pending legal review" (the owner's guide wording vs. the brief's "Maryland Rule 17" wording) |
| Keywords | Split by service. The Life site mentions arbitration, negotiation, and NDAs only as links to Leadership Systems |
| Header | "Leadership Systems ↗" was **removed** from the Life header at the user's request; the sister site is linked from the footer and cross-link bands only |
| SEO checklist (user-supplied) | Every item is implemented and enforced by `tools/seo_check.py`: meta titles ≤60 chars, descriptions, alt text, one H1 plus heading order, canonical, og:image, schema, sitemap, robots, HTTPS `.htaccess`, WebP, internal links, mobile. **Avoid:** noindex (removed) and broken links (0) |
| Git workflow | **As of 2026-09-15, every change goes through a pull request:** create a branch off `main`, commit, push the branch, and open a PR into `main` with `gh pr create`. Don't push directly to `main`. (Commits up to `63a1baf` went straight to `main` before this rule.) The repo is **PUBLIC**, so never commit API keys or passwords. The GA4 Measurement ID and GSC token are fine |
| Content rule | Never invent credentials, testimonials, client stories, or statistics. Unsourced copy carries a `draft` note that renders as a yellow "Review" flag |

## Current state
- Commits on `main`: `75088b9` wireframes → `f75fd03` header link removed → `5c40e11` SEO checklist (plus the commit adding this handoff).
- **⚠️ Not pushed:** GitHub `origin/main` is at `f75fd03`. The pushes failed because the GitHub CLI token in the keyring is invalid and the network was flaky. Fix with `gh auth refresh -h github.com`, then `git push origin main`.
- Checks run: `seo_check.py` gives 0 failures and 1 warning (Leadership has no Search Console token). No sideways overflow on all 20 pages at 375, 768, and 1280 px. The mobile menu, notes toggle, WebP hero, and preload were verified in the browser. Git history has no secrets.

## How to work on it
```bash
python tools/build.py                 # render wireframes from content/*.py
python tools/seo_check.py             # must pass before committing
python -m http.server 8765 --directory wireframes   # preview at http://127.0.0.1:8765/
python tools/process_assets.py        # only when logos/photos in ~/Downloads change (needs Pillow)
```
- Copy lives in `content/life.py`, `content/leadership.py`, and `content/common.py`. Styles are in `design-system/`.
- Each section maps to a planned WordPress pattern; "Show wireframe notes" on any page shows the mapping.

## Open questions for the owner and her attorney
1. Which confidentiality statement per site (legal review)? The Life guide's act name ("Maryland Mediation and Confidentiality Act") may be mis-stated.
2. Confirm the scope for separation agreements, prenuptial agreements, and NDAs (avoid implying legal drafting).
3. Privacy Policy and Terms are outlines only; an attorney must draft them.
4. Service area and address (for local SEO and `areaServed`).
5. Credentials, trainings, and roster listings to display; founder portrait; replacement photos (Black and brown elders, families, civic groups); SVG logos plus a horizontal lockup.
6. How It Works details (session length, fees).
7. Which domain the GSC token `nueZtT3ZZsV8SutwZKliXMbZEHgZePLeyCRynDhq78c` belongs to; a separate property for Leadership Systems; GA4 Measurement IDs (`G-…`, **not** an API key).
8. Hosting plan and renewal price; whether Google Workspace fits the budget (see `docs/architecture.md`).

## Suggested next steps
1. Fix GitHub auth and push `main`.
2. Share the wireframe with Tanika (e.g., as a private artifact link) and collect answers to the questions above.
3. After approval, build the WordPress block theme from `design-system/tokens.json` plus the pattern map in `docs/architecture.md`.
4. Start the backlink Phase 1 foundations (`docs/backlink-strategy.md`) once the domains are live.
