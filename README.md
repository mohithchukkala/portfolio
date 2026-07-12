# Mohith Chukkala — Portfolio

A personal portfolio for **Mohith Chukkala**, an AI & Data Science student and aspiring software engineer. Built with plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.

It ships in **two designs**, each in its own folder, so the same content can be viewed either way:

| Folder | URL | Design |
| --- | --- | --- |
| [`terminal/`](terminal/) | `/terminal/` | **Terminal / dev-console** theme — the default. Interactive command prompt, `neofetch`-style intro card, and each section rendered as a command's output. |
| [`classic/`](classic/) | `/classic/` | The original **sidebar + cards** design, preserved and fully working. |

The root [`index.html`](index.html) is a tiny redirect that opens the **terminal** version by default, so the bare URL still works. Each design also has a `Terminal | Classic` switcher in its nav, so visitors can jump between them — neither link breaks.

## ✨ Features

- **Interactive terminal hero** — auto-types `whoami`, and visitors can type real commands (`help`, `projects`, `skills`, `resume`, `contact`, `clear`, …) with command history (↑/↓).
- **Content-first** — every section is readable by scrolling; typing a command is optional, never required.
- **`neofetch`-style profile card** with photo, stats (CGPA, DSA solved, semester), and quick links.
- **Scroll-spy** — the nav command of the section in view is highlighted (via `IntersectionObserver`).
- **Dark / light terminal themes**, persisted in `localStorage`.
- **Reveal-on-scroll** animations, with `prefers-reduced-motion` respected.
- Fully **responsive** across desktop and mobile.

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — Grid, Flexbox, custom properties, animations
- **JavaScript** — interactive prompt, theme toggle, scroll-spy (vanilla, no framework)
- **Google Fonts** — JetBrains Mono (terminal) · Poppins (classic)

## 📁 Project Structure

```
potfolio/
├── index.html          # Root redirect → terminal/ (keeps the bare URL working)
├── terminal/
│   ├── index.html      # Terminal design (default)
│   ├── style.css       # Terminal styling + light/dark themes
│   └── script.js       # Interactive prompt, theme toggle, scroll-spy
├── classic/
│   ├── index.html      # Original sidebar + cards design
│   └── style.css       # Styling for the classic design
├── images/             # Profile image (shared by both designs)
└── README.md
```

## 🚀 Getting Started

No build tools or installation required — it's a static site.

1. Clone the repository:
   ```bash
   git clone https://github.com/mohithchukkala/portfolio.git
   cd portfolio
   ```
2. Open `index.html` in your browser.

   Or serve it locally to avoid any file-protocol quirks:
   ```bash
   # Python
   python -m http.server 8000

   # Node
   npx serve
   ```
   Then visit `http://localhost:8000`.

## 📬 Contact

- **Email:** mohith2007.chukkala@gmail.com
- **GitHub:** [mohithchukkala](https://github.com/mohithchukkala)
- **LinkedIn:** [chukkala-mohith](https://linkedin.com/in/chukkala-mohith)
- **LeetCode:** [mohith_chukkala](https://leetcode.com/u/mohith_chukkala/)
