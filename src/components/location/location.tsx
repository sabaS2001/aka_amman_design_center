import style from "./location.module.scss";

function Location() {
  return (
    <section className="position-relative overflow-hidden" id={style.location}>
      <img
        src="/assets/images/header/header_three.jpg"
        alt="AKA Design Center showroom interior"
        className={style.bgImage}
      />
      <div className={style.overlay} />

      <div className="container position-relative py-5" style={{ maxWidth: "48rem" }}>
        <div className="text-center">
          <p data-usal="fade-r" className="eyebrow text-primary mb-3">
            Visit the Showroom
          </p>
          <h2 data-usal="fade-r delay-100" className="fs-1 fw-semibold tracking-wide text-white">
            AMMAN
          </h2>
          <p
            data-usal="fade-r delay-200"
            className="mx-auto mt-3 text-body-secondary"
            style={{ maxWidth: "32rem" }}
          >
            Our flagship location, immersing design sensibilities and catering
            to evolving market demands in the heart of the city.
          </p>
        </div>

        <div
          data-usal="slide-up delay-300"
          className={style.infoCard}
        >
          <div className={style.infoCol}>
            <p className="fw-semibold tracking-widest text-primary text-uppercase small mb-2">
              Address
            </p>
            <p className="mb-0 text-white">Abu Bakr Al-Sideeq St. 172</p>
            <p className="mb-0 text-white">Amman, Jordan</p>
          </div>
          <div className={style.divider} />
          <div className={style.infoCol}>
            <p className="fw-semibold tracking-widest text-primary text-uppercase small mb-2">
              Opening Hours
            </p>
            <p className="mb-0 text-white">Sun - Thu: 09:00 - 17:00</p>
            <p className="mb-0 text-white">Saturday: 09:00 - 17:00</p>
            <p className="mb-0 text-white">Friday: Closed</p>
          </div>
          <div className={style.divider} />
          <div className={style.infoCol}>
            <a
              href="https://maps.google.com/maps?q=Abu%20Bakr%20Al-Sideeq%20St.%20172%2C%20Amman%2C%20Jordan"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-cream text-uppercase tracking-widest small fw-semibold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
