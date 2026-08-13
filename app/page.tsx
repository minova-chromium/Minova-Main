const projects = [
  {
    name: "Minova Chromium",
    eyebrow: "Desktop browser · Live",
    description:
      "A customizable Chromium browser with classic and workspace interfaces, vertical tabs, Split View, encrypted passwords, extensions, media tools, and Streaming Mode.",
    tags: ["Chromium", "Desktop", "Privacy", "Personalization"],
    site: "https://minova-chromium.github.io/Minova-Chromium/",
    repo: "https://github.com/minova-chromium/Minova-Chromium",
    featured: true,
  },
  {
    name: "Minova Cinema",
    eyebrow: "Android TV · In development",
    description:
      "A cinema-first application designed for the big screen. The repository is ready, and the experience is currently being shaped.",
    tags: ["Android TV", "Cinema", "Living room"],
    repo: "https://github.com/minova-chromium/Minova-Android-Tv-Cinema-Application",
    featured: false,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Minova home">
          <img src="/brand/minova-lockup-dark.svg" alt="Minova" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a className="nav-github" href="https://github.com/minova-chromium" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> Independent maker · Belgium</p>
          <h1>Shape your<br /><em>own path.</em></h1>
          <p className="hero-intro">
            I build applications for the joy of turning an idea into something
            people can actually use. Minova is the home for every experiment,
            release, and project along the way.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore the projects <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="https://github.com/minova-chromium" target="_blank" rel="noreferrer">
              View GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="Minova project overview">
          <img className="orbit-pattern" src="/brand/minova-orbit-pattern.svg" alt="" />
          <div className="stage-card">
            <div className="window-bar">
              <span /><span /><span />
              <small>minova://projects</small>
            </div>
            <div className="stage-body">
              <img src="/brand/minova-symbol-color.svg" alt="" />
              <p>INDEPENDENT BY DESIGN</p>
              <strong>Ideas deserve<br />a working version.</strong>
              <div className="stage-line"><span /></div>
            </div>
          </div>
          <div className="floating-card floating-live">
            <span className="status-dot" />
            <div><small>LIVE PROJECT</small><strong>Minova Chromium</strong></div>
          </div>
          <div className="floating-card floating-build">
            <span className="mini-icon">TV</span>
            <div><small>NOW BUILDING</small><strong>Minova Cinema</strong></div>
          </div>
        </div>
      </section>

      <div className="signal-strip" aria-label="Minova principles">
        <span>PERSONAL</span><i>◆</i>
        <span>CAPABLE</span><i>◆</i>
        <span>PRIVATE</span><i>◆</i>
        <span>IN MOTION</span>
      </div>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-number">01 / PROJECTS</p>
            <h2>Ideas made<br /><em>tangible.</em></h2>
          </div>
          <p>
            Each project begins with a problem I want to understand—or simply
            an experience I wish existed.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.name}>
              <div className="project-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.eyebrow}</p>
              </div>
              <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
                {index === 0 ? (
                  <>
                    <div className="browser-shell">
                      <div className="browser-rail"><img src="/brand/minova-symbol-color.svg" alt="" /><i /><i /><i /></div>
                      <div className="browser-page">
                        <small>THE WEB, SHAPED AROUND YOU</small>
                        <strong>Browse your way.</strong>
                        <span />
                      </div>
                    </div>
                    <span className="version-chip">v1.0.5</span>
                  </>
                ) : (
                  <>
                    <div className="tv-shell">
                      <div className="tv-screen"><img src="/brand/minova-symbol-color.svg" alt="" /><span>MINOVA CINEMA</span></div>
                      <i />
                    </div>
                    <span className="build-chip">IN DEVELOPMENT</span>
                  </>
                )}
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.name} technologies and themes`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  {project.site && <a href={project.site} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a>}
                  <a href={project.repo} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-intro">
          <p className="section-number">02 / ABOUT</p>
          <h2>Learning by<br /><em>building.</em></h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I’m an enthusiast, not a giant studio—and that is exactly the point.
            I can follow curiosity, test unusual ideas, and keep improving the
            details until a project feels genuinely mine.
          </p>
          <div className="principles">
            <div><span>01</span><strong>Start curious</strong><p>Use each idea as a reason to learn something new.</p></div>
            <div><span>02</span><strong>Make it tangible</strong><p>Move beyond concepts and create something people can open.</p></div>
            <div><span>03</span><strong>Keep shaping</strong><p>Release, listen, refine, and let the project grow over time.</p></div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <img src="/brand/minova-symbol-color.svg" alt="" />
        <p>THE NEXT IDEA IS ALREADY TAKING SHAPE</p>
        <h2>Follow the build.</h2>
        <a className="button button-light" href="https://github.com/minova-chromium" target="_blank" rel="noreferrer">
          Find Minova on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/brand/minova-lockup-dark.svg" alt="Minova" /></a>
        <p>Independent software projects, built with curiosity.</p>
        <span>© {new Date().getFullYear()} Minova</span>
      </footer>
    </main>
  );
}
