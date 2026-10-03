import { useEffect, useRef } from "react";
import style from "./watermark.module.scss";

const MAX_OPACITY = 0.055;
const SCROLL_RANGE = 800;

function Watermark() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    function apply() {
      const progress = Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE));
      const el = ref.current;
      if (el) {
        el.style.opacity = String(progress * MAX_OPACITY);
        el.style.filter = `blur(${(1 - progress) * 10}px)`;
        el.style.transform = `scale(${0.8 + progress * 0.2})`;
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className={style.watermark} aria-hidden="true" />;
}

export default Watermark;
