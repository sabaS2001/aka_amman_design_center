const socials = [
  {
    label: "Facebook",
    icon: (
      <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.3.2-.5.5-.5Z" />
    ),
  },
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8.5 10.5v5.5M8.5 8.2v.1M12 16v-3.2c0-1.2.8-2.3 2.2-2.3s1.8 1 1.8 2.3V16" />
      </>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-body border-top">
      <div className="container py-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <span className="fs-5 fw-semibold text-white">AKA Design Center</span>

        <p className="mb-0 small text-body-secondary order-3 order-sm-2">
          © 2026 AKA Design Center. All rights reserved.
        </p>

        <div className="d-flex align-items-center gap-3 order-2 order-sm-3">
          {socials.map((social) => (
            <a key={social.label} href="#" aria-label={social.label} className="social-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="1rem"
                height="1rem"
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
