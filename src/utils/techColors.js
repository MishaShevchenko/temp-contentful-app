const colorMap = {
  react: 'bg-sky-500/15 text-sky-300 border border-sky-500/20',
  'next.js': 'bg-slate-500/20 text-slate-200 border border-slate-500/20',
  typescript: 'bg-blue-500/15 text-blue-300 border border-blue-500/20',
  javascript: 'bg-yellow-500/15 text-yellow-300 border border-yellow-500/20',
  'node.js': 'bg-green-500/15 text-green-300 border border-green-500/20',
  express: 'bg-green-600/15 text-green-300 border border-green-600/20',
  postgresql: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20',
  postgres: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20',
  mongodb: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20',
  firebase: 'bg-orange-500/15 text-orange-300 border border-orange-500/20',
  'tailwind css': 'bg-teal-500/15 text-teal-300 border border-teal-500/20',
  tailwindcss: 'bg-teal-500/15 text-teal-300 border border-teal-500/20',
  tailwind: 'bg-teal-500/15 text-teal-300 border border-teal-500/20',
  redux: 'bg-purple-500/15 text-purple-300 border border-purple-500/20',
  'redux toolkit': 'bg-purple-500/15 text-purple-300 border border-purple-500/20',
  contentful: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/20',
  netlify: 'bg-teal-600/15 text-teal-300 border border-teal-600/20',
  'react router': 'bg-red-500/15 text-red-300 border border-red-500/20',
  'react query': 'bg-rose-500/15 text-rose-300 border border-rose-500/20',
  'rest api': 'bg-lime-500/15 text-lime-300 border border-lime-500/20',
  prisma: 'bg-sky-700/15 text-sky-300 border border-sky-700/20',
  jwt: 'bg-pink-500/15 text-pink-300 border border-pink-500/20',
  jest: 'bg-red-600/15 text-red-300 border border-red-600/20',
  docker: 'bg-blue-600/15 text-blue-300 border border-blue-600/20',
  aws: 'bg-orange-600/15 text-orange-300 border border-orange-600/20',
  nextauth: 'bg-slate-400/15 text-slate-200 border border-slate-400/20',
  zod: 'bg-blue-400/15 text-blue-200 border border-blue-400/20',
  gatsby: 'bg-purple-600/15 text-purple-300 border border-purple-600/20',
  algolia: 'bg-blue-500/15 text-blue-300 border border-blue-500/20',
  playwright: 'bg-emerald-600/15 text-emerald-300 border border-emerald-600/20',
};

export function getTechColor(tech) {
  const key = tech.toLowerCase().trim();
  return colorMap[key] || 'bg-slate-600/20 text-slate-300 border border-slate-600/20';
}

export function parseTechnologies(technologies) {
  if (!technologies) return [];
  if (Array.isArray(technologies)) return technologies.map((t) => t.trim()).filter(Boolean);
  return technologies.split(',').map((t) => t.trim()).filter(Boolean);
}
