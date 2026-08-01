import { Link } from "react-router-dom";

const events = [
  {
    month: "Oct",
    day: "14",
    title: "Sustainable Architecture Workshop",
    meta: "Lampertswalde | 14:00 - 17:30",
  },
  {
    month: "Oct",
    day: "21",
    title: "Design Trends 2025: Sofia",
    meta: "Sofia Center | 10:00 - 13:00",
  },
  {
    month: "Nov",
    day: "04",
    title: "Surface Texture Masterclass",
    meta: "Bucharest | 11:00 - 15:00",
  },
];

function Events() {
  return (
    <section id="events" className="border-bottom bg-body-secondary">
      <div className="container row gy-5 py-5 mx-auto my-auto align-items-center">
        <div className="col-lg-6">
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

        <div id="consultation" className="col-lg-6">
          <div className="card bg-body-tertiary border-0 p-4 h-100">
            <h3 className="fs-4 fw-medium text-white">Book a Consultation</h3>
            <p className="mt-2 text-body-secondary">
              Schedule a one-on-one session with our material specialists to
              refine your project's aesthetic.
            </p>

            <form className="mt-3">
              <div className="mb-3">
                <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                  Project Name
                </label>
                <input
                  type="text"
                  placeholder="Residential Interior"
                  className="form-control bg-body"
                />
              </div>

              <div className="row g-3">
                <div className="col-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Location
                  </label>
                  <input type="text" placeholder="Bulgaria" className="form-control bg-body" />
                </div>
                <div className="col-6">
                  <label className="form-label small text-body-secondary text-uppercase tracking-widest">
                    Preferred Date
                  </label>
                  <input type="date" className="form-control bg-body" style={{ colorScheme: "dark" }} />
                </div>
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
    </section>
  );
}

export default Events;
