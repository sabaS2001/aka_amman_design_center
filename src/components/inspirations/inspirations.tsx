import { Link } from "react-router-dom";

const items = [
  {
    tag: "Premium Oak",
    title: "Natural Rockford Hickory",
    gradient:
      "linear-gradient(160deg,#8a6641 0%,#6b4c2e 45%,#4a331f 75%,#2b1c11 100%)",
  },
  {
    tag: "Acrylic Gloss",
    title: "Vibrant Palette Selection",
    gradient:
      "linear-gradient(160deg,#d9a441 0%,#b5793a 40%,#7a4a2c 70%,#3a2417 100%)",
  },
  {
    tag: "Deep Series",
    title: "Architectural Walnut",
    gradient:
      "linear-gradient(160deg,#5c4330 0%,#3f2e21 45%,#271a12 75%,#120c08 100%)",
  },
];

function Inspirations() {
  return (
    <section id="inspirations" className="border-bottom bg-body">
      <div className="container py-5">
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3">
          <div>
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

        <div className="row g-4 mt-2">
          {items.map((item) => (
            <div key={item.title} className="col-sm-4">
              <div
                className="rounded"
                style={{ background: item.gradient, aspectRatio: "4 / 5" }}
              />
              <p className="mt-3 mb-1 text-primary text-uppercase tracking-widest small fw-semibold">
                {item.tag}
              </p>
              <h3 className="fs-6 fw-medium text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Inspirations;
