import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function Events() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      <Navbar active="Events" />
      <main className="flex-grow-1">
      <section className="position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(155deg,#1b1712 0%,#332617 35%,#4a3620 60%,#171310 100%)",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "radial-gradient(55% 45% at 65% 35%, rgba(205,168,106,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(0deg, rgba(11,10,8,0.97) 0%, rgba(11,10,8,0.5) 55%, rgba(11,10,8,0.35) 100%)",
          }}
        />

        <div className="container position-relative py-5">
          <p className="eyebrow text-primary mb-3">AKA Design Center</p>
          <h1 className="display-4 fw-medium text-white lh-sm" style={{ maxWidth: "48rem" }}>
            Professional Masterclasses &amp; Workshops
          </h1>
        </div>
      </section>

      <section className="border-bottom bg-body">
        <div className="container py-5 text-center">
          <h2 className="fs-3 fw-medium text-white">Upcoming Schedule</h2>
          <p className="mx-auto mt-3 text-body-secondary" style={{ maxWidth: "28rem" }}>
            There are currently no upcoming events. Please check back later
            or join our mailing list for updates.
          </p>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}

export default Events;
