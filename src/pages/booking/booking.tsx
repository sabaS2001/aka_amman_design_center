import { useState, type FormEvent } from "react";
import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Calendar from "../../components/calendar/calendar";
import Modal, { type ModalStatus } from "../../components/modal/modal";

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

const emptyErrors = { fullName: false, email: false, date: false };

function Booking() {
  const [selectedSlot, setSelectedSlot] = useState(slots[1]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalStatus, setModalStatus] = useState<ModalStatus | null>(null);
  const [fieldErrors, setFieldErrors] = useState(emptyErrors);

  function clearError(field: keyof typeof emptyErrors) {
    setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: false } : prev));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fullNameInput = form.elements.namedItem("fullName") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    const errors = {
      fullName: !fullNameInput.validity.valid,
      email: !emailInput.validity.valid,
      date: !selectedDate,
    };
    setFieldErrors(errors);

    if (errors.fullName || errors.email || errors.date) {
      setModalStatus("error");
      return;
    }

    setModalStatus("success");
    form.reset();
    setSelectedDate(null);
    setSelectedSlot(slots[1]);
    setFieldErrors(emptyErrors);
  }

  return (
    <USALProvider>
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="Contact Us" />
      <main className="flex-grow-1">
      <section className="position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/assets/images/header/header_two.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg,rgba(11,10,8,0.92) 0%,rgba(11,10,8,0.65) 45%,rgba(11,10,8,0.88) 100%)",
          }}
        />

        <div className="container position-relative row gy-5 py-5 mx-auto">
          <div className="col-lg-5">
            <p data-usal="fade-r" className="eyebrow text-primary mb-3">Reservation</p>
            <h1 data-usal="fade-r delay-100" className="display-5 fw-medium text-white lh-sm">
              Schedule a Material Consultation
            </h1>
            <p data-usal="fade-r delay-200" className="mt-3 text-body-secondary" style={{ maxWidth: "26rem" }}>
              Work with our material specialists to select the perfect
              interior surfaces, cladding, and worktops for your project.
            </p>

            <div data-usal="fade-r delay-300" className="mt-4 pt-4 border-top" style={{ maxWidth: "22rem" }}>
              <p className="small fw-semibold tracking-widest text-white text-uppercase mb-1">
                Location of Showroom
              </p>
              <p className="mb-0 small text-body-secondary">
                Abu Bakr Al-Sideeq St. 172
              </p>
              <p className="small text-body-secondary">Amman, Jordan</p>

              <p className="mt-3 small fw-semibold tracking-widest text-white text-uppercase mb-1">
                Hours
              </p>
              <p className="mb-0 small text-body-secondary">
                Sun &ndash; Thu: 09:00 &ndash; 17:00
              </p>
              <p className="mb-0 small text-body-secondary">Sat: 09:00 &ndash; 17:00</p>
              <p className="small text-body-secondary">Fri: Closed</p>
            </div>
          </div>

          <div className="col-lg-7" data-usal="fade-l delay-150">
            <form className="card bg-body-tertiary bg-opacity-90 border-0 p-4 p-lg-5" onSubmit={handleSubmit} noValidate>
              <div className="row g-4">
                <div className="col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Johnathan Doe"
                    className={"form-control bg-transparent" + (fieldErrors.fullName ? " is-invalid" : "")}
                    onChange={() => clearError("fullName")}
                  />
                  {fieldErrors.fullName && (
                    <div className="invalid-feedback">Please enter your full name.</div>
                  )}
                </div>
                <div className="col-sm-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@studio.com"
                    className={"form-control bg-transparent" + (fieldErrors.email ? " is-invalid" : "")}
                    onChange={() => clearError("email")}
                  />
                  {fieldErrors.email && (
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                  Preferred Date
                </label>
                <Calendar
                  selectedDate={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    clearError("date");
                  }}
                  invalid={fieldErrors.date}
                />
                {selectedDate && (
                  <p className="mt-2 mb-0 small text-primary">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                )}
                {fieldErrors.date && (
                  <p className="mt-2 mb-0 small" style={{ color: "#dc3545" }}>
                    Please select a preferred date.
                  </p>
                )}
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

      <Modal
        open={modalStatus !== null}
        status={modalStatus ?? "success"}
        title={modalStatus === "error" ? "Booking Incomplete" : "Booking Confirmed"}
        message={
          modalStatus === "error"
            ? "Please fill in your name, email, and preferred date before confirming your booking."
            : "Thank you. We've sent a confirmation to your email, and a specialist will follow up within 24 hours to confirm your appointment."
        }
        onClose={() => setModalStatus(null)}
      />
    </div>
    </USALProvider>
  );
}

export default Booking;
