import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Modal, { type ModalStatus } from "../modal/modal";

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

const events = [
  {
    month: "Oct",
    day: "14",
    title: "Sustainable Architecture Workshop",
    meta: "AKA Showroom, Amman | 14:00 - 17:30",
  },
  {
    month: "Oct",
    day: "21",
    title: "Design Trends 2025",
    meta: "AKA Showroom, Amman | 10:00 - 13:00",
  },
  {
    month: "Nov",
    day: "04",
    title: "Surface Texture Masterclass",
    meta: "AKA Showroom, Amman | 11:00 - 15:00",
  },
];

const emptyErrors = { projectName: false, email: false, preferredDate: false };

function Events() {
  const [modalStatus, setModalStatus] = useState<ModalStatus | null>(null);
  const [selectedSlot, setSelectedSlot] = useState(slots[1]);
  const [fieldErrors, setFieldErrors] = useState(emptyErrors);

  function clearError(field: keyof typeof emptyErrors) {
    setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: false } : prev));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const projectNameInput = form.elements.namedItem("projectName") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const preferredDateInput = form.elements.namedItem("preferredDate") as HTMLInputElement;

    const errors = {
      projectName: !projectNameInput.validity.valid,
      email: !emailInput.validity.valid,
      preferredDate: !preferredDateInput.validity.valid,
    };
    setFieldErrors(errors);

    if (errors.projectName || errors.email || errors.preferredDate) {
      setModalStatus("error");
      return;
    }

    setModalStatus("success");
    form.reset();
    setSelectedSlot(slots[1]);
    setFieldErrors(emptyErrors);
  }

  return (
    <section id="events" className="border-bottom bg-body-secondary">
      <div className="container row gy-5 py-5 mx-auto my-auto align-items-center">
        <div data-usal="fade-r" className="col-lg-6">
          <p className="eyebrow text-primary mb-2">What's On</p>
          <h2 className="fs-2 fw-medium text-white mb-4">Showroom Events</h2>
          <ul className="list-unstyled mb-0">
            {events.map((event) => (
              <li key={event.title} className="border-top">
                <Link
                  to="/events"
                  className="d-flex align-items-center gap-3 py-3 text-decoration-none"
                >
                  <div className="text-center" style={{ width: "3.5rem" }}>
                    <p className="mb-0 text-primary text-uppercase tracking-widest small fw-semibold">
                      {event.month}
                    </p>
                    <p className="mb-0 fs-3 fw-medium text-white">{event.day}</p>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 fw-medium text-white">{event.title}</p>
                    <p className="mb-0 mt-1 small text-body-secondary">{event.meta}</p>
                  </div>
                  <span className="text-body-secondary">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="consultation" data-usal="fade-l delay-150" className="col-lg-6">
          <div className="card bg-body-tertiary border-0 p-4 h-100">
            <h3 className="fs-4 fw-medium text-white">Book a Consultation</h3>
            <p className="mt-2 text-body-secondary">
              Schedule a one-on-one session with our material specialists to
              refine your project's aesthetic.
            </p>

            <form className="mt-3" onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    required
                    placeholder="Residential Interior"
                    className={"form-control bg-body" + (fieldErrors.projectName ? " is-invalid" : "")}
                    onChange={() => clearError("projectName")}
                  />
                  {fieldErrors.projectName && (
                    <div className="invalid-feedback">Please enter a project name.</div>
                  )}
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@studio.com"
                    className={"form-control bg-body" + (fieldErrors.email ? " is-invalid" : "")}
                    onChange={() => clearError("email")}
                  />
                  {fieldErrors.email && (
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  )}
                </div>
              </div>

              <div className="row g-3 mt-0">
                <div className="col-12 col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value="Amman, Jordan"
                    readOnly
                    className="form-control bg-body"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    className={"form-control bg-body" + (fieldErrors.preferredDate ? " is-invalid" : "")}
                    style={{ colorScheme: "dark" }}
                    onChange={() => clearError("preferredDate")}
                  />
                  {fieldErrors.preferredDate && (
                    <div className="invalid-feedback">Please select a preferred date.</div>
                  )}
                </div>
              </div>

              <div className="mt-3">
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
                <input type="hidden" name="timeSlot" value={selectedSlot} />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 text-uppercase tracking-widest small fw-semibold"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal
        open={modalStatus !== null}
        status={modalStatus ?? "success"}
        title={modalStatus === "error" ? "Appointment Incomplete" : "Appointment Requested"}
        message={
          modalStatus === "error"
            ? "Please fill in the project name, email, and preferred date before confirming."
            : "Thank you. We've sent a confirmation to your email, and our team will follow up shortly to confirm your appointment at the Amman showroom."
        }
        onClose={() => setModalStatus(null)}
      />
    </section>
  );
}

export default Events;
