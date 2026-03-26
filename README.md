# Deal in Dev

Deal in Dev is a marketing website for a digital product and AI services brand.  
It highlights services, process, work/case studies, and contact/booking pages in a modern, animated UI.

## Technology Stack

- Framework: `Next.js` (App Router)
- Language: `TypeScript`
- UI: `React`
- Styling: `Tailwind CSS v4` + global CSS
- Animation: `Framer Motion`
- Linting: `ESLint` with `eslint-config-next`

## Project Structure

- `app/` - App Router pages and route segments
- `components/` - reusable UI, layout, and section components
- `data/` - centralized static content and brand metadata
- `public/` - static assets

## Prerequisites

- Node.js `18.18+` (Node `20+` recommended)
- npm (project currently uses `package-lock.json`)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server (after build)
- `npm run lint` - run ESLint checks

## Build and Run Production Locally

```bash
npm run build
npm run start
```
