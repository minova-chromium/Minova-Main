const projects = [
  {
    id: "chromium",
    name: "Minova Chromium",
    eyebrow: "Windows desktop · Version 1.0.5",
    description:
      "A customizable Chromium browser with classic, workspace, and Safari-style interfaces, vertical tabs, Split View, encrypted passwords, extensions, media tools, and Streaming Mode.",
    tags: ["Chromium", "Windows", "Privacy", "Personalization"],
    site: "https://minova-chromium.github.io/Minova-Chromium/",
    repo: "https://github.com/minova-chromium/Minova-Chromium",
    download:
      "https://github.com/minova-chromium/Minova-Chromium/releases/download/v1.0.5/Minova-Chromium-Setup-1.0.5.exe",
  },
  {
    id: "cinema",
    name: "Minova Cinema",
    eyebrow: "Android TV · Version 2.2.1",
    description:
      "A finished, cinema-first Android TV client that brings a Plex library to the big screen with remote-first navigation, direct play, 4K support, and private local connections.",
    tags: ["Android TV", "Plex", "4K playback", "Living room"],
    site:
      "https://minova-chromium.github.io/Minova-Android-Tv-Cinema-Application/",
    repo:
      "https://github.com/minova-chromium/Minova-Android-Tv-Cinema-Application",
    download:
      "https://github.com/minova-chromium/Minova-Android-Tv-Cinema-Application/releases/download/v2.2.1/Minova-Cinema-2.2.1.apk",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Minova home">
          <img src="/brand/minova-lockup-dark.svg" alt="Minova" />
        </a>
        <nav aria-label="Minova ecosystem navigation">
          <a className="nav-projects" href="#projects">Projects</a>
          <a className="nav-product" href="https://minova-chromium.github.io/Minova-Chromium/">Chromium</a>
          <a className="nav-product" href="https://minova-chromium.github.io/Minova-Android-Tv-Cinema-Application/">Cinema</a>
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
          <div className="hero-downloads" aria-label="Direct application downloads">
            <span>DIRECT DOWNLOADS</span>
            <a data-product-download="chromium" href={projects[0].download}>Chromium for Windows <b aria-hidden="true">↓</b></a>
            <a data-product-download="cinema" href={projects[1].download}>Cinema for Android TV <b aria-hidden="true">↓</b></a>
          </div>
        </div>

        <div className="hero-stage" aria-label="Minova project overview">
          <img className="orbit-pattern" src="/brand/minova-orbit-pattern.svg" alt="" />
          <div className="stage-card">
            <div className="window-bar">
              <span /><span /><span />
              <small>minova://ecosystem</small>
            </div>
            <div className="stage-body">
              <img src="/brand/minova-symbol-color.svg" alt="" />
              <p>ONE IDENTITY / TWO EXPERIENCES</p>
              <strong>Ideas deserve<br />a working version.</strong>
              <div className="stage-line"><span /></div>
            </div>
          </div>
          <div className="floating-card floating-live">
            <span className="status-dot" />
            <div><small>WINDOWS · <span data-product-version="chromium">1.0.5</span></small><strong>Minova Chromium</strong></div>
          </div>
          <div className="floating-card floating-build">
            <span className="mini-icon">TV</span>
            <div><small>ANDROID TV · <span data-product-version="cinema">2.2.1</span></small><strong>Minova Cinema</strong></div>
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
            <h2>One family.<br /><em>Two paths.</em></h2>
          </div>
          <p>
            The same calm graphite foundation and prismatic Minova identity,
            shaped around two very different experiences.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
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
                    <span className="version-chip">v<span data-product-version="chromium">1.0.5</span></span>
                  </>
                ) : (
                  <>
                    <div className="tv-shell">
                      <div className="tv-screen"><img src="/brand/minova-symbol-color.svg" alt="" /><span>MINOVA CINEMA</span></div>
                      <i />
                    </div>
                    <span className="version-chip cinema-version">v<span data-product-version="cinema">2.2.1</span></span>
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
                  <a className="project-download" data-product-download={project.id} href={project.download}>Direct download <span aria-hidden="true">↓</span></a>
                  <a href={project.site}>Visit project <span aria-hidden="true">↗</span></a>
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
        <p><a href="https://minova-chromium.github.io/Minova-Chromium/">Chromium</a> · <a href="https://minova-chromium.github.io/Minova-Android-Tv-Cinema-Application/">Cinema</a></p>
        <span>© {new Date().getFullYear()} Minova</span>
      </footer>
    </main>
  );
}
