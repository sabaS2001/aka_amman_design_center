import { useState, type FormEvent } from "react";
import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Modal, { type ModalStatus } from "../../components/modal/modal";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

const emptyErrors = { name: false, email: false, message: false };

function Contact() {
  const [modalStatus, setModalStatus] = useState<ModalStatus | null>(null);
  const [modalMessage, setModalMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(emptyErrors);

  function clearError(field: keyof typeof emptyErrors) {
    setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: false } : prev));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;

    const errors = {
      name: !nameInput.validity.valid,
      email: !emailInput.validity.valid,
      message: !messageInput.validity.valid,
    };
    setFieldErrors(errors);

    if (errors.name || errors.email || errors.message) {
      setModalStatus("error");
      setModalMessage("Please fill in your name, email, and message before sending.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not send your message.");
      }

      setModalStatus("success");
      setModalMessage(
        "Thank you for reaching out. Our team will get back to you shortly."
      );
      form.reset();
      setFieldErrors(emptyErrors);
    } catch (err) {
      setModalStatus("error");
      setModalMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <USALProvider>
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="Contact Us" />
      <main className="flex-grow-1">
      <section className="position-relative overflow-hidden border-bottom" style={{ minHeight: "22rem" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/assets/images/gallery/showroom-reception-desk.jpg')",
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
          <h1 data-usal="fade-r" className="display-5 fw-medium text-white lh-sm" style={{ maxWidth: "40rem" }}>
            Connect with <span className="text-gold-dark">AKA Design Center</span>
          </h1>
          <p data-usal="fade-r delay-150" className="mt-3 text-body-secondary" style={{ maxWidth: "34rem" }}>
            Experience the architectural precision of our wood materials.
            Whether you are an architect, designer, or homeowner, our team is
            ready to assist with your next masterpiece.
          </p>
        </div>
      </section>

      <section className="border-bottom bg-body">
        <div className="container row g-4 py-5 mx-auto my-auto">
          <div className="col-lg-7" data-usal="fade-r">
            <div className="card bg-body-secondary border-0 p-4 h-100">
              <h2 className="eyebrow text-white">Send a Message</h2>

              <form className="mt-4" onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    className={"form-control bg-transparent" + (fieldErrors.name ? " is-invalid" : "")}
                    onChange={() => clearError("name")}
                  />
                  {fieldErrors.name && (
                    <div className="invalid-feedback">Please enter your name.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@studio.com"
                    className={"form-control bg-transparent" + (fieldErrors.email ? " is-invalid" : "")}
                    onChange={() => clearError("email")}
                  />
                  {fieldErrors.email && (
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Describe your project vision..."
                    className={"form-control bg-transparent" + (fieldErrors.message ? " is-invalid" : "")}
                    onChange={() => clearError("message")}
                  />
                  {fieldErrors.message && (
                    <div className="invalid-feedback">Please enter a message.</div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary text-uppercase tracking-widest small fw-semibold"
                >
                  {submitting ? "Sending..." : <>Send Inquiry &rarr;</>}
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5 d-flex flex-column gap-3" data-usal="fade-l">
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
                Abu Bakr Al-Sideeq St. 172
                <br />
                Amman, Jordan
              </p>
              <a
                href="https://www.google.com/maps?cid=1556695017714774737"
                target="_blank"
                rel="noreferrer"
                className="d-inline-block mt-2 small fw-semibold tracking-widest text-primary text-uppercase text-decoration-none"
              >
                Get Directions &rarr;
              </a>
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
                  <p className="mb-0 text-white">+962 0796440510</p>
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
                  <p className="mb-0 text-white text-break">info@akadesigncenter.com</p>
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
                  <span className="text-body-secondary">Sun &mdash; Thu</span>
                  <span>09:00 &mdash; 17:00</span>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <span className="text-body-secondary">Friday</span>
                  <span>Closed</span>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <span className="text-body-secondary">Saturday</span>
                  <span>09:00 &mdash; 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="position-relative overflow-hidden border-bottom" style={{ height: "22rem" }}>
        <iframe
          src="https://www.google.com/maps?cid=1556695017714774737&output=embed"
          title="AKA Design Center location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="position-absolute top-0 start-0 w-100 h-100 border-0"
        />
        <div
          className="position-absolute bottom-0 start-0 m-3 d-flex align-items-center gap-2"
          style={{ pointerEvents: "none" }}
        >
          <span className="bg-body-tertiary rounded px-3 py-2 small fw-semibold tracking-widest text-white text-uppercase d-inline-flex align-items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              width="1rem"
              height="1rem"
            >
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.3" />
            </svg>
            Visit AKA Design Center
          </span>
        </div>
      </section>
      </main>

      <Footer />

      <Modal
        open={modalStatus !== null}
        status={modalStatus ?? "success"}
        title={modalStatus === "error" ? "Message Not Sent" : "Message Sent"}
        message={modalMessage}
        onClose={() => setModalStatus(null)}
      />
    </div>
    </USALProvider>
  );
}

export default Contact;
