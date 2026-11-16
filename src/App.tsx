const assetPathPrefix = "/assets";

const crissyFieldPhotograph = `${assetPathPrefix}/82aa7.png`;
const stephenWheelerLogo = `${assetPathPrefix}/2b918.png`;

export default function App() {
  return (
    <main className="site-shell">
      <img
        className="background-photo"
        src={crissyFieldPhotograph}
        alt="Crissy Field and the San Francisco skyline viewed through mature cypress trees"
      />
      <div className="lower-gradient" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner">
          <img
            className="brand-logo"
            src={stephenWheelerLogo}
            alt="Stephen Wheeler Landscape Architects"
          />

          <div className="contact-links" aria-label="Contact Stephen Wheeler Landscape Architects">
            <a href="mailto:sjw@swlarch.com">sjw@swlarch.com</a>
            <picture className="contact-divider" aria-hidden="true">
              <source media="(max-width: 767px)" srcSet={`${assetPathPrefix}/6310a.svg`} />
              <img src={`${assetPathPrefix}/d2b90.svg`} alt="" />
            </picture>
            <a href="tel:+14152527075">415-252-7075</a>
          </div>
        </div>
      </header>

      <section className="project-details" aria-label="About the practice and featured project">
        <p className="practice-description">
          Stephen Wheeler Landscape Architects creates distinctive outdoor spaces: educational and
          corporate facilities, parks and open spaces, commercial and residential developments, and
          private residences.
        </p>
        <p className="project-name">Crissy Field Overlook</p>
      </section>

      <footer className="site-footer">
        <span>©2026 Stephen Wheeler Landscape Architects</span>
        <img src={`${assetPathPrefix}/dcacb.svg`} alt="" aria-hidden="true" />
        <span>California License #2678</span>
      </footer>
    </main>
  );
}
