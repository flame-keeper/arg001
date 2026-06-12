# Project: arg001

A full-stack template using React (Frontend), Hono (Backend/API), and Cloudflare Workers (Runtime).

## Architecture

- **Frontend (`src/react-app/`)**:
  - React 19 application built with Vite.
  - **Routing**: TanStack Router (`@tanstack/react-router`).
  - **State Management**: Jotai (`jotai`).
  - **Styling**: UnoCSS (`unocss`) for utility-first styling.
  - **Icons**: SVG assets in `src/react-app/assets/`.
- **Backend/Worker (`src/worker/`)**:
  - Hono (`hono`) application running on Cloudflare Workers.
  - Handles API routes and static asset serving.
- **Shared**: TypeScript throughout for type safety across the stack.

## Tech Stack

- **Frontend**: React, TanStack Router, Jotai, UnoCSS.
- **Backend**: Hono.
- **Runtime**: Cloudflare Workers.
- **Tooling**: Vite, Wrangler, ESLint, TypeScript.
- **Testing**: Vitest, React Testing Library.

## Development Workflow

### Scripts

- `pnpm dev`: Starts the Vite development server (Full-stack HMR).
- `pnpm build`: Type-checks and builds both frontend and worker.
- `pnpm test`: Runs Vitest for unit and component tests.
- `pnpm lint`: Runs ESLint for code quality checks.
- `pnpm deploy`: Deploys the application to Cloudflare Workers.
- `pnpm cf-typegen`: Generates types for Cloudflare bindings.

### Local Development

- The development server uses Vite's integration with Cloudflare Workers.
- API routes defined in `src/worker/index.ts` are accessible during development.

## Coding Conventions

### Frontend

- **Routing**: Use TanStack Router's file-based routing. Routes are located in `src/react-app/routes/`.
- **Styling**: Prefer UnoCSS utility classes. Reference `uno.config.ts` for custom configurations.
- **State**: Use Jotai atoms for global state; keep local state within components using `useState`/`useReducer`.
- **Components**: Functional components with TypeScript.

### Backend (Worker)

- **API Design**: Use Hono's middleware and routing patterns.
- **Bindings**: Access Cloudflare bindings (KV, D1, etc.) via the Hono context (`c.env`). Run `pnpm cf-typegen` after updating `wrangler.json`.

## Testing Strategy

- **Unit/Logic**: Vitest for utility functions and hooks.
  - `src/worker/index.test.ts`: Tests the Hono API routes and logic.
- **Components**: Vitest + React Testing Library for React components.
  - `src/react-app/test/index.test.tsx`: Tests the main search component, including mock API calls.
- **E2E**: (To be added if needed, currently no dedicated E2E framework configured).

### Running Tests

- Use `pnpm test` to run all tests.
- Use `pnpm coverage` to generate coverage reports.

## Deployment

- Deployment is handled via Wrangler to Cloudflare Workers.
- Configuration is stored in `wrangler.json`.
