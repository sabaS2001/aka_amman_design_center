import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { USALProvider } from "@usal/react";
import style from "./inspirations.module.scss";

const gallery = [
  {
    title: "Premium Oak Heritage",
    tag: "Flagship Material",
    description:
      "Engineered with structural integrity for seamless floor-to-ceiling cladding.",
    className: "col-12 col-sm-6 col-lg-6",
    rowSpan: 2,
    image: "/assets/images/header/header_five.jpg",
  },
  {
    title: "Vibrant Surface Tones",
    tag: "Acrylic Gloss Finish",
    className: "col-6 col-lg-3",
    image: "/assets/images/header/header_two.jpg",
  },
  {
    title: "Matte Finishes",
    tag: "Anti-Fingerprint Tech",
    className: "col-6 col-lg-3",
    image: "/assets/images/header/header_three.jpg",
  },
  {
    title: "Dark Walnut Contrast",
    tag: "",
    description: "Deep tonal layers for high-contrast interior architecture.",
    className: "col-12 col-sm-6 col-lg-6",
    image: "/assets/images/header/header_four.webp",
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
    <USALProvider>
      <div className="d-flex flex-column min-vh-100 bg-body">
        <Navbar active="Inspirations" />
        <main className="flex-grow-1">
          {/* The First Section */}
          <section className="position-relative overflow-hidden border-bottom" id={style.hero}>
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: "url('/assets/images/header/header_one.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(0deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.75) 100%)",
              }}
            />
            <div
              className="container position-relative py-5 text-center"
              style={{ maxWidth: "35rem" }}
            >
              <p
                data-usal="fade-l delay-200"
                className="eyebrow text-primary mb-3"
              >
                Curated Surfaces
              </p>
              <h1
                data-usal="fade-l delay-200"
                className="display-5 fw-medium text-white lh-sm"
              >
                Materiality as a Structural Dialogue
              </h1>
              <p
                data-usal="fade-l delay-400"
                className="mx-auto mt-3 lead"
              >
                Explore our collection of premium architectural surfaces, where
                technical precision meets the organic warmth of master-crafted
                timber and stone textures.
              </p>
            </div>
          </section>
          {/* Second Section */}
          <section className="border-bottom bg-body" id={style.secondSection}>
            <div className="container py-5 mx-auto my-auto">
              <div className="row g-3">
                {gallery.map((item) => (
                  <div key={item.title} className={item.className}>
                    <div
                      data-usal="slide-up forwards"
                      className="position-relative overflow-hidden rounded h-100"
                      style={{
                        minHeight: item.rowSpan
                          ? "clamp(260px, 40vw, 460px)"
                          : "220px",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
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
          {/* Third Section */}
          <section className="border-bottom bg-body mx-auto my-auto" id={style.thirdSection}>
            <div className="container row align-items-center g-5 py-5 mx-auto my-auto">
              <div className="col-lg-6">
                <h2 data-usal="fade-r" className=" text-white">
                  Tactile Selection
                </h2>
                <p
                  data-usal="fade-r delay-200"
                  className="mt-3 text-body-secondary"
                  style={{ maxWidth: "28rem" }}
                >
                  Our showroom process allows for side-by-side comparison of
                  edge details, surface glazes, and substrate thickness. Every
                  board is a testament to AKA Design Center's commitment to
                  precision.
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
                <div className="col-6" data-usal="fade-l">
                  <img
                    src="/assets/images/header/header_one.jpg"
                    alt="Wood sample swatches on display"
                    className="rounded w-100"
                    style={{ aspectRatio: "3 / 4", objectFit: "cover" }}
                  />
                </div>
                <div className="col-6" data-usal="fade-l delay-150">
                  <img
                    src="/assets/images/header/header_two.jpg"
                    alt="Material finish samples on display"
                    className="rounded w-100"
                    style={{ aspectRatio: "3 / 4", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Fourth Section */}
          <section className="bg-body" id={style.fourthSection}>
            <div className="container py-5">
              <div className="card bg-body-secondary border-0 px-4 py-5 text-center">
                <h2 data-usal="fade-r" className=" text-white">
                  Bring Your <span className="text-gold-dark">Vision</span> to
                  Life
                </h2>
                <p
                  data-usal="fade-r"
                  className="mx-auto mt-3 text-body-secondary"
                  style={{ maxWidth: "32rem" }}
                >
                  Schedule a private walkthrough of our material gallery and
                  speak with our surfacing specialists about your next project.
                </p>
                <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
                  <a
                    href="/booking"
                    className="btn btn-primary text-uppercase tracking-widest small fw-semibold"
                  >
                    Schedule a Visit
                  </a>
                  <a
                    href="/showroom"
                    className="btn btn-outline-cream text-uppercase tracking-widest small fw-semibold"
                  >
                    Visit Showroom
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </USALProvider>
  );
}

export default Inspirations;
