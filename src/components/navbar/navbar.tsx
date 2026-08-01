import { Link } from "react-router-dom";
import style from "./navbar.module.scss";

const links = [
  { label: "Inspirations", href: "/inspirations" },
  { label: "Showroom", href: "/showroom" },
  { label: "Events", href: "/events" },
  { label: "Materials", href: "/inspirations" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

function Navbar({ active }: { active?: string }) {
  return (
    <header className="navbar-blur border-bottom sticky-top">
      <div className="container d-flex align-items-center gx-1 justify-content-between py-3">
        <Link to="/" className="fs-5 fw-semibold text-decoration-none text-white">
          AKA <span className="fw-light text-body-secondary">Design Center</span>
        </Link>

        <nav className="d-none d-md-flex align-items-center gap-4" id={style.navBar}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              id={style.navLink}
              className={
                link.label === active
                  ? "border-bottom border-primary pb-1 text-primary text-uppercase tracking-widest text-decoration-none small fw-medium"
                  : "text-uppercase tracking-widest text-decoration-none small fw-medium text-white-50 link-hover-gold"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/booking" className="btn btn-primary text-uppercase text-nowrap" id={style.bookConsultation}>
          Book Consultation
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
