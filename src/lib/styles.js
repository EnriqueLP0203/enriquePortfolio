/** Clases compartidas para mantener redondeo y sombras consistentes */
export const cardShadow =
  "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white";

export const skillCardBase = `rounded-2xl bg-sky-500/20 p-5 ${cardShadow}`;

export const pillButton =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-b from-white to-sky-500 px-5 py-2.5 text-base font-medium text-black border border-stone-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 active:scale-95";

export const navPill =
  "flex flex-wrap justify-center items-center gap-8 md:gap-24 px-12 py-3 max-w-3xl bg-gradient-to-b from-white to-sky-500 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300";

export const inputField =
  "w-full rounded-2xl border border-white bg-sky-500/10 px-4 py-3 text-base font-[Momo_Trust_Sans] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline-none transition focus:ring-2 focus:ring-sky-400 focus:bg-white/80";

export const negativeButton =
  "bg-gradient-to-b from-white to-red-500 border border-stone-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-black text-base font-medium px-4 py-2 rounded-full";

export const skillContainer = "text-sm text-white font-medium rounded-full bg-sky-500 px-4 py-2 hover:bg-sky-600 hover:scale-105 transition-all duration-300";