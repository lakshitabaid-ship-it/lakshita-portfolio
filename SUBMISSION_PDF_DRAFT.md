# Web Design Mid-Term Project — Lakshita Baid
**File name:** RollNo_WD_MTProject.pdf  ·  **Roll number:** [YOUR ROLL NUMBER]

**Live website:** [PASTE LIVE GITHUB PAGES URL]
**GitHub repository:** [PASTE REPOSITORY URL]

## 1. CSS improvements implemented
- **CSS variables (design tokens)** in `:root` for colour, typography, spacing (4px–128px), radius, shadows and motion timing.
- **Flexbox** for the navigation bar, button rows, chip lists and footer; **CSS Grid** for the 12-column hero, card grids, the timeline and education layout.
- **Positioning:** a sticky navigation bar, absolutely positioned stickers and tape strips, and a fixed full-screen mobile menu.
- **Hover, focus and active states:** cards lift and tilt, buttons scale, stickers wobble, and visible `:focus-visible` outlines are used on all interactive elements. Hover effects sit inside `@media (hover: hover)`.
- **Keyframe animations:** `float`, `spin-slow`, `twinkle`, `slide-up` (tagline), `marker-draw` (highlighter), `bounce-y` (scroll arrow) and `dash` (animated network lines).
- **Responsive media queries** at 600px, 900px and 1200px, plus a menu breakpoint at 1100px and a `prefers-reduced-motion` rule.
- **Selector types:** element selectors (`body`, `h1`, `p`, `a`), class selectors (`.card`, `.sticker`, `.btn`) and ID selectors (`#home`, `#site-nav`, `#contact`), all labelled in a "SELECTOR DEMONSTRATION" comment at the top of `style.css`.

## 2. Website sections
- **Home:** name, tagline, intro, two call-to-action buttons and a photo placeholder with floating stickers.
- **About:** a personal note card, four fact stickers and a clickable card cycling through three true statements.
- **Speaking:** eight expandable award cards, a teaching block and a competition photo placeholder.
- **Leadership:** a timeline (vertical on mobile, horizontal on desktop) with a scroll-filled line and a "13+" counter.
- **Experience:** the TechStore Service Manager internship, with skill chips that highlight related responsibilities.
- **Education:** four colour-coded expandable cards.
- **Partnerships:** Partnership Cell membership and areas of interest, with an SVG illustration.
- **Projects:** MEHFIL, a proposed brand concept with three collection cards and an expandable case study.
- **Community:** the Content Creators' Community, labelled "In development", with a connected-nodes graphic.
- **Interests:** thirteen toggle cards with a live count.
- **Skills:** eight expandable skill clusters.
- **Contact:** LinkedIn, Email and Resume buttons that activate when their values are set in `script.js`.

## 3. Design decisions
- **Concept:** a colourful scrapbook / sticker-collage look (tape strips, tilted cards, hard offset shadows, paper-grain texture) so the site feels personal rather than corporate. Facts stay in clear cards and tags.
- **Colour:** cream background, dark ink, cobalt, pink and yellow, with mint, lavender and coral as support colours. Darker pink and orange variants are used for text to keep contrast at WCAG AA.
- **Typography:** four Google Fonts: Bricolage Grotesque (display and headings), DM Sans (body), Caveat (handwritten notes) and Fraunces italic (pull quote).
- **Accessibility:** semantic landmarks, a skip link, one `<h1>`, `aria-expanded` and `aria-controls` on expandable cards, `aria-current` on the active nav link, a focus-trapped mobile menu, keyboard-operable controls and reduced-motion support.
- **Responsiveness:** a mobile-first layout, with the mobile layout redesigned (stacked hero, vertical timeline, full-width buttons, fewer decorations) rather than shrunk.
- **Vanilla JavaScript:** no libraries are needed for these interactions, so the code stays small, readable and easy to host on GitHub Pages.
- **Accuracy:** missing facts are shown as dashed `[ADD …]` placeholders, never invented details.

## How to export to PDF
Paste this text into Word or Google Docs, fill in the three bracketed items, choose File → Download / Save as PDF, check it is 2 pages or fewer, and rename the file `RollNo_WD_MTProject.pdf`.
