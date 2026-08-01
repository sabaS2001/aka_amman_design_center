import { Link } from "react-router-dom";
import style from "./hero.module.scss";

function Hero() {
  return (
    <section className="position-relative overflow-hidden" id={style.hero}>
      <div className="container d-flex flex-column justify-content-end pb-4" style={{ height: "85vh" }}>
        <div style={{ maxWidth: "34rem" }} id={style.heroContent}>
          <p className="text-primary mb-3" id={style.small}>
            Amman Design Center
          </p>
          <h1 className="display-1 fw-medium text-white lh-sm">
            Materiality
            <br />
            <span className="display-2 fst-italic text-white">Refined.</span>
          </h1>
          <p className="mt-3 text-white" id={style.content}>
            Inspiration is our driving force. We bring creativity closer to you
            in our official showroom, showcasing over 50 flooring and furniture
            panels.
          </p>
          <div className="mt-4 d-flex flex-wrap flex-row align-items-center gap-3">
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
    </section>
  );
}

export default Hero;
