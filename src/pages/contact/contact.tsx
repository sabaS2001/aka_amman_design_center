import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="Contact Us" />
      <main className="flex-grow-1">
      <section className="border-bottom">
        <div className="container pt-5 pb-4">
          <h1 className="display-5 fw-medium text-white lh-sm" style={{ maxWidth: "40rem" }}>
            Connect with <span className="text-gold-dark">AKA Design Center</span>
          </h1>
          <p className="mt-3 text-body-secondary" style={{ maxWidth: "34rem" }}>
            Experience the architectural precision of our wood materials.
            Whether you are an architect, designer, or homeowner, our team is
            ready to assist with your next masterpiece.
          </p>
        </div>
      </section>

      <section className="border-bottom bg-body">
        <div className="container row g-4 py-5 mx-auto my-auto">
          <div className="col-lg-7">
            <div className="card bg-body-secondary border-0 p-4 h-100">
              <h2 className="eyebrow text-white">Send a Message</h2>

              <form className="mt-4">
                <div className="mb-3">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Name
                  </label>
                  <input type="text" placeholder="Your Full Name" className="form-control bg-transparent" />
                </div>
                <div className="mb-3">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Email
                  </label>
                  <input type="email" placeholder="example@studio.com" className="form-control bg-transparent" />
                </div>
                <div className="mb-4">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your project vision..."
                    className="form-control bg-transparent"
                  />
                </div>

                <button type="submit" className="btn btn-primary text-uppercase tracking-widest small fw-semibold">
                  Send Inquiry &rarr;
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5 d-flex flex-column gap-3">
            <div className="card bg-body-secondary border-0 p-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                width="1.25rem"
                height="1.25rem"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.3" />
              </svg>
              <p className="mt-3 mb-1 small fw-semibold tracking-widest text-body-secondary text-uppercase">
                Showroom Address
              </p>
              <p className="mb-0 text-white">
                452 Architectural Way, Suite 100, Design District
                <br />
                New York, NY 10013
              </p>
            </div>

            <div className="card bg-body-secondary border-0 p-4">
              <div className="row">
                <div className="col-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                    width="1.25rem"
                    height="1.25rem"
                  >
                    <path d="M3.5 5.5c0-.8.6-1.4 1.4-1.4h2.2c.6 0 1.2.4 1.3 1l.7 2.8c.1.5-.1 1-.5 1.3l-1.3 1c1 2 2.6 3.6 4.6 4.6l1-1.3c.3-.4.8-.6 1.3-.5l2.8.7c.6.1 1 .7 1 1.3v2.2c0 .8-.6 1.4-1.4 1.4C9.8 20.1 3.9 14.2 3.5 6.9z" />
                  </svg>
                  <p className="mt-3 mb-1 small fw-semibold tracking-widest text-body-secondary text-uppercase">
                    Phone
                  </p>
                  <p className="mb-0 text-white">+1 (212) 555-8902</p>
                </div>
                <div className="col-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                    width="1.25rem"
                    height="1.25rem"
                  >
                    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                    <path d="m4.5 6.5 7.5 6 7.5-6" />
                  </svg>
                  <p className="mt-3 mb-1 small fw-semibold tracking-widest text-body-secondary text-uppercase">
                    Email
                  </p>
                  <p className="mb-0 text-white text-break">concierge@aka.design</p>
                </div>
              </div>
            </div>

            <div className="card bg-body-secondary border-0 p-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                width="1.25rem"
                height="1.25rem"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l2.5 2.5" />
              </svg>
              <p className="mt-3 mb-1 small fw-semibold tracking-widest text-body-secondary text-uppercase">
                Viewing Hours
              </p>
              <div className="text-white small">
                <div className="d-flex justify-content-between gap-3">
                  <span className="text-body-secondary">Mon &mdash; Fri</span>
                  <span>09:00 &mdash; 18:00</span>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <span className="text-body-secondary">Saturday</span>
                  <span>10:00 &mdash; 16:00</span>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <span className="text-body-secondary">Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="position-relative overflow-hidden border-bottom" style={{ height: "22rem" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(rgba(163,157,146,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(163,157,146,0.15) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            backgroundColor: "#14110d",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 50%, transparent 0%, rgba(11,10,8,0.85) 100%)",
          }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            width="2.25rem"
            height="2.25rem"
          >
            <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.3" />
          </svg>
          <span className="bg-body-tertiary rounded px-3 py-2 small fw-semibold tracking-widest text-white text-uppercase">
            Visit AKA Design Center
          </span>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
