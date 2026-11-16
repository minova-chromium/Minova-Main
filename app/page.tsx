const destinations = [
  { id: "chromium", name: "Minova Chromium", category: "BROWSE", tagline: "The web, shaped around you.", description: "Explore the Minova browser, its features, and existing Windows releases.", domain: "chromium.project-minova.com", detail: "Development paused", icon: "browser" },
  { id: "cinema", name: "Minova Cinema", category: "WATCH", tagline: "Your collection. Every screen.", description: "Discover the Plex client for Android phones, tablets, TV, and Windows.", domain: "cinema.project-minova.com", detail: "Android + Windows", icon: "cinema" },
  { id: "maugainz", name: "MauGainZ", category: "FUEL", tagline: "Make room for your goals.", description: "Find recipes, build meals, and explore tools for your nutrition and training.", domain: "maugainz.project-minova.com", detail: "Food + fitness", icon: "fuel" },
  { id: "cloud", name: "Minova Cloud", category: "KEEP", tagline: "Your files. Your way.", description: "Open your private file space, upload what matters, and share with invited people.", domain: "cloud.project-minova.com", detail: "Invitation only", icon: "cloud" },
];
function ProductIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "browser" ? <><rect x="5" y="8" width="38" height="32" rx="4"/><path d="M5 17h38M11 12.5h.1m5 0h.1M14 17v23M21 25h14m-14 6h8"/></> :
      kind === "cinema" ? <><rect x="4" y="8" width="40" height="28" rx="4"/><path d="m21 16 10 6-10 6ZM18 42h12m-6-6v6"/></> :
      kind === "fuel" ? <><path d="M12 7v12m-5-12v8a5 5 0 0 0 10 0V7M12 20v21M32 7c-5 4-7 11-7 18h9m0-18v34"/></> :
      <><path d="M14 35a10 10 0 1 1-1-20 13 13 0 0 1 25 5 8 8 0 0 1-1 15M24 22v19m-6-6 6 6 6-6"/></>}
  </svg>;
}
export default function Home() {
  return <>
    <a className="skip-link" href="#destinations">Skip to websites</a>
    <header className="site-header">
      <a href="/" className="brand" aria-label="Minova home"><img src="/brand/minova-lockup-dark.svg" alt="Minova" width="181" height="51"/></a>
      <nav aria-label="Main navigation"><a href="#destinations">Explore</a><a href="/brand.html">Brand</a><a className="cloud-link" href="https://cloud.project-minova.com/">Open Cloud <span aria-hidden="true">↗</span></a></nav>
    </header>
    <main id="top">
      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-copy"><p className="eyebrow"><span/> THE MINOVA COLLECTION</p><h1 id="intro-title">One home.<br/><em>Your next move.</em></h1><p className="intro-text">Browse, watch, fuel your goals, or keep your files close.<br className="desktop-break"/> Choose a Minova experience and make it yours.</p></div>
        <div className="brand-art" aria-hidden="true"><img className="orbit" src="/brand/minova-orbit-pattern.svg" alt=""/><img className="prism" src="/brand/minova-symbol-color.svg" alt=""/><span className="art-caption">ONE SYSTEM. DIFFERENT EXPERIENCES.</span></div>
      </section>
      <section className="destinations" id="destinations" aria-labelledby="destinations-title">
        <div className="section-heading"><h2 id="destinations-title">Where do you want to go?</h2><p>Four experiences. All Minova.</p></div>
        <div className="destination-grid">{destinations.map((item,index)=><a className={`destination destination-${item.id}`} key={item.id} href={`https://${item.domain}/`} aria-label={`Open ${item.name}`}>
          <div className="card-top"><span className="category">{item.category}</span><span className="number">0{index+1} /</span></div>
          <div className={`product-art art-${item.id}`}><ProductIcon kind={item.icon}/><div className="art-lines" aria-hidden="true"><i/><i/><i/></div></div>
          <div className="card-content"><span className="detail">{item.detail}</span><h3>{item.name}</h3><p className="tagline">{item.tagline}</p><p className="description">{item.description}</p></div>
          <div className="card-link"><span>{item.domain}</span><span className="arrow" aria-hidden="true">↗</span></div>
        </a>)}</div>
      </section>
      <aside className="cloud-note"><div><span className="note-icon" aria-hidden="true">↳</span><p><strong>Already part of Minova Cloud?</strong><span>Sign in with your Minova account. New members join through an invitation.</span></p></div><a href="https://cloud.project-minova.com/">Go to your files <span aria-hidden="true">→</span></a></aside>
    </main>
    <footer><span>© {new Date().getFullYear()} Minova</span><p>Shape your own path.</p><div><a href="/brand.html">Brand guide</a><a href="https://github.com/minova-chromium" target="_blank" rel="noreferrer">Source & releases <span aria-hidden="true">↗</span></a></div></footer>
  </>;
}
