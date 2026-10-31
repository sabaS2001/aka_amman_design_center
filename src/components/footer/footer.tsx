import { Link } from "react-router-dom";

const socials = [
  {
    label: "Facebook",
    href: 'https://www.facebook.com/share/1EqnmaMan2/?mibextid=wwXIfr', 
    icon: (
      <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.3.2-.5.5-.5Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aka_design_center",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-body border-top">
      <div className="container py-5 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <Link to="/" className="d-inline-flex align-items-center">
          <img
            src="/assets/images/logo/logoWhite.webp"
            alt="AKA Design Center"
            style={{ width: "130px" }}
          />
        </Link>

        <p className="mb-0 small text-body-secondary order-3 order-sm-2">
          © 2026 AKA Design Center. All rights reserved.
        </p>

        <div className="d-flex align-items-center gap-3 order-2 order-sm-3">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" aria-label={social.label} className="social-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="1.5rem"
                height="1.5rem"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
