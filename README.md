# Department of Computer Science — Digital Platform

A production-grade public website and secure admin portal for the
Department of Computer Science.

> **Status:** Phase 1 — architecture, design system, layout chrome, mock
> data, and a small number of representative pages. The admin portal and
> auth flows land in Phase 2.

---

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Next.js 15 (App Router, RSC)            |
| Language       | TypeScript (strict)                     |
| Styling        | Tailwind CSS 3 + small set of primitives |
| Typography     | `next/font` — Inter (sans) + Fraunces (serif) |
| Data (Phase 1) | In-repo mock data under `src/data/`     |
| Data (Phase 2) | Supabase / PostgreSQL                   |
| Auth (Phase 2) | Supabase Auth + RLS                     |
| Deployment     | Vercel                                  |

No third-party UI kit is wired in. The component layer is intentionally
small and hand-rolled.

---

## Folder structure

```
compssa-website/
├── public/
├── src/
│   ├── app/
│   │   ├── (public)/             # public route group
│   │   │   ├── layout.tsx        # public chrome (header + footer)
│   │   │   ├── page.tsx          # home
│   │   │   ├── about/
│   │   │   ├── academics/
│   │   │   │   ├── programmes/
│   │   │   │   └── courses/
│   │   │   ├── people/
│   │   │   │   ├── hod/
│   │   │   │   ├── staff/
│   │   │   │   └── executives/
│   │   │   │       └── history/[year]/
│   │   │   ├── research/
│   │   │   ├── students/
│   │   │   ├── past-questions/
│   │   │   ├── news/
│   │   │   ├── events/
│   │   │   ├── gallery/
│   │   │   ├── alumni/
│   │   │   ├── feedback/
│   │   │   └── contact/
│   │   ├── (admin)/admin/        # admin route group
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx            # root layout, fonts, metadata
│   │   ├── globals.css           # design tokens, base styles
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                   # primitives (Button, Container, ...)
│   │   ├── layout/               # chrome (header, footer, nav, ...)
│   │   └── index.ts
│   ├── data/                     # mock data layer
│   │   └── index.ts              # barrel
│   ├── lib/
│   │   ├── navigation.ts         # nav config
│   │   ├── site.ts               # site identity
│   │   └── utils.ts              # cn(), formatters, slugify
│   └── types/                    # domain types
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Design system

Editorial, institutional, minimal.

- **Type:** Inter (sans, UI) + Fraunces (serif, display & body) + JetBrains
  Mono (code).
- **Palette:** warm paper neutrals (`#FAFAF7`, `#0B0B0A`), a single restrained
  burgundy accent (`#7A1F1F`). No gradients, no glassmorphism, no glow.
- **Radii:** small (2–6px). Cards have hairline borders, never heavy shadows.
- **Motion:** restrained. Honors `prefers-reduced-motion`.
- **Spacing scale:** Tailwind defaults, used at deliberate rhythm.

Tokens are configured in `tailwind.config.ts` and `globals.css`. Do not hardcode
hex values in components.

---

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build
npm run lint
npm run typecheck
```

---

## Data model

The TypeScript types in `src/types/index.ts` mirror the planned PostgreSQL
schema 1:1. When the backend lands in Phase 2:

1. A `lib/services/*` layer is added per entity, with the same function
   signatures as today's mock helpers.
2. The data files in `src/data/` are replaced by service calls.
3. No UI changes are required.

Executives are modelled as **terms** (one per academic year) with a list of
**members**, replacing any hardcoded "current vs past" split. See
`src/data/executives.ts`.

---

## Security

Phase 1 has **no authentication wired in**. `/admin` is a stub. In Phase 2
this becomes:

- Supabase Auth (email magic link + password)
- Row-Level Security on every table
- Role-based authorisation (`admin`, `editor`, `viewer`)
- Server-side validation via Server Actions / Route Handlers
- Audit logging (table in `src/types/index.ts`)

Secrets are never committed — see `.env.example`.

---

## Phase plan

- [x] Phase 1 — architecture, design system, layout chrome, mock data,
      selected pages (Home, Programmes, Courses, Past Questions, People
      incl. Executives + HOD history, News, Events, Research, Gallery,
      Contact), admin dashboard placeholder.
- [ ] Phase 2 — Supabase schema + RLS, auth wiring, admin CRUD.
- [ ] Phase 3 — feedback, alumni, students, content modelling.
- [ ] Phase 4 — search, analytics, performance budgets.