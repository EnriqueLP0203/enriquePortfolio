import { useEffect, useRef, useState } from "react";
import { navPill } from "../lib/styles";

const STICKY_TOP = 20; // mt-10

const links = [
  { href: "#about-me", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function StickyNav() {
  const anchorRef = useRef(null);
  const innerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const measure = () => setNavHeight(inner.offsetHeight);
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(inner);

    const onScroll = () => {
      if (!anchorRef.current) return;
      const { top } = anchorRef.current.getBoundingClientRect();
      setIsSticky(top <= STICKY_TOP);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      ref={anchorRef}
      className="mb-10 px-4"
      style={{ minHeight: navHeight || undefined }}
      aria-hidden={false}
    >
      <div
        ref={innerRef}
        className={[
          "z-50 flex w-full justify-center px-8",
          isSticky ? "fixed left-0 right-0" : "relative",
        ].join(" ")}
        style={{ top: isSticky ? STICKY_TOP : undefined }}
      >
        <nav aria-label="Principal">
          <div className={`${navPill} mb-0`}>
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-base font-medium transition-colors hover:text-sky-700 md:text-lg"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
