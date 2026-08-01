import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const gallery = [
  {
    title: "Premium Oak Heritage",
    tag: "Flagship Material",
    description:
      "Engineered with structural integrity for seamless floor-to-ceiling cladding.",
    className: "col-6 col-lg-6",
    rowSpan: 2,
    gradient:
      "linear-gradient(160deg,#8a6641 0%,#6b4c2e 45%,#4a331f 75%,#2b1c11 100%)",
  },
  {
    title: "Marble Textures",
    tag: "Calacatta Gold Finish",
    className: "col-6 col-lg-3",
    gradient:
      "linear-gradient(160deg,#e9e6df 0%,#c9c3b6 45%,#a39c8c 75%,#726b5c 100%)",
  },
  {
    title: "Matte Finishes",
    tag: "Anti-Fingerprint Tech",
    className: "col-6 col-lg-3",
    gradient: "linear-gradient(160deg,#2c2c2e 0%,#1a1a1c 60%,#0d0d0e 100%)",
  },
  {
    title: "Dark Walnut Contrast",
    tag: "",
    description: "Deep tonal layers for high-contrast interior architecture.",
    className: "col-6 col-lg-6",
    gradient: "linear-gradient(120deg,#3f2e21 0%,#241a12 50%,#0f0b08 100%)",
  },
];

const bullets = [
  {
    title: "Architectural Grade",
    description: "Tested for thermal stability and load-bearing applications.",
  },
  {
    title: "Sustainable Core",
    description:
      "Sourced from certified FSC forests with low-emission bonding.",
  },
];

function Inspirations() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="Inspirations" />
      <main className="flex-grow-1">
      <section className="border-bottom bg-body">
        <div
          className="container py-5 text-center"
          style={{ maxWidth: "48rem" }}
        >
          <p className="eyebrow text-primary mb-3">Curated Surfaces</p>
          <h1 className="display-5 fw-medium text-white lh-sm">
            Materiality as a Structural Dialogue
          </h1>
          <p
            className="mx-auto mt-3 text-body-secondary"
            style={{ maxWidth: "36rem" }}
          >
            Explore our collection of premium architectural surfaces, where
            technical precision meets the organic warmth of master-crafted
            timber and stone textures.
          </p>
        </div>
      </section>

      <section className="border-bottom bg-body">
        <div className="container py-5 mx-auto my-auto">
          <div className="row g-3">
            {gallery.map((item) => (
              <div key={item.title} className={item.className}>
                <div
                  className="position-relative overflow-hidden rounded h-100"
                  style={{
                    background: item.gradient,
                    minHeight: item.rowSpan ? "460px" : "220px",
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(11,10,8,0.85) 0%, rgba(11,10,8,0.1) 60%, transparent 100%)",
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3">
                    {item.tag && (
                      <span className="d-inline-block mb-2 bg-body-tertiary bg-opacity-90 rounded-1 px-2 py-1 small fw-semibold tracking-widest text-white text-uppercase">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="fs-5 fw-medium text-white mb-0">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p
                        className="mt-1 mb-0 text-white-50"
                        style={{ maxWidth: "20rem" }}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-bottom bg-body mx-auto my-auto">
        <div className="container row align-items-center g-5 py-5 mx-auto my-auto">
          <div className="col-lg-6">
            <h2 className="fs-2 fw-medium text-white">Tactile Selection</h2>
            <p
              className="mt-3 text-body-secondary"
              style={{ maxWidth: "28rem" }}
            >
              Our showroom process allows for side-by-side comparison of edge
              details, surface glazes, and substrate thickness. Every board is a
              testament to AKA Design Center's commitment to precision.
            </p>

            <ul className="list-unstyled mt-4">
              {bullets.map((bullet) => (
                <li key={bullet.title} className="d-flex gap-3 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-shrink-0 mt-1"
                    width="1.25rem"
                    height="1.25rem"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8.5 12 2.3 2.3L15.5 9.5" />
                  </svg>
                  <div>
                    <p className="mb-1 small fw-semibold tracking-widest text-white text-uppercase">
                      {bullet.title}
                    </p>
                    <p className="mb-0 text-body-secondary">
                      {bullet.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6 row g-3">
            <div className="col-6">
              <div
                className="rounded"
                style={{
                  aspectRatio: "3 / 4",
                  background:
                    "linear-gradient(160deg,#8a7457 0%,#6b573d 45%,#3f3323 100%)",
                }}
              />
            </div>
            <div className="col-6">
              <div
                className="rounded"
                style={{
                  aspectRatio: "3 / 4",
                  background:
                    "repeating-linear-gradient(90deg,#3f2e21 0px,#2b1e14 12px,#4a3826 24px,#241a12 36px)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-body">
        <div className="container py-5">
          <div className="card bg-body-secondary border-0 px-4 py-5 text-center">
            <h2 className="fs-2 fw-medium text-white">
              Bring Your <span className="text-gold-dark">Vision</span> to Life
            </h2>
            <p
              className="mx-auto mt-3 text-body-secondary"
              style={{ maxWidth: "32rem" }}
            >
              Schedule a private walkthrough of our material gallery and speak
              with our surfacing specialists about your next project.
            </p>
            <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
              <a
                href="/booking"
                className="btn btn-primary text-uppercase tracking-widest small fw-semibold"
              >
                Schedule a Visit
              </a>
              <a
                href="#gallery"
                className="btn btn-outline-cream text-uppercase tracking-widest small fw-semibold"
              >
                View Sample Kit
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default Inspirations;
