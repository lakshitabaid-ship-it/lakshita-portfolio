# Lakshita Baid — Portfolio

A single-page personal portfolio for **Lakshita Baid** (Hubballi, Karnataka, India), built with plain HTML5, CSS3 and vanilla JavaScript. No frameworks, bundlers or backends. Tagline: *Ideas. People. Possibilities.*

## Files

```
index.html              the page (12 sections)
style.css               all styling (tokens → reset → base → layout → components → sections → animations → media queries)
script.js               interactions + configuration constants at the top
README.md               this file
SUBMISSION_GUIDE.md     assignment submission steps
assets/
  images/               put lakshita.jpg and competition photos here
  icons/favicon.svg     "LB" favicon
  documents/            put resume.pdf and mehfil-presentation.pdf here
```

Open `index.html` in a browser to preview locally. Nothing needs to be built. A `.nojekyll` file is **not required** for this project.

## How to replace placeholders

Every missing fact is shown as a dashed, striped `[ADD …]` box so it never looks like real information. Replace these:

| Placeholder | File | What to change |
|---|---|---|
| Portrait photo | `index.html`, `<div class="photo-placeholder">` inside `.photo-frame` (follow the comment above it) | Save `assets/images/lakshita.jpg` (4:5, ≥ 800×1000px). Replace the div with `<img src="assets/images/lakshita.jpg" alt="Portrait of Lakshita Baid" width="800" height="1000">` |
| LinkedIn URL | `script.js`, `LINKEDIN_URL` | Paste your profile URL between the quotes |
| Email | `script.js`, `EMAIL` | Paste your professional email (no `mailto:`) |
| Resume | `script.js`, `RESUME_PATH` | Put `resume.pdf` in `assets/documents/`, then set `"assets/documents/resume.pdf"` |
| Mehfil presentation | `script.js`, `MEHFIL_PDF_PATH` | Put the file in `assets/documents/`, then set `"assets/documents/mehfil-presentation.pdf"` |
| Competition photos | `index.html`, `.photo-placeholder--wide` in `#speaking` | Replace the div with an `<img>` and a meaningful `alt` |
| Certificates / competition names / dates | `index.html`, each `<p class="placeholder">[ADD: …]</p>` in `#speaking` and `#leadership` | Replace with the real text or an image |
| Internship dates | `index.html`, `[ADD DATES]` in `#experience` | Type the real month/year range |
| Education years | `index.html`, `[ADD YEARS]` / `[ADD SCHOOL NAME AND YEAR]` in `#education` | Type the real years |
| Teaching details | `index.html`, `[ADD: school / programme name, dates]` in `#speaking` | Fill in or delete the line |
| Product mockups | `index.html`, `[ADD: product mockup]` in `#projects` | Replace with an image if you have one |
| Roll number, live URL, repo URL | PDF draft only | See `SUBMISSION_GUIDE.md` |

When a contact value in `script.js` is filled in, its button turns into a working link automatically (LinkedIn opens in a new tab with `rel="noopener"`, email uses `mailto:`, resume downloads).

## Deploy on GitHub Pages (no repository yet)

1. Create a free account at <https://github.com> if you do not have one.
2. Click **New repository**.
3. Name it `lakshita-baid-portfolio` (or `<username>.github.io` for a root URL). Set it to **Public**. Tick "Add a README" only if you plan to upload through the web page.
4. Upload your files, either:
   - **Web:** *Add file → Upload files*, drag `index.html`, `style.css`, `script.js` and the whole `assets` folder (keep the folder structure), or
   - **Git:**
     ```
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin <repo-url>
     git push -u origin main
     ```
5. Commit the changes.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
8. Wait 1–3 minutes, then copy the live URL shown at the top of the Pages settings. It looks like `https://<username>.github.io/<repo-name>/`.
9. Verify: the page loads; CSS and JS load; no 404 errors in the DevTools console; placeholders display; navigation works; mobile view is fine; file names match exactly (GitHub Pages is case-sensitive).
10. To update later, edit files on GitHub or push new commits. Hard-refresh (Ctrl/Cmd + Shift + R) if you see an old version.

## Notes

- The mobile menu drawer appears below 1100px (twelve links need the room); the layout breakpoints are 600px, 900px and 1200px.
- Animations respect `prefers-reduced-motion`.
- Fonts (Bricolage Grotesque, DM Sans, Caveat, Fraunces) load from Google Fonts; fallbacks are defined.
