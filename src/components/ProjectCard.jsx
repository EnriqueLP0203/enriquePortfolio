import { cardShadow, pillButton } from "../lib/styles";

export default function ProjectCard({
  title,
  description,
  image,
  previewUrl,
  githubUrl,
  style,
}) {
  return (
    <article
      data-slot="project-card"
      className="group relative flex flex-col pt-16"
      style={style}
    >
      {/* Mitad superior de la imagen visible sobre el card */}
      <div
        className={`absolute top-0 left-1/2 z-10 h-36 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 overflow-hidden rounded-2xl ${cardShadow} transition-transform duration-500 group-hover:-translate-y-2`}
      >
        <img
          src={image}
          alt={`Vista previa de ${title}`}
          className="h-[200%] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div
        className={`mt-20 flex flex-1 flex-col rounded-2xl bg-sky-500/20 px-6 pb-6 pt-24 ${cardShadow} transition-shadow duration-300 group-hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)]`}
      >
        <h3 className="mb-2 font-[Momo_Trust_Display] text-xl font-bold md:text-2xl">
          {title}
        </h3>
        <p className="mb-6 flex-1 font-[Momo_Trust_Sans] text-sm leading-relaxed text-black/80 md:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={pillButton}
          >
            Preview
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={pillButton}
          >
            View GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
