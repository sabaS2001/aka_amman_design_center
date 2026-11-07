import { useState } from "react";
import { Link } from "react-router-dom";
import { USALProvider } from "@usal/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { materialSeedData } from "../../data/kronospan-materials.seed";
import style from "./inspirations.module.scss";

type Material = {
  name: string;
  tags: string;
  swatch: string;
};

function getMaterialDisplay(slug: string, index: number, fallback: Material) {
  const seed = materialSeedData[slug]?.[index];
  const code = seed?.decorCode.trim();
  const name = seed?.decorName.trim();
  const title = code || name ? [code, name].filter(Boolean).join(" ") : fallback.name;
  const url = seed?.productUrl.trim();
  const image = seed?.image.trim();
  return {
    title,
    href: url || "/booking",
    external: Boolean(url),
    image: image || undefined,
  };
}

// Renders every hardcoded material, plus any extra materials added to the
// seed file beyond the original count (so adding a row to the seed sheet
// is enough — no need to also edit the combinations array above).
function getMaterialsToRender(combination: Combination): Material[] {
  const seedList = materialSeedData[combination.slug] ?? [];
  const count = Math.max(combination.materials.length, seedList.length);
  return Array.from({ length: count }, (_, i) => {
    if (combination.materials[i]) return combination.materials[i];
    const seed = seedList[i];
    return {
      name: seed?.decorName || seed?.placeholderName || "New Material",
      tags: "",
      swatch: "#8A8A8A",
    };
  });
}

function MaterialRow({
  slug,
  index,
  material,
}: {
  slug: string;
  index: number;
  material: Material;
}) {
  const display = getMaterialDisplay(slug, index, material);
  const content = (
    <>
      {display.image ? (
        <img
          src={display.image}
          alt={display.title}
          className={style.swatch}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span className={style.swatch} style={{ background: material.swatch }} />
      )}
      <div className="flex-grow-1">
        <p className="mb-0 fw-semibold text-white">{display.title}</p>
        {material.tags && (
          <p className="mb-0 small text-body-secondary">{material.tags}</p>
        )}
      </div>
      <span className={style.materialRowArrow}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="0.9rem" height="0.9rem">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );

  if (display.external) {
    return (
      <a
        href={display.href}
        target="_blank"
        rel="noreferrer"
        className={`d-flex align-items-center gap-3 text-decoration-none ${style.materialRow}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={display.href}
      className={`d-flex align-items-center gap-3 text-decoration-none ${style.materialRow}`}
    >
      {content}
    </Link>
  );
}

type Combination = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  materials: Material[];
};

export const combinations: Combination[] = [
  {
    slug: "warm-minimalism",
    title: "Warm Minimalism",
    tag: "This Month's Edit",
    description:
      "A quiet palette built around natural oak and soft, chalky whites, lifted by brushed brass hardware. Grain stays visible everywhere so the wood never feels manufactured, while the brass keeps the combination from reading flat. Suited to living areas and reception spaces that want to feel calm without feeling empty.",
    image: "/assets/images/moodboards/moodboard-warm-minimalism.jpg",
    materials: [
      { name: "Natural Oak Veneer", tags: "Flooring; Wall Panels", swatch: "#C9A063" },
      { name: "Soft Ivory Matte", tags: "Cabinetry; Doors", swatch: "#EDE6DC" },
      { name: "Brushed Brass", tags: "Hardware; Trims", swatch: "#B08D57" },
      { name: "Smoked Glass", tags: "Partitions; Shelving", swatch: "#6B6B63" },
    ],
  },
  {
    slug: "urban-contrast",
    title: "Urban Contrast",
    tag: "Editorial Pick",
    description:
      "Charcoal concrete-look surfaces meet dark walnut and matte black steel for a combination built for loft-style interiors. A single warm terracotta accent keeps the palette from turning cold, giving architects a grounded, high-contrast base to design around.",
    image: "/assets/images/moodboards/moodboard-urban-contrast.jpg",
    materials: [
      { name: "Charcoal Concrete", tags: "Worktops; Flooring", swatch: "#3A3A38" },
      { name: "Dark Walnut Grain", tags: "Cladding; Furniture", swatch: "#4B382A" },
      { name: "Matte Black Steel", tags: "Frames; Hardware", swatch: "#1C1C1A" },
      { name: "Warm Terracotta", tags: "Accent Panels", swatch: "#B35C3A" },
    ],
  },
  {
    slug: "coastal-calm",
    title: "Coastal Calm",
    tag: "Residential Favorite",
    description:
      "Bleached ash and sea-foam quartz bring a bright, breathable feel suited to bedrooms and bathrooms. Driftwood grey and natural linen round out the palette, keeping every surface soft underfoot and easy to live with.",
    image: "/assets/images/moodboards/moodboard-coastal-calm.jpg",
    materials: [
      { name: "Bleached Ash", tags: "Flooring; Doors", swatch: "#D8CFBF" },
      { name: "Sea Foam Quartz", tags: "Worktops; Splashbacks", swatch: "#AFC4BA" },
      { name: "Driftwood Grey", tags: "Wall Panels", swatch: "#9C9A92" },
      { name: "Natural Linen", tags: "Soft Furnishings", swatch: "#E7DFCF" },
    ],
  },
  {
    slug: "desert-stone",
    title: "Desert Stone",
    tag: "Amman Showroom Pick",
    description:
      "A palette drawn from the stone and sand tones around Amman, pairing sandstone beige with rust copper and deep olive. Travertine-inspired texture adds movement without competing with the warmer accents, making it a natural fit for both residential and hospitality projects.",
    image: "/assets/images/moodboards/moodboard-desert-stone.jpg",
    materials: [
      { name: "Sandstone Beige", tags: "Flooring; Cladding", swatch: "#D6BD98" },
      { name: "Rust Copper", tags: "Accent Hardware", swatch: "#A15C32" },
      { name: "Taupe Travertine", tags: "Worktops; Feature Walls", swatch: "#B9AE9C" },
      { name: "Deep Olive", tags: "Cabinetry", swatch: "#5B5E3F" },
    ],
  },
  {
    slug: "modern-heritage",
    title: "Modern Heritage",
    tag: "Architect's Choice",
    description:
      "Aged bronze and ebony walnut give this combination weight and formality, balanced by the lightness of cream marble and local limestone. A palette built for spaces that want to feel established from day one, such as offices, lobbies, and formal living rooms.",
    image: "/assets/images/moodboards/moodboard-modern-heritage.jpg",
    materials: [
      { name: "Aged Bronze", tags: "Hardware; Trims", swatch: "#7C6A4E" },
      { name: "Jordanian Limestone", tags: "Flooring; Cladding", swatch: "#CFC6B4" },
      { name: "Ebony Walnut", tags: "Furniture; Doors", swatch: "#2E2117" },
      { name: "Cream Marble", tags: "Worktops", swatch: "#E8E2D6" },
    ],
  },
  {
    slug: "dusty-rose",
    title: "Dusty Rose",
    tag: "Soft Contemporary",
    description:
      "A softer, more playful palette that pairs warm oak paneling with dusty mauve and blush accents, grounded by polished white marble. Works well in boutique retail spaces, powder rooms, or any interior that wants a touch of colour without losing its contemporary edge.",
    image: "/assets/images/moodboards/moodboard-dusty-rose.jpg",
    materials: [
      { name: "Warm Oak Paneling", tags: "Wall Panels; Furniture", swatch: "#C9A878" },
      { name: "Dusty Mauve Laminate", tags: "Cabinetry; Accent Walls", swatch: "#C08A8E" },
      { name: "Blush Matte Panel", tags: "Doors; Trims", swatch: "#E6B8A2" },
      { name: "Polished White Marble", tags: "Worktops; Tabletops", swatch: "#EDEAE4" },
    ],
  },
  {
    slug: "quiet-contrast",
    title: "Quiet Contrast",
    tag: "Understated Luxury",
    description:
      "A restrained pairing of warm wood grain against dark veined marble and soft taupe stone, built for interiors that favour quiet material tension over bold colour. A dependable base palette for studies, private offices, and considered dining spaces.",
    image: "/assets/images/moodboards/moodboard-quiet-contrast.jpg",
    materials: [
      { name: "Warm Walnut Grain", tags: "Flooring; Furniture", swatch: "#8A6A4A" },
      { name: "Dark Veined Marble", tags: "Worktops; Feature Walls", swatch: "#3B3833" },
      { name: "Soft Taupe Stone", tags: "Flooring; Cladding", swatch: "#B7AC9D" },
      { name: "Matte Graphite", tags: "Hardware; Trims", swatch: "#4A4844" },
    ],
  },
  {
    slug: "midnight-jewel",
    title: "Midnight Jewel",
    tag: "Statement Palette",
    description:
      "A rich, jewel-toned combination pairing deep burgundy and near-black surfaces with warm wood grain and brushed gold hardware. Suited to feature walls, bar areas, and any space designed to make an entrance.",
    image: "/assets/images/moodboards/moodboard-midnight-jewel.jpg",
    materials: [
      { name: "Warm Wood Grain", tags: "Wall Panels; Furniture", swatch: "#A9794F" },
      { name: "Deep Burgundy Lacquer", tags: "Cabinetry; Accent Panels", swatch: "#5C2432" },
      { name: "Near-Black Matte", tags: "Worktops; Feature Walls", swatch: "#1C1E24" },
      { name: "Brushed Gold Metal", tags: "Hardware; Trims", swatch: "#B89A5C" },
    ],
  },
  {
    slug: "bold-statement",
    title: "Bold Statement",
    tag: "Editorial Pick",
    description:
      "High-gloss black and speckled terrazzo meet brushed bronze and a bright red accent for a combination built to be noticed. Ideal for reception desks, retail counters, and feature walls that need to anchor a room.",
    image: "/assets/images/moodboards/moodboard-bold-statement.jpg",
    materials: [
      { name: "High-Gloss Black Lacquer", tags: "Cabinetry; Feature Panels", swatch: "#141414" },
      { name: "Speckled Terrazzo", tags: "Worktops; Flooring", swatch: "#232323" },
      { name: "Brushed Bronze Metal", tags: "Hardware; Trims", swatch: "#9C7A4A" },
      { name: "Signal Red Lacquer", tags: "Accent Panels", swatch: "#C32B2B" },
    ],
  },
  {
    slug: "warm-radiance",
    title: "Warm Radiance",
    tag: "Residential Favorite",
    description:
      "A warm, inviting pairing of rich red lacquer with natural oak and soft white marble. A confident accent colour balanced by two quiet, neutral partners, suited to dining spaces and entryways that want to feel welcoming.",
    image: "/assets/images/moodboards/moodboard-warm-radiance.jpg",
    materials: [
      { name: "Rich Red Lacquer", tags: "Accent Panels; Doors", swatch: "#C23B2E" },
      { name: "Natural Oak Grain", tags: "Flooring; Wall Panels", swatch: "#B88A57" },
      { name: "Soft White Marble", tags: "Worktops; Tabletops", swatch: "#EFEBE4" },
      { name: "Brushed Silver Metal", tags: "Hardware; Trims", swatch: "#B8BAC0" },
    ],
  },
];

function Inspirations() {
  const featured = combinations[0];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? combinations[activeIndex] : null;

  function select(index: number) {
    setActiveIndex(index);
    requestAnimationFrame(() => {
      document
        .getElementById(style.details)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <USALProvider>
      <div className="d-flex flex-column min-vh-100 bg-body">
        <Navbar active="Inspirations" />
        <main className="flex-grow-1">
          {/* Hero */}
          <section
            className="position-relative overflow-hidden border-bottom"
            style={{ minHeight: "22rem" }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: "url('/assets/images/gallery/showroom-kronodesign-pillar.jpg')",
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
                Explore Our <span className="text-gold-dark">Combinations</span>
              </h1>
              <p
                data-usal="fade-r delay-150"
                className="mt-3 text-body-secondary"
                style={{ maxWidth: "34rem" }}
              >
                Browse the palettes our specialists put together, pairing
                flooring, worktop, and panel finishes the way they'd actually
                sit together in a finished room.
              </p>
            </div>
          </section>

          {/* Combination of the Month */}
          <section className="border-bottom bg-body">
            <div className="container py-5">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6" data-usal="fade-r">
                  <div className={style.featuredImageWrap}>
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className={style.featuredImage}
                    />
                  </div>
                </div>

                <div className="col-lg-6" data-usal="fade-l">
                  <p className="eyebrow text-primary mb-2">
                    Combination of the Month
                  </p>
                  <h2 className="fs-1 fw-medium text-white">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-body-secondary">
                    {featured.description}
                  </p>

                  <p className="mt-4 mb-3 small fw-semibold tracking-widest text-white text-uppercase">
                    Used Materials
                  </p>
                  <div className="d-flex flex-column gap-3">
                    {getMaterialsToRender(featured).map((material, index) => (
                      <MaterialRow
                        key={material.name + index}
                        slug={featured.slug}
                        index={index}
                        material={material}
                      />
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-4 mt-4">
                    <Link
                      to={`/inspirations/${featured.slug}`}
                      className="d-inline-flex align-items-center gap-2 small fw-semibold tracking-widest text-primary text-uppercase text-decoration-none"
                    >
                      View Full Details
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="1rem" height="1rem">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                    <a
                      href={`#${style.archive}`}
                      className="d-inline-flex align-items-center gap-2 small fw-semibold tracking-widest text-body-secondary text-uppercase text-decoration-none"
                    >
                      See All Combinations
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="1rem" height="1rem">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Archive grid */}
          <section id={style.archive} className="bg-body border-bottom">
            <div className="container py-5">
              <h2 className="fs-5 fw-medium text-white mb-4">
                All Combinations
              </h2>
              <div className="row g-3">
                {combinations.map((combination, index) => (
                  <div key={combination.title} className="col-6 col-lg-4">
                    <button
                      type="button"
                      data-usal="slide-up"
                      data-usal-delay={index * 100}
                      onClick={() => select(index)}
                      aria-pressed={index === activeIndex}
                      className={`${style.archiveItem} ${
                        index === activeIndex ? style.archiveItemActive : ""
                      } w-100`}
                    >
                      <img
                        src={combination.image}
                        alt={combination.title}
                        loading="lazy"
                      />
                      <div className={style.archiveLabel}>
                        <h3 className="fs-6 fw-medium text-white mb-0">
                          {combination.title}
                        </h3>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Details */}
          {active && (
            <section id={style.details} className="border-bottom bg-body">
              <div className="container py-5">
                <div className="row g-5 align-items-start">
                  <div className="col-lg-6" data-usal="fade-r">
                    <div className={style.featuredImageWrap}>
                      <img
                        src={active.image}
                        alt={active.title}
                        className={style.featuredImage}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6" data-usal="fade-l">
                    <p className="eyebrow text-primary mb-2">{active.tag}</p>
                    <h2 className="fs-1 fw-medium text-white">
                      {active.title}
                    </h2>
                    <p className="mt-3 text-body-secondary">
                      {active.description}
                    </p>

                    <p className="mt-4 mb-3 small fw-semibold tracking-widest text-white text-uppercase">
                      Used Materials
                    </p>
                    <div className="d-flex flex-column gap-3">
                      {getMaterialsToRender(active).map((material, index) => (
                        <MaterialRow
                          key={material.name + index}
                          slug={active.slug}
                          index={index}
                          material={material}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-body" id={style.fourthSection}>
            <div className="container py-5">
              <div className="card bg-body-secondary border-0 px-4 py-5 text-center">
                <h2 data-usal="fade-r" className="text-white">
                  Bring Your <span className="text-gold-dark">Vision</span> to
                  Life
                </h2>
                <p
                  data-usal="fade-r"
                  className="mx-auto mt-3 text-body-secondary"
                  style={{ maxWidth: "32rem" }}
                >
                  Schedule a private walkthrough of our material gallery and
                  speak with our surfacing specialists about your next
                  project.
                </p>
                <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
                  <a
                    href="/booking"
                    className="btn btn-primary text-uppercase small fw-semibold"
                  >
                    Schedule a Visit
                  </a>
                  <a
                    href="https://maps.app.goo.gl/XUDFgy6WXNviQsQQA"
                    className="btn btn-outline-cream text-uppercase small fw-semibold"
                  >
                    Visit Showroom
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </USALProvider>
  );
}

export default Inspirations;
