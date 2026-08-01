import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

function Booking() {
  const [selectedSlot, setSelectedSlot] = useState(slots[1]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="Contact Us" />
      <main className="flex-grow-1">
      <section className="position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(135deg,#241a12 0%,#402c1c 35%,#5c4128 60%,#2b1e14 100%)",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg,rgba(11,10,8,0.92) 0%,rgba(11,10,8,0.6) 45%,rgba(11,10,8,0.85) 100%)",
          }}
        />

        <div className="container position-relative row gy-5 py-5">
          <div className="col-lg-5">
            <p className="eyebrow text-primary mb-3">Reservation</p>
            <h1 className="display-5 fw-medium text-white lh-sm">
              Schedule a Material Consultation
            </h1>
            <p className="mt-3 text-body-secondary" style={{ maxWidth: "26rem" }}>
              Work with our material specialists to select the perfect
              interior surfaces, cladding, and worktops for your project.
            </p>

            <div className="mt-4 pt-4 border-top" style={{ maxWidth: "22rem" }}>
              <p className="small fw-semibold tracking-widest text-white text-uppercase mb-1">
                Flagship Showroom
              </p>
              <p className="mb-0 small text-body-secondary">
                1200 Architectural Way, Design District
              </p>
              <p className="small text-body-secondary">New York, NY 10013</p>

              <p className="mt-3 small fw-semibold tracking-widest text-white text-uppercase mb-1">
                Hours
              </p>
              <p className="mb-0 small text-body-secondary">
                Mon &ndash; Fri: 09:00 &ndash; 18:00
              </p>
              <p className="small text-body-secondary">Sat: 10:00 &ndash; 16:00</p>

              <a
                href="#map"
                className="mt-3 d-inline-flex align-items-center gap-2 small fw-medium text-primary text-decoration-underline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="1rem"
                  height="1rem"
                >
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.3" />
                </svg>
                View on Map
              </a>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="card bg-body-tertiary bg-opacity-90 border-0 p-4 p-lg-5">
              <div className="row g-4">
                <div className="col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Full Name
                  </label>
                  <input type="text" placeholder="Johnathan Doe" className="form-control bg-transparent" />
                </div>
                <div className="col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Email Address
                  </label>
                  <input type="email" placeholder="john@studio.com" className="form-control bg-transparent" />
                </div>
              </div>

              <div className="mt-4">
                <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                  Preferred Date
                </label>
                <input type="date" className="form-control bg-transparent" style={{ colorScheme: "dark" }} />
              </div>

              <div className="mt-4">
                <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                  Available Slots
                </label>
                <div className="d-flex flex-wrap gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={
                        slot === selectedSlot
                          ? "btn btn-outline-primary btn-sm"
                          : "btn btn-outline-secondary btn-sm text-white-50"
                      }
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                  Project Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project vision, materials you are interested in, and estimated timeline..."
                  className="form-control bg-body"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 text-uppercase tracking-widest small fw-semibold"
              >
                Confirm Booking &rarr;
              </button>
              <p className="mt-3 mb-0 text-center small text-body-secondary">
                A specialist will contact you within 24 hours to confirm your
                appointment.
              </p>
            </form>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default Booking;
