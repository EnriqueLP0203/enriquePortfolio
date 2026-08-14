import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectGallery({ title, images, onClose }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const total = images.length;

  function goPrev() {
    setIndex((current) => (current - 1 + total) % total);
  }

  function goNext() {
    setIndex((current) => (current + 1) % total);
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + total) % total);
      }
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % total);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose, total]);

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Fotos de ${title}`}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 outline-none"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Foto anterior"
        className="absolute left-4 z-10 flex size-14 items-center justify-center text-5xl leading-none text-white"
        onClick={(event) => {
          event.stopPropagation();
          goPrev();
        }}
      >
        ‹
      </button>

      <img
        src={images[index]}
        alt={`${title}, foto ${index + 1} de ${total}`}
        className="max-w-7xl object-contain shadow-xl rounded-lg"
        onClick={(event) => event.stopPropagation()}
      />

      <button
        type="button"
        aria-label="Foto siguiente"
        className="absolute right-4 z-10 flex size-14 items-center justify-center text-5xl leading-none text-white"
        onClick={(event) => {
          event.stopPropagation();
          goNext();
        }}
      >
        ›
      </button>
    </div>,
    document.body,
  );
}
