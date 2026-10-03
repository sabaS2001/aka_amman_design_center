import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./navbar.module.scss";

const links = [
  { label: "About", href: "/about" },
  { label: "Inspirations", href: "/inspirations" },
  { label: "Showroom", href: "/showroom" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

function Navbar({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky-top">
      <div className="navbar-blur border-bottom">
      <div className="container d-flex align-items-center gx-1 justify-content-between py-3">
        <Link to="/" className="fs-5 fw-semibold text-decoration-none text-white text-truncate" id={style.brand}>
          <img src="/assets/images/logo/logoWhite.webp" alt="Amman Design Center Logo"/>
        </Link>

        <nav className="d-none d-lg-flex align-items-center gap-4" id={style.navBar}>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              id={style.navLink}
              className={
                link.label === active
                  ? "border-bottom border-primary pb-1 text-primary tracking-widest text-decoration-none small fw-medium"
                  : "tracking-widest text-decoration-none small fw-medium text-white-50 link-hover-gold"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="d-flex align-items-center gap-3 flex-shrink-0">
          <Link
            to="/booking"
            className="btn btn-primary text-uppercase text-nowrap d-none d-lg-inline-block"
            id={style.bookConsultation}
          >
            Book Consultation
          </Link>

          <button
            type="button"
            className="d-lg-none btn p-0 border-0 bg-transparent"
            id={style.menuToggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={style.mobileMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              width="1.5rem"
              height="1.5rem"
              className="text-white"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      </div>

      {menuOpen && (
        <nav
          id={style.mobileMenu}
          className="d-lg-none d-flex flex-column"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={
                link.label === active
                  ? "text-primary text-uppercase tracking-widest text-decoration-none fw-medium py-3 border-bottom"
                  : "text-white-50 text-uppercase tracking-widest text-decoration-none fw-medium py-3 border-bottom"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="btn btn-primary text-uppercase text-nowrap w-100 mt-4"
          >
            Book Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
