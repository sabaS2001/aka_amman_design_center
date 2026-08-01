function Location() {
  return (
    <section className="position-relative overflow-hidden">
      <iframe
        src="https://maps.google.com/maps?q=Amman%2C%20Jordan&z=15&output=embed"
        title="AKA Design Center location map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="position-absolute top-0 start-0 w-100 h-100 border-0"
        style={{ pointerEvents: "none" }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-75" />

      <div className="container position-relative py-5 text-center" style={{ maxWidth: "48rem" }}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary mb-3"
          width="2.5rem"
          height="2.5rem"
        >
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>

        <h2 className="fs-1 fw-semibold tracking-wide text-white">AMMAN</h2>
        <p className="mx-auto mt-3 text-body-secondary" style={{ maxWidth: "32rem" }}>
          Our flagship location, immersing design sensibilities and catering
          to evolving market demands in the heart of the city.
        </p>

        <div className="mt-4 d-flex flex-wrap justify-content-center gap-5 text-start">
          <div>
            <p className="fw-semibold tracking-widest text-primary text-uppercase mb-1">
              Address
            </p>
            <p className="mb-0 text-white">Amman, Jordan</p>
            <p className="mb-0 text-white">Design District, Blvd 142</p>
          </div>
          <div>
            <p className="fw-semibold tracking-widest text-primary text-uppercase mb-1">
              Opening Hours
            </p>
            <p className="mb-0 text-white">Sun - Sat: 09:00 - 19:00</p>
            <p className="mb-0 text-white">Friday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
