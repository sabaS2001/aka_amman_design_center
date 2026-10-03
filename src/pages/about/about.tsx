import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const values = [
  {
    title: "Tactile Excellence",
    description:
      "We believe the quality of a space is felt. Our collection is selected for its superior sensory profile and finish.",
    icon: (
      <>
        <path d="M8 12.5V6a1.6 1.6 0 0 1 3.2 0v5" />
        <path d="M11.2 11V4.8a1.6 1.6 0 0 1 3.2 0V11" />
        <path d="M14.4 11V6a1.6 1.6 0 0 1 3.2 0v7" />
        <path d="M17.6 12v-2a1.6 1.6 0 0 1 3.2 0v6c0 3.5-2.5 6.5-6.5 6.5h-2c-2.3 0-3.6-.7-4.9-2.3L4 15.8c-.6-.8-.4-1.9.4-2.4.7-.5 1.7-.4 2.3.3L8 15.5" />
      </>
    ),
  },
  {
    title: "Material Honesty",
    description:
      "Authenticity is our core value. We prioritize materials that maintain their integrity across time and use.",
    icon: (
      <>
        <path d="m9 12 2 2 4-4" />
        <path d="M12 3.5 14 5l2.6-.3 1 2.4L20 8l-1 2.5L20 13l-2.4 1 -1 2.4L14 16l-2 1.5L10 16l-2.6.4-1-2.4L4 13l1-2.5L4 8l2.4-1 1-2.4L10 5Z" />
      </>
    ),
  },
  {
    title: "Professional Support",
    description:
      "From technical specifications to site visits, we empower professionals with precise data and reliable support.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m14.5 9.5-2 5-5 2 2-5Z" />
      </>
    ),
  },
];

function About() {
  return (
    <USALProvider>
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="About" />
      <main className="flex-grow-1">
      <section className="position-relative overflow-hidden" style={{ minHeight: "24rem" }}>
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
              "linear-gradient(90deg, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.45) 60%, rgba(11,10,8,0.75) 100%)",
          }}
        />

        <div className="container position-relative d-flex flex-column justify-content-center h-100 py-5">
          <h1 data-usal="fade-r" className="display-4 fw-medium text-white lh-sm" style={{ maxWidth: "40rem" }}>
            Refining the Architectural Landscape.
          </h1>
        </div>
      </section>

      <section className="border-bottom bg-body">
        <div className="container row align-items-center g-5 py-5 mx-auto my-auto">
          <div className="col-lg-6">
            <p data-usal="fade-r" className="eyebrow text-primary mb-3">Who We Are</p>
            <h2 data-usal="fade-r delay-100" className="fs-2 fw-medium text-white lh-sm">
              A curated hub for premium interior surfaces, cladding, and
              worktops tailored for architects and designers.
            </h2>
            <p data-usal="fade-r delay-200" className="mt-3 text-body-secondary" style={{ maxWidth: "30rem" }}>
              AKA Design Center serves as a bridge between visionary concepts
              and material reality. We specialize in sourcing and specifying
              the finest architectural surfaces that define modern
              environments.
            </p>
          </div>
          <div className="col-lg-6" data-usal="fade-l delay-150">
            <img
              src="/assets/images/header/header_three.jpg"
              alt="AKA Design Center showroom interior"
              className="rounded w-100"
              style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-body">
        <div className="container row g-4 py-5 mx-auto my-auto">
          {values.map((value, index) => (
            <div key={value.title} className="col-sm-4" data-usal="slide-up" data-usal-delay={index * 150}>
              <div className="border rounded p-4 h-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mb-3"
                  width="1.75rem"
                  height="1.75rem"
                >
                  {value.icon}
                </svg>
                <h3 className="fs-5 fw-medium text-white mb-2">{value.title}</h3>
                <p className="mb-0 text-body-secondary">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>

      <Footer />
    </div>
    </USALProvider>
  );
}

export default About;
