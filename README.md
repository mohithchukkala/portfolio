# Mohith Chukkala — Portfolio

A responsive single-page personal portfolio for **Mohith Chukkala**, an AI & Data Science student and aspiring software engineer. Built with plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.

## ✨ Features

- **Responsive layout** — CSS Grid with a fixed sidebar and fluid main content that adapts to mobile.
- **Sticky navigation** with smooth-scroll anchor links to each section.
- **Scroll-spy** — the nav link of the section currently in view is highlighted automatically (via `IntersectionObserver`).
- **Dark / light mode** toggle, with the chosen theme persisted in `localStorage`.
- **Card components** with fade-in and hover-lift animations.
- Sections for About, Education, Skills, Projects, Goals & Achievements, and Contact.

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — Grid, Flexbox, custom properties, animations
- **JavaScript** — theme toggle and scroll-spy (vanilla, no framework)
- **Google Fonts** — Poppins

## 📁 Project Structure

```
potfolio/
├── index.html      # Page markup + inline theme/scroll-spy scripts
├── style.css       # All styling, including dark-mode variables
└── images/         # Profile image and assets
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
