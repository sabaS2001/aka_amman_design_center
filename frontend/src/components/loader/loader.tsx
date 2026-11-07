import style from "./loader.module.scss";

function Loader() {
  return (
    <div className={style.loader} role="status" aria-live="polite" aria-label="Loading">
      <img
        src="/assets/images/logo/logoWhite.webp"
        alt=""
        className={style.logo}
      />
      <div className={style.spinner} />
    </div>
  );
}

export default Loader;
