import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const checklist = [
  {
    title: "Comprehensive Material Library",
    description: "Access over 500 unique wood grains and technical laminates.",
  },
  {
    title: "Technical Documentation",
    description:
      "Instant access to fire ratings, sustainability certifications, and MSDS.",
  },
];

function Showroom() {
  return (
    <USALProvider>
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="Showroom" />
      <main className="flex-grow-1">
      <section className="position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/assets/images/header/header_four.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,10,8,0.94) 0%, rgba(11,10,8,0.6) 50%, rgba(11,10,8,0.35) 100%)",
          }}
        />

        <div className="container position-relative py-5 mx-auto my-auto">
          <p data-usal="fade-r" className="eyebrow text-primary mb-3">Flagship Location</p>
          <h1 data-usal="fade-r delay-100" className="display-4 fw-medium text-white lh-sm" style={{ maxWidth: "40rem" }}>
            Architectural Mastery in Every Grain.
          </h1>
          <p data-usal="fade-r delay-200" className="mt-3 text-body-secondary" style={{ maxWidth: "32rem" }}>
            Experience the tactile precision of AKA Design Center. Our
            flagship showroom is a curated gallery of premium cladding,
            decorative tops, and structural wood innovations for the modern
            visionary.
          </p>
          <div data-usal="fade-r delay-300" className="mt-4 d-flex flex-wrap align-items-center gap-3">
            <a href="/booking" className="btn btn-primary text-uppercase tracking-widest small fw-semibold">
              Book a Consultation
            </a>
            <a href="/inspirations" className="btn btn-outline-cream text-uppercase tracking-widest small fw-semibold">
              Explore Materials
            </a>
          </div>
        </div>
      </section>

      <section className="border-top border-bottom bg-body">
        <div className="container row g-4 py-5 mx-auto my-auto">
          <div data-usal="slide-up" className="col-sm-4">
            <p className="small fw-semibold tracking-widest text-primary text-uppercase">Location</p>
            <p className="mb-0 text-white">Abu Bakr Al-Sideeq St. 172</p>
            <p className="mb-0 text-white">Amman, Jordan</p>
            <a
              href="#map"
              className="d-inline-block mt-2 small fw-semibold tracking-widest text-primary text-uppercase text-decoration-none"
            >
              Get Directions &rarr;
            </a>
          </div>
          <div data-usal="slide-up delay-150" className="col-sm-4">
            <p className="small fw-semibold tracking-widest text-primary text-uppercase">Experience Hours</p>
            <div className="small">
              <div className="d-flex justify-content-between gap-4">
                <span className="text-white">Sun &mdash; Thu</span>
                <span className="text-white">09:00 - 17:00</span>
              </div>
              <div className="d-flex justify-content-between gap-4">
                <span className="text-white">Friday</span>
                <span className="text-body-secondary">Closed</span>
              </div>
              <div className="d-flex justify-content-between gap-4">
                <span className="text-white">Saturday</span>
                <span className="text-white">09:00 - 17:00</span>
              </div>
            </div>
          </div>
          <div data-usal="slide-up delay-300" className="col-sm-4">
            <p className="small fw-semibold tracking-widest text-primary text-uppercase">Direct Access</p>
            <p className="mb-0 small text-body-secondary">General Inquiries:</p>
            <p className="text-white">info@akadesigncenter.com</p>
            <p className="mb-0 small text-body-secondary">Showroom Desk:</p>
            <p className="text-white">962 064202240</p>
          </div>
        </div>
      </section>

      <section className="border-bottom bg-body">
        <div className="container row g-3 py-5 mx-auto my-auto">
          <div data-usal="fade-r" className="col-lg-7">
            <div
              className="position-relative overflow-hidden rounded h-100"
              style={{
                minHeight: "320px",
                backgroundImage: "url('/assets/images/header/header_three.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.1) 60%, transparent 100%)",
                }}
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-4">
                <h3 className="fs-5 fw-medium text-white mb-1">Modernist Facade</h3>
                <p className="mb-0 text-white-50">
                  A landmark of structural design and material honesty.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-flex flex-column gap-3">
            <div data-usal="fade-l" className="border rounded p-4 flex-fill">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                width="1.5rem"
                height="1.5rem"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m14.5 9.5-2 5-5 2 2-5Z" />
              </svg>
              <h3 className="fs-6 fw-medium text-white mt-3 mb-1">Consultation Lab</h3>
              <p className="mb-0 text-body-secondary">
                Private sessions with material specialists and structural
                engineers.
              </p>
            </div>

            <div data-usal="fade-l delay-150" className="rounded p-4 flex-fill bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="1.5rem"
                height="1.5rem"
              >
                <rect x="4" y="7" width="16" height="13" rx="1.5" />
                <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
              </svg>
              <h3 className="fs-6 fw-medium mt-3 mb-1">Order Samples</h3>
              <p className="mb-0">
                Select and ship premium wood finishes directly to your
                studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-body">
        <div className="container row align-items-center g-5 py-5 mx-auto my-auto">
          <div data-usal="fade-r" className="col-lg-6 position-relative">
            <img
              src="/assets/images/header/header_five.jpg"
              alt="AKA Design Center wood material display"
              className="rounded w-100"
              style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
            />
            <img
              src="/assets/images/header/header_one.jpg"
              alt="AKA Design Center wood swatch samples"
              className="position-absolute d-none d-sm-block rounded border border-4 border-body"
              style={{
                bottom: "-1.5rem",
                right: "-1.5rem",
                width: "10rem",
                height: "8rem",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-lg-6">
            <h2 data-usal="fade-l" className="fs-2 fw-medium text-white lh-sm">
              A Sanctuary for Professional Specifications.
            </h2>
            <p data-usal="fade-l delay-100" className="mt-3 text-body-secondary" style={{ maxWidth: "30rem" }}>
              At AKA Design Center, we believe that materials are the
              language of architecture. Our space is designed to remove
              distractions, allowing professionals to focus on the nuances
              of finish, durability, and visual weight.
            </p>

            <ul className="list-unstyled mt-4">
              {checklist.map((item, index) => (
                <li
                  key={item.title}
                  data-usal="fade-l"
                  data-usal-delay={200 + index * 150}
                  className="d-flex gap-3 mb-3"
                >
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
                      {item.title}
                    </p>
                    <p className="mb-0 text-body-secondary">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
    </USALProvider>
  );
}

export default Showroom;
