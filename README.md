# Portfolio Website

A personal portfolio website — one scrolling page (hero, about, services, projects, contact) built with React, TypeScript, Vite and Tailwind CSS. No backend, no server rendering, no routing: a static site you can deploy anywhere that serves static files (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Stack

- [React 19](https://react.dev)
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
  App.tsx               # composes the page out of the sections below
  main.tsx               # entry point
  sections/               # one file per section (Hero, About, Services, Projects, Contact)
  components/site/       # header, footer, project card
  components/ui/         # shadcn/ui primitives
  data/site.ts            # services + project content shown on the site
```

## Editing content

Update the projects, services and stack shown on the site in `src/data/site.ts`.
