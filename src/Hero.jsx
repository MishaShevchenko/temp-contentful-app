const Hero = () => {
  return (
    <section className="relative min-h-[44vh] flex items-center overflow-hidden pt-14">
      {/* Background mesh gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(100,92,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(167,139,250,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 py-14 sm:py-20">
        <div className="max-w-2xl animate-slide-up">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Project Showcase
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Things I&apos;ve{' '}
            <span className="gradient-text">Built</span>
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
            Some of my creations. Content is managed via{' '}
            <span className="text-slate-300 font-medium">Contentful</span>{' '}
            and rendered dynamically so the showcase stays up to date without touching code.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://portfolio-react-mykhailo.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white font-medium text-sm transition-colors"
            >
              About Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://github.com/MishaShevchenko"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-card border border-dark-border hover:border-primary/40 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
