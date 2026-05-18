import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetchProjects } from './fetchProjects';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getTechColor, parseTechnologies } from './utils/techColors';

const richTextOptions = {
  renderNode: {
    'paragraph': (node, children) => (
      <p className="text-slate-300 leading-relaxed mb-4">{children}</p>
    ),
    'heading-2': (node, children) => (
      <h2 className="text-white font-bold text-xl mb-3 mt-6">{children}</h2>
    ),
    'heading-3': (node, children) => (
      <h3 className="text-white font-semibold text-lg mb-2 mt-5">{children}</h3>
    ),
    'unordered-list': (node, children) => (
      <ul className="list-disc list-inside space-y-1.5 mb-4 text-slate-300">{children}</ul>
    ),
    'ordered-list': (node, children) => (
      <ol className="list-decimal list-inside space-y-1.5 mb-4 text-slate-300">{children}</ol>
    ),
    'list-item': (node, children) => <li>{children}</li>,
    'hyperlink': (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className="text-primary-light hover:underline"
      >
        {children}
      </a>
    ),
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <div className="min-h-screen pt-14 flex items-center justify-center">
        <div className="space-y-6 w-full max-w-4xl px-6 animate-pulse">
          <div className="h-6 bg-dark-card rounded w-32" />
          <div className="aspect-video bg-dark-card rounded-2xl w-full" />
          <div className="h-8 bg-dark-card rounded w-2/3" />
          <div className="space-y-2">
            <div className="h-4 bg-dark-card rounded w-full" />
            <div className="h-4 bg-dark-card rounded w-5/6" />
            <div className="h-4 bg-dark-card rounded w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-14 flex flex-col items-center justify-center gap-4 text-center px-6">
        <div className="text-6xl mb-2">🔍</div>
        <h1 className="text-2xl font-bold text-white">Project not found</h1>
        <p className="text-slate-400">This project may have been removed or the URL is incorrect.</p>
        <Link
          to="/"
          className="mt-2 px-4 py-2 rounded-xl bg-primary/20 border border-primary/30 text-primary-light hover:bg-primary/30 transition-colors text-sm font-medium"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const { title, description, technologies, img, url, githubUrl, badge, isStatic } = project;
  const techList = parseTechnologies(technologies);
  const isInProgress = badge === 'In Progress';
  const hasLiveUrl = !isInProgress && url && url !== '#';
  const hasGithub = githubUrl && githubUrl !== '#';

  return (
    <main className="min-h-screen pt-14 pb-20 animate-fade-in">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border mb-10 aspect-video">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay with title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight">{title}</h1>
              {badge && (
                <span className="shrink-0 px-3 py-1 rounded-full bg-primary/30 border border-primary/40 text-primary-light text-sm font-medium">
                  {badge}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-primary inline-block"></span>
              About this project
            </h2>

            <div className="text-slate-300 leading-relaxed prose-sm">
              {typeof description === 'object'
                ? documentToReactComponents(description, richTextOptions)
                : <p className="leading-relaxed">{description}</p>}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech stack */}
            {techList.length > 0 && (
              <div className="bg-dark-card border border-dark-border rounded-2xl p-5">
                <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techList.map((tech) => (
                    <span key={tech} className={`tech-tag ${getTechColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-5 space-y-3">
              <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-4">
                Links
              </h3>

              {hasLiveUrl && (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white font-medium text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}

              {hasGithub && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl bg-dark-hover border border-dark-border hover:border-primary/40 text-slate-300 hover:text-white font-medium text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              )}

              {isInProgress && (
                <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                  <p className="text-amber-300 text-sm leading-relaxed">
                    Live demo not available yet — this project is actively being built.
                  </p>
                </div>
              )}

              {!hasLiveUrl && !hasGithub && !isInProgress && (
                <p className="text-slate-500 text-sm">Links coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
