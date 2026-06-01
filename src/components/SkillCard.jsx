import { skillCardBase } from "../lib/styles";

export default function SkillCard({
  title,
  description,
  icons = [],
  className = "",
  style,
}) {
  return (
    <article
      data-slot="skill-card"
      className={`skill-card-hover flex flex-col ${skillCardBase} ${className}`}
      style={style}
    >
      <div className="flex flex-wrap justify-center gap-3">
        {icons.map((src) => (
          <div
            key={src}
            className="flex size-16 items-center justify-center rounded-full bg-black p-2 transition-transform duration-300 hover:scale-110"
          >
            <img src={src} alt="" className="size-10 object-contain" />
          </div>
        ))}
      </div>
      <h3 className="mt-8 mb-3 font-[Momo_Trust_Display] text-xl font-bold md:text-2xl">
        {title}
      </h3>
      <p className="font-[Momo_Trust_Sans] text-sm leading-relaxed text-black/80 md:text-base">
        {description}
      </p>
    </article>
  );
}
