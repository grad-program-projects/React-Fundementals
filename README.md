# 🎓 Student Dashboard

A modern, pastel-themed React + TypeScript dashboard for displaying student grades and player leaderboards. Built with Vite for fast development and a clean light UI aesthetic.

---

## 📸 Preview

The dashboard features two panels side-by-side:
- **Report Card** — lists students with colour-coded grade badges (A–F) and summary stats
- **Leaderboard** — ranks players by score with medal indicators and animated score bars
- ![App screenshot](/GradeReportCard/src/assets/images/Screenshot 2026-02-24 at 07.26.23.png)


---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Installation

```bash
git clone (https://github.com/Kemi-p/React-Fundementals.git)
cd student-dashboard
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Leaderboard.tsx     # Ranked player list with score bars & medals
│   └── ReportCard.tsx      # Student grade list with colour-coded badges
├── utils/
│   └── utils.ts            # GetGrade() — maps numeric grade to label + CSS class
├── main.tsx                # App entry point, data arrays, layout wrapper
└── styles.css              # Full design system (CSS variables, components, animations)
```

---

## 🎨 Design System

The UI uses a **soft pastel light theme** built entirely with CSS custom properties.

### Colour Palette

| Token | Value | Use |
|---|---|---|
| `--bg` | `#f7f3ef` | Page background |
| `--surface` | `#ffffff` | Card backgrounds |
| `--border` | `#e8e0d8` | Subtle borders |
| `--grade-a` | `#d4edda` | A grade row (green) |
| `--grade-b` | `#cce5f7` | B grade row (blue) |
| `--grade-c` | `#fde8c8` | C grade row (peach) |
| `--grade-d` | `#fad7c0` | D grade row (amber) |
| `--grade-fail` | `#f8d0d0` | Fail row (red) |

### Typography

- **Display / headings**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — elegant serif
- **Body / UI**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) — clean, geometric sans-serif

### Animations

All list items fade and slide up using `@keyframes fadeUp` with staggered `animation-delay` values so the list reveals itself in sequence on load.

---

## 🧠 Component Reference

### `<ReportCard students={students} />`

| Prop | Type | Description |
|---|---|---|
| `students` | `{ name: string; grade: number }[]` | Array of student objects |

Displays each student's name, numeric grade, and a letter grade badge. The row background colour reflects the grade tier. A stats bar at the top shows total passing, highest grade, and class average.

### `<Leaderboard players={players} />`

| Prop | Type | Description |
|---|---|---|
| `players` | `{ name: string; score: number }[]` | Array of player objects |

Sorts players by score (descending) and displays rank with 🥇🥈🥉 medals for the top 3. Each row includes a proportional score bar and a score pill. A stats bar shows total players, top score, and average.

### `GetGrade(grade: number): GradeInfo`

Pure utility function. Returns `{ gradeLabel, className }` based on:

| Range | Label | Class |
|---|---|---|
| ≥ 80 | A | `PassA` |
| 70–79 | B | `PassB` |
| 60–69 | C | `PassC` |
| 50–59 | D | `PassD` |
| < 50 | F | `Fail` |

---

## 🌿 Git Workflow (GitFlow)

my project follows the **GitFlow** branching model.

### Branch Structure

```
main          ← stable production releases only
develop       ← integration branch, always deployable
feature/*     ← new features branched from develop
```

### Setting Up

```bash
# After cloning, create and switch to develop
git checkout -b develop
git push -u origin develop
```

### Starting a Feature

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# ... do your work ...

git add .
git commit -m "feat: describe what you did"
git push origin feature/your-feature-name
```

Then open a **Pull Request** from `feature/your-feature-name` → `develop`.

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| CSS Custom Properties | Design tokens & theming |
| Google Fonts | Typography (Playfair Display, DM Sans) |

---
