import { useEffect, useState } from "react";
import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import style from "./home.module.scss";

const gallery = [
  { src: "/assets/images/gallery/showroom-rocko-wall.jpg", alt: "ROCKO flooring display wall by Kronospan at the AKA Design Center showroom" },
  { src: "/assets/images/gallery/showroom-entrance-signage.jpg", alt: "AKA Design Center entrance signage and digital directory" },
  { src: "/assets/images/gallery/showroom-meeting-room.jpg", alt: "AKA Design Center meeting and consultation room" },
  { src: "/assets/images/gallery/showroom-hpl-cladding-view.jpg", alt: "HPL cladding display wall overlooking the Amman skyline" },
  { src: "/assets/images/gallery/showroom-kitchen-display.jpg", alt: "Kitchen cabinetry and worktop display at the AKA Design Center showroom" },
  { src: "/assets/images/gallery/showroom-kronospan-tv-wall.jpg", alt: "Kronospan material display wall with consultation screen at the AKA Design Center showroom" },
  { src: "/assets/images/gallery/showroom-forest-panel.jpg", alt: "Kronospan Wood Perfected backlit display panel at the AKA Design Center showroom" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1EqnmaMan2/?mibextid=wwXIfr",
    icon: (
      <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.3.2-.5.5-.5Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aka_design_center",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <USALProvider>
      <div className="d-flex flex-column min-vh-100 bg-body">
        <Navbar />
        <main className="flex-grow-1">
          {/* Hero */}
          <section className="position-relative overflow-hidden" id={style.hero} style={{ height: "75vh" }}>
            <div className={style.heroPanel} style={{ backgroundImage: "url('/assets/images/hero/amman-triptych.webp')" }} />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(90deg, rgba(11,10,8,0.45) 0%, rgba(11,10,8,0.02) 30%, rgba(11,10,8,0.02) 70%, rgba(11,10,8,0.45) 100%)",
              }}
            />
            <div
              className="position-absolute top-0 start-0 w-100"
              style={{
                height: "26%",
                background: "linear-gradient(180deg, rgba(11,10,8,0.9) 0%, transparent 100%)",
              }}
            />
            <div
              className="position-absolute bottom-0 start-0 w-100"
              style={{
                height: "50%",
                background: "linear-gradient(0deg, rgba(11,10,8,0.92) 0%, transparent 100%)",
              }}
            />

            <div className={style.heroLogoMark} aria-hidden="true" />

            <div className={style.scrollCue} aria-hidden="true">
              <span />
            </div>
          </section>

          {/* Intro */}
          <section className={`position-relative border-bottom bg-body ${style.introOverlap}`}>
            <div className="container row g-4 g-lg-5 py-5 mx-auto">
              <div className={`col-lg-7 ${style.heroDivider}`}>
                <h2 className={`fs-2 fw-medium text-white mb-2 ${style.reveal}`} style={{ animationDelay: "0.5s" }}>
                  Amman
                </h2>
                <p className={`mt-3 ${style.reveal}`} style={{ maxWidth: "30rem", lineHeight: 1.7, animationDelay: "0.65s" }}>
                  A city where ancient heritage meets contemporary design,
                  Amman&rsquo;s distinctive character is shaped by its limestone
                  architecture, vibrant neighborhoods, and rich cultural history,
                  creating a unique source of inspiration for designers and
                  creative professionals across Jordan and the region.
                </p>
              </div>

              <div className="col-lg-5">
                <h2 className={`fs-2 fw-medium text-white mb-2 ${style.reveal}`} style={{ animationDelay: "0.7s" }}>
                  Welcome to AKA Design Center
                </h2>
                <p className={`mt-3 ${style.reveal}`} style={{ lineHeight: 1.7, animationDelay: "0.85s" }}>
                  Visit AKA Design Center to experience our decors in person and
                  meet with a design consultant. Our showroom is a meeting point
                  for exploring materials, styles, aesthetics, and new approaches
                  to interior design, bringing together designers, architects,
                  and creative professionals to exchange ideas, discover new
                  possibilities, and turn inspiration into distinctive spaces.
                </p>
                <a
                  href="/inspirations"
                  className={`btn btn-outline-cream text-uppercase tracking-widest small fw-semibold mt-3 d-inline-flex align-items-center gap-2 ${style.reveal}`}
                  style={{ animationDelay: "1s" }}
                >
                  Explore More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="1rem" height="1rem">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="border-bottom bg-body mx-auto">
            <div className="container py-5">
              <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
                <div>
                  <h2 data-usal="fade-r" className="fs-2 fw-medium text-white mb-0">
                    Gallery
                  </h2>
                </div>
              </div>
              <div className={style.galleryGrid}>
                {gallery.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    className={style.galleryItem}
                    data-usal="fade-u"
                    data-usal-delay={index * 100}
                    aria-label={`Open image ${index + 1} of ${gallery.length}`}
                    onClick={() => setLightboxIndex(index)}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Business hours + Find us */}
          <section className="border-bottom bg-body">
            <div className="container row g-4 py-5 mx-auto">
              <div data-usal="fade-r" className="col-md-6">
                <div className="card bg-body-secondary border-0 p-4 h-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-3" width="1.75rem" height="1.75rem">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7.5v5l3 2" />
                  </svg>
                  <h2 className="fs-5 fw-medium text-white mb-3">Business Hours</h2>
                  <div className="d-flex justify-content-between border-top py-3">
                    <span className="text-body-secondary">Sunday &ndash; Thursday</span>
                    <span className="text-white">09:00 &ndash; 17:00</span>
                  </div>
                  <div className="d-flex justify-content-between border-top py-3">
                    <span className="text-body-secondary">Saturday</span>
                    <span className="text-white">09:00 &ndash; 17:00</span>
                  </div>
                  <div className="d-flex justify-content-between border-top border-bottom py-3">
                    <span className="text-body-secondary">Friday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>

              <div data-usal="fade-l" className="col-md-6">
                <div className="card bg-body-secondary border-0 p-4 h-100">
                  <h2 className="fs-5 fw-medium text-white mb-3">How to Find Us</h2>

                  <div className="row g-4">
                    <div className="col-6">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-2" width="1.25rem" height="1.25rem">
                        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                        <circle cx="12" cy="9.5" r="2.3" />
                      </svg>
                      <p className="mb-1 small fw-semibold tracking-widest text-primary text-uppercase">
                        Address
                      </p>
                      <p className="mb-0 text-white">
                        Abu Bakr Al-Sideeq St. 172
                        <br />
                        Amman, Jordan
                      </p>
                      <a
                        href="https://maps.google.com/maps?q=Abu%20Bakr%20Al-Sideeq%20St.%20172%2C%20Amman%2C%20Jordan"
                        target="_blank"
                        rel="noreferrer"
                        className="d-inline-block mt-2 small fw-semibold tracking-widest text-primary text-uppercase text-decoration-none"
                      >
                        Get Directions &rarr;
                      </a>
                    </div>

                    <div className="col-6">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-2" width="1.25rem" height="1.25rem">
                        <path d="M3.5 5.5c0-.8.6-1.4 1.4-1.4h2.2c.6 0 1.2.4 1.3 1l.7 2.8c.1.5-.1 1-.5 1.3l-1.3 1c1 2 2.6 3.6 4.6 4.6l1-1.3c.3-.4.8-.6 1.3-.5l2.8.7c.6.1 1 .7 1 1.3v2.2c0 .8-.6 1.4-1.4 1.4C9.8 20.1 3.9 14.2 3.5 6.9z" />
                      </svg>
                      <p className="mb-1 small fw-semibold tracking-widest text-primary text-uppercase">
                        Phone
                      </p>
                      <p className="mb-0">
                        <a href="tel:+962064202240" className="text-white text-decoration-none">
                          +962 0796440510
                        </a>
                      </p>
                    </div>

                    <div className="col-6">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-2" width="1.25rem" height="1.25rem">
                        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                        <path d="m4.5 6.5 7.5 6 7.5-6" />
                      </svg>
                      <p className="mb-1 small fw-semibold tracking-widest text-primary text-uppercase">
                        Email
                      </p>
                      <p className="mb-0">
                        <a href="mailto:info@akadesigncenter.com" className="text-white text-decoration-none text-break">
                          info@akadesigncenter.com
                        </a>
                      </p>
                    </div>

                    <div className="col-6">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-2" width="1.25rem" height="1.25rem">
                        <circle cx="18" cy="5" r="2.5" />
                        <circle cx="6" cy="12" r="2.5" />
                        <circle cx="18" cy="19" r="2.5" />
                        <path d="m8.2 10.8 7.6-4.1M8.2 13.2l7.6 4.1" />
                      </svg>
                      <p className="mb-2 small fw-semibold tracking-widest text-primary text-uppercase">
                        Follow Us
                      </p>
                      <div className="d-flex gap-3">
                        {socials.map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            className="social-icon"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              width="1.25rem"
                              height="1.25rem"
                            >
                              {social.icon}
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTAs */}
          <section className="bg-body">
            <div className="container py-5 row g-3 mx-auto">
              <div className="col-md-4">
                <a
                  data-usal="fade-u"
                  href="/booking"
                  className="btn btn-outline-cream w-100 text-uppercase small fw-semibold d-flex align-items-center justify-content-center gap-2 py-3"
                >
                  Book a Meeting
                </a>
              </div>
              <div className="col-md-4">
                <a
                  data-usal="fade-u"
                  data-usal-delay="100"
                  href="https://maps.google.com/maps?q=Abu%20Bakr%20Al-Sideeq%20St.%20172%2C%20Amman%2C%20Jordan"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-cream w-100 text-uppercase small fw-semibold d-flex align-items-center justify-content-center gap-2 py-3"
                >
                  Direction
                </a>
              </div>
              <div className="col-md-4">
                <a
                  data-usal="fade-u"
                  data-usal-delay="200"
                  href="/events"
                  className="btn btn-outline-cream w-100 text-uppercase small fw-semibold d-flex align-items-center justify-content-center gap-2 py-3"
                >
                  Events
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {lightboxIndex !== null && (
          <div
            className={style.lightboxOverlay}
            role="presentation"
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxIndex(null);
            }}
          >
            <img
              src={gallery[lightboxIndex].src}
              alt={gallery[lightboxIndex].alt}
              className={style.lightboxImage}
            />
            <button
              type="button"
              className={style.lightboxClose}
              aria-label="Close"
              onClick={() => setLightboxIndex(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="1.25rem" height="1.25rem">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <button
              type="button"
              className={`${style.lightboxNav} ${style.lightboxPrev}`}
              aria-label="Previous image"
              onClick={() => setLightboxIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="1.25rem" height="1.25rem">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              className={`${style.lightboxNav} ${style.lightboxNext}`}
              aria-label="Next image"
              onClick={() => setLightboxIndex((i) => (i === null ? i : (i + 1) % gallery.length))}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="1.25rem" height="1.25rem">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <span className={style.lightboxCounter}>
              {lightboxIndex + 1} / {gallery.length}
            </span>
          </div>
        )}
      </div>
    </USALProvider>
  );
}

export default Home;
