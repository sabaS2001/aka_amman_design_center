import { Link } from "react-router-dom";
import style from "./hero.module.scss";

function Hero() {
  return (
    <section className="position-relative overflow-hidden" id={style.hero}>
      <div className={style.heroOverlay} />
      <div className="container d-flex flex-column justify-content-end pb-4" id={style.heroInner}>
        <div style={{ maxWidth: "34rem" }} id={style.heroContent}>
          <p data-usal="fade-r" className="text-primary mb-3" id={style.small}>
            — Amman Design Center
          </p>
          <h1 data-usal="fade-r delay-100" className="display-1 fw-medium text-white lh-sm">
            Materiality
            <br />
            <span className="display-2 fst-italic text-white">Refined.</span>
          </h1>
          <p data-usal="fade-r delay-200" className="mt-3 text-white" id={style.content}>
            Inspiration is our driving force. We bring creativity closer to you
            in our official showroom, showcasing over 50 flooring and furniture
            panels.
          </p>
          <div
            data-usal="fade-r delay-300"
            className="mt-4 d-flex flex-wrap flex-row align-items-center gap-3"
          >
            <Link
              id={style.exploreBtn}
              to="/inspirations"
              className="btn btn-primary text-uppercase tracking-widest small fw-semibold"
            >
              Explore Decors
            </Link>
            <Link
              id={style.showroomBtn}
              to="/showroom"
              className="btn btn-outline-cream text-uppercase tracking-widest small fw-semibold"
            >
              The Showroom
            </Link>
          </div>
        </div>
      </div>
      <div className={style.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default Hero;
