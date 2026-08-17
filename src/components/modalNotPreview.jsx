import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { pillButton, negativeButton } from "../lib/styles";

export default function ModalNotPreview({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="no-preview-title"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 outline-none"
      onClick={onClose}
    >
      <div
        className="flex max-w-md flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2
          id="no-preview-title"
          className="font-[Momo_Trust_Display] text-xl font-bold"
        >
          Este proyecto no tiene una vista previa
        </h2>
        <p className="font-[Momo_Trust_Sans] text-sm leading-relaxed text-black/80">
          Puedes contactar con el desarrollador para obtener más información
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a href="mailto:enriquelopez3242@gmail.com" className={pillButton}>
            Contactar
          </a>
          <button type="button" onClick={onClose} className={negativeButton}>
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
