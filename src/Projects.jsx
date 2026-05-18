import { useFetchProjects } from './fetchProjects';
import { Link } from 'react-router-dom';
import { getTechColor, parseTechnologies } from './utils/techColors';

const SkeletonCard = () => (
  <div className="rounded-2xl bg-dark-card border border-dark-border overflow-hidden animate-pulse">
    <div className="aspect-video bg-dark-hover" />
    <div className="p-5 space-y-3">
      <div className="h-4 bg-dark-hover rounded w-3/4" />
      <div className="h-3 bg-dark-hover rounded w-full" />
      <div className="h-3 bg-dark-hover rounded w-5/6" />
      <div className="flex gap-2 mt-4">
        <div className="h-5 bg-dark-hover rounded-full w-16" />
        <div className="h-5 bg-dark-hover rounded-full w-20" />
        <div className="h-5 bg-dark-hover rounded-full w-14" />
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const { id, img, title, description, technologies, badge } = project;
  const techList = parseTechnologies(technologies);
  const visibleTechs = techList.slice(0, 4);
  const remaining = techList.length - visibleTechs.length;

  const descText =
    typeof description === 'string'
      ? description
      : 'View project details →';

  return (
    <Link
      to={`/project/${id}`}
      className="group relative flex flex-col rounded-2xl bg-dark-card border border-dark-border overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1"
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
          {badge}
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-dark-hover">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
          <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white font-medium text-sm flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
            View Details
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary-light transition-colors line-clamp-1">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {descText}
        </p>

        {/* Tech tags */}
        {visibleTechs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {visibleTechs.map((tech) => (
              <span key={tech} className={`tech-tag ${getTechColor(tech)}`}>
                {tech}
              </span>
            ))}
            {remaining > 0 && (
              <span className="tech-tag bg-slate-700/30 text-slate-400 border border-slate-700/30">
                +{remaining}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Work</span>
          </div>
          <h2 className="text-3xl font-bold text-white">
            Web Creations
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            {loading ? 'Loading projects…' : `${projects.length} project${projects.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
