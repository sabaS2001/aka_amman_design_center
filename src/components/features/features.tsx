import style from "./features.module.scss";

const features = [
  {
    title: "Green Design",
    description:
      "Our approach and use of recyclable products ensure a lower carbon footprint and a sustainable balance.",
    icon: (
      <path d="M12 3c-4 3-7 7-7 11a7 7 0 0 0 14 0c0-4-3-8-7-11Zm0 2.8c2.9 2.4 5 5.5 5 8.2a5 5 0 0 1-10 0c0-2.7 2.1-5.8 5-8.2ZM12 9v9" />
    ),
  },
  {
    title: "Interior Advice",
    description:
      "Our professional advice will help you transform your space with confidence, comfort, and architectural precision.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4.5" />
        <path d="M12 12.5V19M9 19h6M9.5 22h5" />
      </>
    ),
  },
  {
    title: "Collaboration",
    description:
      "We believe in mutual benefit. We are always there for your business meetings, training and practice activities.",
    icon: (
      <>
        <circle cx="12" cy="5" r="1.6" />
        <circle cx="6" cy="14" r="1.6" />
        <circle cx="18" cy="14" r="1.6" />
        <circle cx="12" cy="20" r="1.6" />
        <path d="M12 6.6 6.9 12.6M12 6.6l5.1 6M7.3 15.2l3.6 3M16.7 15.2l-3.6 3" />
      </>
    ),
  },
];

function Features() {
  return (
    <section className="border-bottom bg-body" id={style.features}>
      <div className="container row gy-5 py-5 mx-auto my-auto align-items-center">
        {features.map((feature) => (
          <div key={feature.title} id={style.feature} className="col-sm-4 align-items-center justify-content-center text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary mb-3"
              width="3rem"
              height="3rem"
            >
              {feature.icon}
            </svg>
            <h2 className="fs-4 fw-bold text-white mb-2">{feature.title}</h2>
            <p className="text-body-secondary">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
