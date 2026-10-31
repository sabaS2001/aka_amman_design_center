function Hero() {
  return (
    <section
      className="position-relative overflow-hidden border-bottom"
      style={{ minHeight: "22rem" }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('/assets/images/gallery/showroom-kronospan-wall.jpg')",
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
        <h1
          data-usal="fade-r"
          className="display-5 fw-medium text-white lh-sm"
          style={{ maxWidth: "40rem" }}
        >
          About <span className="text-gold-dark">AKA Design Center</span>
        </h1>
        <p
          data-usal="fade-r delay-150"
          className="mt-3 text-body-secondary"
          style={{ maxWidth: "34rem" }}
        >
          We bring architects, designers, and homeowners together under one
          roof in Amman to explore premium flooring, worktop, and panel
          materials in person.
        </p>
      </div>
    </section>
  );
}

export default Hero;
