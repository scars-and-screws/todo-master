# ✅ Todo Master — React + Tailwind + Vite

Modern productivity surface built with React 19, Tailwind CSS v4, and Vite. Todos are powered by a reducer, persisted with `localStorage`, and wrapped in a futuristic-but-usable UI.

> Designed for GitHub + Netlify deployments: scripts, documentation, and structure are ready for prime time.

---

## 🔗 Live Demo

```pwsh
https://todo-master-69.netlify.app
```

---

## ✨ Feature Highlights

- 🧭 **Clean productivity workspace** — hero summary, focus cards, and a structured inbox
- 🧠 **Pure reducer state** — predictable actions (`ADD`, `EDIT`, `TOGGLE`, etc.) with duplicate protection
- 💾 **Persistent data** — todos survive refreshes using a tiny storage helper
- 🧼 **Realistic UX** — inline editing, contextual actions, empty states, and progress insights
- ♿ **Accessibility-first** — semantic roles, aria labels, keyboard flows, focus rings
- ⚡ **Fast toolchain** — React 19 + Tailwind v4 + Vite 7 + Vitest for fast builds/tests

---

## 🧰 Stack & Tooling

| Layer   | Details                                                         |
| ------- | --------------------------------------------------------------- |
| UI      | React 19, functional components, inline SVG icon set            |
| Styling | Tailwind CSS v4 + @tailwindcss/vite, zero custom CSS            |
| State   | `useReducer` + custom `useTodos` hook, localStorage persistence |
| Build   | Vite 7, ESLint 9, Vitest 2                                      |
| Testing | Vitest unit tests for reducer (fast + deterministic)            |

---

## 🗂️ Project Structure

```text
Todo-with-reducer/
├─ public/
│  └─ todo-master.svg        # Favicon/logo shared between shell and README art
├─ src/
│  ├─ App.jsx                # Background shell + header/footer frame
│  ├─ main.jsx               # React entry, mounts <App />
│  ├─ index.css              # Tailwind entry (no custom rules)
│  ├─ lib/
│  │  ├─ storage.js          # load/save helpers for localStorage persistence
│  │  └─ cn.js               # Micro classNames helper
│  ├─ hooks/
│  │  └─ useTodos.js         # Reducer wiring, derived counts, filters, handlers
│  ├─ state/
│  │  └─ reducer.js          # Pure reducer with business rules
│  └─ components/
│     ├─ TodoApp.jsx         # Top-level UI composition
│     ├─ TodoItem.jsx        # Single task row (toggle/edit/delete)
│     ├─ StatsBar.jsx        # Insight card + progress rail
│     ├─ FilterTabs.jsx      # State-aware segmented control
│     └─ icons.jsx           # Inline SVG icon set + logo mark
├─ tests/
│  └─ reducer.test.js        # Vitest coverage for reducer actions
├─ eslint.config.js
├─ vite.config.js
└─ package.json
```

---

## 🧩 Architecture Notes

- **Data flow** — `useTodos` owns reducer state, derived counts, filters, and persistence side effects.
- **Business rules** — newest-first ordering, duplicate prevention (case-insensitive), empty-input guards.
- **Presentation** — `TodoApp` orchestrates hero cards + task board, while leaf components stay stateless/presentational.
- **Icons** — custom inline SVG to avoid external icon packages and to keep bundle size predictable.

---

Run the checks anytime:

```pwsh
npm run test
npm run lint
npm run build
```

---

## 🚀 Getting Started

```pwsh
git clone <repo-url>
cd Todo-with-reducer
npm install

# Start dev server
npm run dev

# Production build + preview
npm run build
npm run preview
```

> Tailwind v4 ships inside Vite (via `@tailwindcss/vite`), so no extra config files are required.

---

Made with 💙 by humans + Tailwind gradients.
