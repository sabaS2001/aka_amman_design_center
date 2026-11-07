import { Link } from "react-router-dom";
import style from "./inspirations.module.scss";

const featured = {
  tag: "Premium Oak",
  title: "Natural Rockford Hickory",
  image: "/assets/images/header/header_one.jpg",
};

const items = [
  {
    tag: "Acrylic Gloss",
    title: "Vibrant Palette Selection",
    image: "/assets/images/header/header_two.jpg",
  },
  {
    tag: "Deep Series",
    title: "Architectural Walnut",
    image: "/assets/images/header/header_five.jpg",
  },
];

function Inspirations() {
  return (
    <section id="inspirations" className="border-bottom bg-body">
      <div className="container py-5">
        <div
          data-usal="fade-r"
          className="d-flex flex-wrap align-items-end justify-content-between gap-3"
        >
          <div>
            <p className="eyebrow text-primary mb-2">Material Library</p>
            <h2 className="fs-2 fw-medium text-white">Tactile Inspirations</h2>
            <p className="mt-2 text-body-secondary" style={{ maxWidth: "26rem" }}>
              Visualize your concept through our diverse sample sizes that
              describe the decors and textures in detail.
            </p>
          </div>
          <Link
            to="/inspirations"
            className="text-primary text-uppercase tracking-widest small fw-semibold text-decoration-none text-nowrap"
          >
            View All &rarr;
          </Link>
        </div>

        <div className="row g-3 mt-2">
          <div className="col-lg-6">
            <div
              data-usal="slide-up"
              className={style.tile}
              style={{ minHeight: "clamp(300px, 36vw, 480px)" }}
            >
              <img src={featured.image} alt={featured.title} loading="lazy" />
              <div className={style.tileOverlay} />
              <div className={style.tileContent}>
                <span className={style.tag}>{featured.tag}</span>
                <h3 className="fs-6 fw-medium text-white mb-0">{featured.title}</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3 h-100">
              {items.map((item, index) => (
                <div key={item.title} className="col-12" style={{ height: "calc(50% - 0.375rem)" }}>
                  <div
                    data-usal="slide-up"
                    data-usal-delay={(index + 1) * 150}
                    className={style.tile}
                    style={{ minHeight: "clamp(144px, 17vw, 228px)" }}
                  >
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className={style.tileOverlay} />
                    <div className={style.tileContent}>
                      <span className={style.tag}>{item.tag}</span>
                      <h3 className="fs-6 fw-medium text-white mb-0">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspirations;
