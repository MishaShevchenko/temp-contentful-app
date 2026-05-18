/**
 * Projects pinned as static entries alongside the Contentful CMS data.
 * Migrate each one to a proper Contentful entry once ready and remove it here.
 */
export const staticProjects = [
  {
    id: 'static-portfolio',
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with React 18, Vite, and Tailwind CSS. Features a typewriter hero, animated sections with Framer Motion, a full experience timeline, tech stack showcase, and project cards. Deployed on Netlify.',
    technologies: 'React, Vite, Tailwind CSS, Framer Motion, Netlify',
    githubUrl: 'https://github.com/MishaShevchenko/Portfolio',
    url: 'https://portfolio-react-mykhailo.netlify.app/',
    img: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=420&fit=crop&q=80',
    isStatic: true,
  },
  {
    id: 'static-nextjs-store-draft',
    title: 'Next.js Store',
    description:
      'Full-stack e-commerce store built with Next.js 14 App Router and TypeScript. Features a product catalogue, shopping cart, dark/light mode, and a Prisma + PostgreSQL data layer. Auth handled via middleware. UI components from shadcn/ui on top of Tailwind CSS.',
    technologies: 'Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, shadcn/ui',
    githubUrl: 'https://github.com/MishaShevchenko/nextjs-store-draft',
    url: 'https://nextjs-store-draft-ten.vercel.app',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=420&fit=crop&q=80',
    isStatic: true,
    badge: 'In Progress',
  },
];
