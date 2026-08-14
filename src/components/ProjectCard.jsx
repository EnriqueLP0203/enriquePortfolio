import { useState } from "react";
import { pillButton } from "../lib/styles";
import ProjectGallery from "./ProjectGallery";
import ModalNotRepositorie from "./modalNotRepositorie";

export default function ProjectCard({
  title,
  description,
  image,
  images = [],
  previewUrl,
  githubUrl,
  style,
  tech,
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [unavailableOpen, setUnavailableOpen] = useState(false);
  const galleryImages = images.length > 0 ? images : image ? [image] : [];
  const cover = galleryImages[0];
  const hasGallery = galleryImages.length > 1;
  const hasGithub = githubUrl && githubUrl !== "#";

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300"
      style={style}
    >
      <div className="relative">
        <img
          src={cover}
          alt={title}
          className="aspect-video w-full object-cover object-top"
        />
        {hasGallery && (
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className={`${pillButton} absolute right-3 bottom-3 z-10 px-4 py-1.5 text-sm`}
          >
            Ver más
          </button>
        )}
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-sm text-black rounded-full bg-blue-500/20 px-4 py-2 hover:bg-blue-500/40 hover:scale-105 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
        <h3 className="font-[Momo_Trust_Display] text-xl font-bold">{title}</h3>
        <p className="font-[Momo_Trust_Sans] text-sm leading-relaxed text-black/80">
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
          {hasGithub ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={pillButton}
            >
              View GitHub
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setUnavailableOpen(true)}
              className={pillButton}
            >
              View GitHub
            </button>
          )}
        </div>
      </div>
      {galleryOpen && (
        <ProjectGallery
          title={title}
          images={galleryImages}
          onClose={() => setGalleryOpen(false)}
        />
      )}
      {unavailableOpen && (
        <ModalNotRepositorie onClose={() => setUnavailableOpen(false)} />
      )}
    </div>
  );
}
