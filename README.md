# Contentful CMS — Project Showcase

Live: [contentful-cms-mike.netlify.app](https://contentful-cms-mike.netlify.app) · Portfolio: [portfolio-react-mykhailo.netlify.app](https://portfolio-react-mykhailo.netlify.app)

A personal project showcase powered by [Contentful](https://www.contentful.com/) as a headless CMS. Projects are managed through the Contentful editorial interface and dynamically rendered with a dark, modern React frontend.

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v7, Vite 5 |
| Styling | Tailwind CSS 3 |
| CMS | Contentful (Delivery API) |
| Rich Text | `@contentful/rich-text-react-renderer` |
| Hosting | Netlify |
| Node | v20 LTS (see `.nvmrc`) |

## Features

- **Headless CMS** — all project content (title, description, image, tech stack, URLs) is managed in Contentful and fetched at runtime via the Delivery API
- **Tech stack tags** — each project card displays colour-coded technology badges; no need to scan paragraphs to see what was used
- **Rich text descriptions** — project detail pages render full Contentful rich text with custom dark-theme styles
- **Static pinned projects** — two additional projects (`staticProjects.js`) demonstrate Next.js + TypeScript and Node.js + PostgreSQL skills and are shown alongside CMS entries
- **Dark theme** — cohesive dark design with Tailwind utility classes; matches the portfolio site visual language
- **Skeleton loading** — project cards show animated skeletons while the CMS data loads
- **Responsive** — single column → 2 col → 3 col grid; project detail uses a sidebar layout on desktop

## Getting Started

### Prerequisites

- Node 20 (`nvm use` if you have nvm)
- A Contentful account with a space containing a `projects` content type (see below)

### Install

```bash
npm install
```

### Environment

Create a `.env` file in the project root (this file is gitignored):

```
VITE_API_KEY=your_contentful_delivery_api_token
```

You can find/create your token in **Contentful → Settings → API Keys → Content Delivery API - access token**.

The Space ID (`zoetf6i8ls87`) is already set in `src/fetchProjects.jsx`.

### Run

```bash
npm run dev      # development server at http://localhost:5174
npm run build    # production build
npm run preview  # preview production build locally
```

## Contentful Content Type: `projects`

Each entry should have the following fields:

| Field ID | Type | Notes |
|----------|------|-------|
| `title` | Short text | Project name |
| `description` | Rich text | Detailed description (paragraphs, lists, links supported) |
| `image` | Media | Project screenshot |
| `url` | Short text | Live demo URL |
| `githubUrl` | Short text | GitHub repository URL |
| `technologies` | Short text | Comma-separated, e.g. `React, TypeScript, Node.js` |

## Adding More Projects

### Via Contentful (recommended)

1. Log in to Contentful and navigate to your space
2. Go to **Content → Add Entry → projects**
3. Fill in all fields, publish the entry
4. The live site updates automatically on the next page load

### Static projects

Two projects are hardcoded in `src/staticProjects.js` to demonstrate Next.js + TypeScript and Node.js + PostgreSQL skills while those apps are in progress. Update the `githubUrl`, `url`, and `img` fields once the projects are deployed, then optionally migrate them to Contentful and remove the static entries.

## Deploy to Netlify

1. Connect the repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `VITE_API_KEY` as an environment variable in **Site settings → Environment variables**

## Project Structure

```
src/
├── App.jsx               # Router setup
├── Navbar.jsx            # Fixed top navbar
├── Hero.jsx              # Landing hero with bio
├── Projects.jsx          # Project grid with skeleton loading
├── ProjectDetail.jsx     # Individual project page
├── fetchProjects.jsx     # Contentful client + useFetchProjects hook
├── staticProjects.js     # Pinned projects (Next.js / PostgreSQL)
├── index.css             # Tailwind directives + custom base styles
└── utils/
    └── techColors.js     # Tech name → Tailwind colour class map
```
