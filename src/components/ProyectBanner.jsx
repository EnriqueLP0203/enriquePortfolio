import { useState } from "react";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { pillButton, skillContainer } from "../lib/styles";
import ModalNotRepositorie from "./modalNotRepositorie";
import ModalNotPreview from "./modalNotPreview";

export default function ProyectBanner({
  title,
  description,
  category,
  tech = [],
  image,
  previewUrl,
  githubUrl,
  className = "",
  style,
}) {
  const [unavailableOpen, setUnavailableOpen] = useState(false);
  const [notPreviewOpen, setNotPreviewOpen] = useState(false);
  const hasGithub = githubUrl && githubUrl !== "#";
  const hasPreview = previewUrl && previewUrl !== "#";

  return (
    <article
      data-slot="proyect-banner"
      className={`w-full h-96 rounded-lg shadow-lg border border-gray-200 flex gap-4 overflow-hidden ${className}`}
      style={style}
    >
      <div className="w-xl h-full shrink-0 bg-gray-200">
        {image ? (
          <img
            src={image}
            alt={`Captura de ${title}`}
            className="w-full h-full object-cover object-top"
          />
        ) : null}
      </div>
      <div className="flex min-w-0 flex-col gap-4 p-4">
        <h2 className="font-[Momo_Trust_Display] text-4xl font-bold">{title}</h2>
        {tech.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
            {tech.map((item) => (
              <li key={item} className={skillContainer}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {category ? (
          <p className="text-lg font-medium text-gray-500">{category}</p>
        ) : null}
        {description ? (
          <p className="max-w-5xl font-[Momo_Trust_Sans] leading-relaxed">
            {description}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-2 py-4">
          {hasPreview ? (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={pillButton}
            >
              <Globe className="w-6 h-6 mr-2" aria-hidden="true" />
              View Project
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setNotPreviewOpen(true)}
              className={pillButton}
            >
              <Globe className="w-6 h-6 mr-2" aria-hidden="true" />
              View Project
            </button>
          )}
          {hasGithub ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={pillButton}
            >
              <FaGithub className="w-6 h-6 mr-2" aria-hidden="true" />
              View GitHub
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setUnavailableOpen(true)}
              className={pillButton}
            >
              <FaGithub className="w-6 h-6 mr-2" aria-hidden="true" />
              View GitHub
            </button>
          )}
        </div>
      </div>
      {unavailableOpen && (
        <ModalNotRepositorie onClose={() => setUnavailableOpen(false)} />
      )}
      {notPreviewOpen && (
        <ModalNotPreview onClose={() => setNotPreviewOpen(false)} />
      )}
    </article>
  );
}
