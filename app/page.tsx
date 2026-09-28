const projects = [
  {
    id: "chromium",
    name: "Minova Chromium",
    platform: "Windows desktop",
    versions: [{ id: "chromium", label: "Version", value: "1.0.5" }],
    description:
      "A customizable Chromium browser with classic, workspace, and Safari-style interfaces, vertical tabs, Split View, encrypted passwords, extensions, media tools, and Streaming Mode.",
    tags: ["Chromium", "Windows", "Privacy", "Personalization"],
    site: "https://minova-chromium.github.io/Minova-Chromium/",
    websiteLabel: "Visit Chromium website",
    downloads: [
      {
        id: "chromium",
        label: "Chromium for Windows",
        url: "https://github.com/minova-chromium/Minova-Chromium/releases/download/v1.0.5/Minova-Chromium-Setup-1.0.5.exe",
      },
    ],
    sources: [
      { label: "Source code", url: "https://github.com/minova-chromium/Minova-Chromium" },
    ],
  },
  {
    id: "cinema",
    name: "Minova Cinema",
    platform: "Android + Windows",
    versions: [
      { id: "cinema-android", label: "Android", value: "2.9.7" },
      { id: "cinema-windows", label: "Windows", value: "1.0.3" },
    ],
    description:
      "A private, cinema-first Plex client shaped for every screen: touch-first Android phones and tablets, remote-first Android TV, and a native Windows desktop experience.",
    tags: ["Windows", "Android", "Phone & tablet", "Android TV", "Plex"],
    site:
      "https://minova-chromium.github.io/Minova-Android-Tv-Cinema-Application/",
    websiteLabel: "Visit Cinema website",
    downloads: [
      {
        id: "cinema-android",
        label: "Cinema for Android",
        url: "https://github.com/minova-chromium/Minova-Android-Tv-Cinema-Application/releases/download/v2.9.7/Minova-Cinema-2.9.7.apk",
      },
      {
        id: "cinema-windows",
        label: "Cinema for Windows",
        url: "https://github.com/minova-chromium/Minova-Cinema-Windows/releases/download/v1.0.3/Minova-Cinema-Desktop-1.0.3-Setup.exe",
      },
    ],
    sources: [
      {
        label: "Android source",
        url: "https://github.com/minova-chromium/Minova-Android-Tv-Cinema-Application",
      },
      {
        label: "Windows source",
        url: "https://github.com/minova-chromium/Minova-Cinema-Windows",
      },
    ],
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
          <a className="nav-product" href="/brand.html">Brand</a>
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
            {projects.map((project) => (
              <div className="hero-download-item" key={project.id}>
                <a className="hero-project-link" href={project.site}>{project.websiteLabel} <b aria-hidden="true">↗</b></a>
                {project.downloads.map((download) => (
                  <a data-product-download={download.id} href={download.url} key={download.id}>
                    {download.label} <b aria-hidden="true">↓</b>
                  </a>
                ))}
              </div>
            ))}
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
            <span className="mini-icon">A / ⊞</span>
            <div><small>ANDROID <span data-product-version="cinema-android">2.9.7</span> · WINDOWS <span data-product-version="cinema-windows">1.0.3</span></small><strong>Minova Cinema</strong></div>
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
                <p>
                  {project.platform} · {project.versions.map((release, releaseIndex) => (
                    <span key={release.id}>
                      {releaseIndex > 0 ? " / " : ""}{release.label} <span data-product-version={release.id}>{release.value}</span>
                    </span>
                  ))}
                </p>
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
                    <span className="version-chip cinema-version">A <span data-product-version="cinema-android">2.9.7</span> · W <span data-product-version="cinema-windows">1.0.3</span></span>
                  </>
                )}
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.name} technologies and themes`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a className="project-website-button" href={project.site}>
                  Visit {project.name} website <span aria-hidden="true">↗</span>
                </a>
                <div className="project-links">
                  {project.downloads.map((download) => (
                    <a className="project-download" data-product-download={download.id} href={download.url} key={download.id}>{download.label} <span aria-hidden="true">↓</span></a>
                  ))}
                  {project.sources.map((source) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} <span aria-hidden="true">↗</span></a>
                  ))}
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
        <p><a href="/brand.html">Brand</a> · <a href="https://minova-chromium.github.io/Minova-Chromium/">Chromium</a> · <a href="https://minova-chromium.github.io/Minova-Android-Tv-Cinema-Application/">Cinema</a></p>
        <span>© {new Date().getFullYear()} Minova</span>
      </footer>
    </main>
  );
}
