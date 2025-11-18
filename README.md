## Overview

Starter kit for the Nepal Youth Finance dashboard. The stack includes:

- Next.js App Router with TypeScript, strict linting, and absolute imports.
- Mantine UI with a theme override and foundational layout pieces.
- TanStack Query v5 with server-side hydration + devtools.
- Vitest + Testing Library for fast unit tests.
- Husky + lint-staged + Prettier to enforce formatting and lint cleanliness before every commit.

## Requirements

- Node.js ≥ 20
- npm ≥ 10

## Setup

1. Install dependencies

   ```bash
   npm install
   ```

2. Configure environment variables

   ```bash
   cp env.example .env.local
   ```

   Override `NEXT_PUBLIC_API_BASE_URL` if you want to target a different backend.

3. Start the dev server

   ```bash
   npm run dev
   ```

   Navigate to [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Start Next.js in dev mode       |
| `npm run build`        | Production build                |
| `npm run start`        | Run the production server       |
| `npm run lint`         | Lint sources with Next + ESLint |
| `npm run lint:fix`     | Lint with auto-fixes            |
| `npm run typecheck`    | Strict TypeScript checking      |
| `npm run format`       | Prettier write                  |
| `npm run format:check` | Prettier verify                 |
| `npm run test`         | Vitest run (headless)           |
| `npm run test:watch`   | Vitest watch mode               |
| `npm run coverage`     | Vitest with coverage reports    |

Husky runs `lint-staged` before every commit to ensure formatting and lint rules stay consistent.

## Project structure

```
app/                  # App Router entrypoints and providers
src/
  features/           # Feature-first modules (home, markets, etc.)
  lib/                # Cross-cutting helpers (env parsing, fetcher)
  styles/             # Mantine theme override
test/                 # Vitest setup + custom render utilities
```

## Frontend practices enabled

- **Design system**: Mantine theme + Notifications globally wired via `app/providers`.
- **Data**: TanStack Query 5 with React Server Component hydration and Suspense-based UI.
- **Validation**: Runtime-safe environment parsing via `zod`.
- **Tooling**: Prettier, EditorConfig, Husky, lint-staged, and strict ESLint/TypeScript configs.
- **Testing**: Vitest + Testing Library with provider-aware helpers.

Extend modules under `src/features/*`, reuse the shared HTTP + config utilities, and keep new UI inside Mantine components for consistency.
