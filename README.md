# Couravent Portfolio

A personal portfolio website — built with React, TypeScript, Vite and Tailwind CSS. No backend, no server rendering: a static single-page app you can deploy anywhere that serves static files (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Stack

- [React 19](https://react.dev) + [React Router](https://reactrouter.com) for client-side routing
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for the dev server and build
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)-style components

## Development

You need Node.js installed — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Build

```sh
npm run build
```

Outputs a static site to `dist/`. Preview the production build locally with:

```sh
npm run preview
```

## Project structure

```
src/
  App.tsx               # route definitions
  main.tsx               # entry point
  pages/                 # one file per route (Home, About, Services, Projects, Contact)
  components/site/       # header, footer, layout, shared page pieces
  components/ui/         # shadcn/ui primitives
  data/site.ts            # services + project content shown on the site
```

## Editing content

Update the projects, services and stack shown on the site in `src/data/site.ts`.
