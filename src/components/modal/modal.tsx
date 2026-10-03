import { useEffect } from "react";
import style from "./modal.module.scss";

export type ModalStatus = "success" | "error";

interface ModalProps {
  open: boolean;
  status: ModalStatus;
  title: string;
  message: string;
  onClose: () => void;
}

function Modal({ open, status, title, message, onClose }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={style.overlay}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={style.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={status === "success" ? style.iconSuccess : style.iconError}>
          {status === "success" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="1.75rem" height="1.75rem">
              <circle cx="12" cy="12" r="9" />
              <path d="m8.5 12 2.3 2.3L15.5 9.5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="1.75rem" height="1.75rem">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7.5v6" />
              <path d="M12 16.5h.01" />
            </svg>
          )}
        </div>

        <h3 id="modal-title" className="fs-5 fw-medium text-white mt-3 mb-2">
          {title}
        </h3>
        <p className="mb-0 text-body-secondary">{message}</p>

        <button
          type="button"
          onClick={onClose}
          className={
            status === "success"
              ? "btn btn-primary w-100 mt-4 text-uppercase tracking-widest small fw-semibold"
              : "btn btn-outline-cream w-100 mt-4 text-uppercase tracking-widest small fw-semibold"
          }
        >
          {status === "success" ? "Done" : "Try Again"}
        </button>
      </div>
    </div>
  );
}

export default Modal;
