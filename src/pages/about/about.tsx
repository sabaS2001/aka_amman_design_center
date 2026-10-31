import { USALProvider } from "@usal/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";

function About() {
  return (
    <USALProvider>
      <div className="d-flex flex-column min-vh-100 bg-body">
        <Navbar active="About" />
        <main className="flex-grow-1">
          <Hero />

          {/* Our Story */}
          <section className="border-bottom bg-body">
            <div className="container py-5 text-center" style={{ maxWidth: "70rem" }}>
              <p data-usal="fade-r" className="eyebrow text-primary mb-3">
                Our Story
              </p>
              <h2 data-usal="fade-r delay-100" className="fs-2 fw-medium text-white">
                A Showroom Built Around Material Honesty
              </h2>
              <p data-usal="fade-r delay-200" className="mt-3 text-body-secondary">
                AKA Design Center opened its doors in Amman to give architects,
                designers, and homeowners a place to see and touch quality
                surfaces before committing to a project. We represent
                Kronospan's flooring, worktop, and panel ranges alongside a
                curated set of complementary finishes, displayed the way
                they'll actually look in a finished space.
              </p>
            </div>
          </section>

          <Features />

          {/* CTA */}
          <section className="bg-body">
            <div className="container py-5">
              <div
                data-usal="fade-r"
                className="card bg-body-secondary border-0 px-4 py-5 text-center"
              >
                <h2 className="text-white">
                  Ready to Start Your{" "}
                  <span className="text-gold-dark">Project</span>?
                </h2>
                <p
                  className="mx-auto mt-3 text-body-secondary"
                  style={{ maxWidth: "32rem" }}
                >
                  Book a consultation or visit us in Amman to explore
                  materials in person.
                </p>
                <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
                  <Link
                    to="/booking"
                    className="btn btn-primary text-uppercase small fw-semibold"
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-cream text-uppercase small fw-semibold"
                  >
                    Contact Us
                  </Link>
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

export default About;
