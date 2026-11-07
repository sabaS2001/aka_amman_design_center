import { Link, Navigate, useParams } from "react-router-dom";
import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { combinations } from "./inspirations";
import style from "./inspirations.module.scss";

function CombinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = combinations.findIndex((c) => c.slug === slug);

  if (index === -1) {
    return <Navigate to="/inspirations" replace />;
  }

  const combination = combinations[index];
  const others = combinations.filter((_, i) => i !== index);

  return (
    <USALProvider>
      <div className="d-flex flex-column min-vh-100 bg-body">
        <Navbar active="Inspirations" />
        <main className="flex-grow-1">
          {/* Hero */}
          <section
            className="position-relative overflow-hidden border-bottom"
            style={{ minHeight: "22rem" }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: `url('${combination.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(90deg, rgba(11,10,8,0.92) 0%, rgba(11,10,8,0.6) 55%, rgba(11,10,8,0.8) 100%)",
              }}
            />
            <div className="container position-relative d-flex flex-column justify-content-center h-100 py-5">
              <Link
                to="/inspirations"
                className="d-inline-flex align-items-center gap-2 mb-3 small fw-semibold tracking-widest text-primary text-uppercase text-decoration-none"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="1rem" height="1rem">
                  <path d="M19 12H5M11 18l-6-6 6-6" />
                </svg>
                All Combinations
              </Link>
              <p className="eyebrow text-primary mb-2">{combination.tag}</p>
              <h1
                data-usal="fade-r"
                className="display-5 fw-medium text-white lh-sm"
                style={{ maxWidth: "40rem" }}
              >
                {combination.title}
              </h1>
            </div>
          </section>

          {/* Details */}
          <section className="border-bottom bg-body">
            <div className="container py-5">
              <div className="row g-5 align-items-start">
                <div className="col-lg-6" data-usal="fade-r">
                  <div className={style.featuredImageWrap}>
                    <img
                      src={combination.image}
                      alt={combination.title}
                      className={style.featuredImage}
                    />
                  </div>
                </div>

                <div className="col-lg-6" data-usal="fade-l">
                  <h2 className="fs-1 fw-medium text-white">
                    {combination.title}
                  </h2>
                  <p className="mt-3 text-body-secondary">
                    {combination.description}
                  </p>

                  <p className="mt-4 mb-3 small fw-semibold tracking-widest text-white text-uppercase">
                    Used Materials
                  </p>
                  <div className="d-flex flex-column gap-3">
                    {combination.materials.map((material) => (
                      <Link
                        key={material.name}
                        to="/booking"
                        className={`d-flex align-items-center gap-3 text-decoration-none ${style.materialRow}`}
                      >
                        <span
                          className={style.swatch}
                          style={{ background: material.swatch }}
                        />
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-semibold text-white">
                            {material.name}
                          </p>
                          <p className="mb-0 small text-body-secondary">
                            {material.tags}
                          </p>
                        </div>
                        <span className={style.materialRowArrow}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="0.9rem" height="0.9rem">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/booking"
                    className="btn btn-primary text-uppercase small fw-semibold mt-4"
                  >
                    Ask About This Combination
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Other combinations */}
          <section className="bg-body border-bottom">
            <div className="container py-5">
              <h2 className="fs-5 fw-medium text-white mb-4">
                Other Combinations
              </h2>
              <div className="row g-3">
                {others.map((other, i) => (
                  <div key={other.title} className="col-6 col-lg-4">
                    <Link
                      to={`/inspirations/${other.slug}`}
                      data-usal="slide-up"
                      data-usal-delay={i * 100}
                      className={`${style.archiveItem} w-100`}
                    >
                      <img
                        src={other.image}
                        alt={other.title}
                        loading="lazy"
                      />
                      <div className={style.archiveLabel}>
                        <h3 className="fs-6 fw-medium text-white mb-0">
                          {other.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-body" id={style.fourthSection}>
            <div className="container py-5">
              <div className="card bg-body-secondary border-0 px-4 py-5 text-center">
                <h2 data-usal="fade-r" className="text-white">
                  Bring Your <span className="text-gold-dark">Vision</span> to
                  Life
                </h2>
                <p
                  data-usal="fade-r"
                  className="mx-auto mt-3 text-body-secondary"
                  style={{ maxWidth: "32rem" }}
                >
                  Schedule a private walkthrough of our material gallery and
                  speak with our surfacing specialists about your next
                  project.
                </p>
                <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
                  <a
                    href="/booking"
                    className="btn btn-primary text-uppercase small fw-semibold"
                  >
                    Schedule a Visit
                  </a>
                  <a
                    href="https://maps.app.goo.gl/XUDFgy6WXNviQsQQA"
                    className="btn btn-outline-cream text-uppercase small fw-semibold"
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

export default CombinationDetail;
