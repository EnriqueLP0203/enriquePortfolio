import comeeva1 from "../assets/Proyects/Comeeva/comeeva1.png";
import comeeva2 from "../assets/Proyects/Comeeva/comeeva2.png";
import comeeva3 from "../assets/Proyects/Comeeva/comeeva3.png";
import comeeva4 from "../assets/Proyects/Comeeva/comeeva4.png";

/** Añade capturas extra en `images` para activar el carrusel de Ver más */
export const projects = [
  {
    id: "comeeva",
    title: "COME-EVA",
    tech: ["React", "Vite", "Tailwind", "JavaScript"],
    description:
      "Sitio web para la empresa COME-EVA, con catalogo de productos y cotizador de servicios online",
    image: comeeva1,
    images: [comeeva1, comeeva2, comeeva3, comeeva4],
    previewUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "travel-logic",
    title: "Travel Logic",
    tech: ["PHP", "MySQL", "JavaScript", "Laravel", "Blade", "Tailwind"],
    description:
      "Pagina web para la empresa Travel Logic dirigida a agencias de viajes, con dashboard para administrar solicitudes de clientes interesados",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ],
    previewUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "orion",
    title: "ORION",
    tech: ["React", "Vite", "Tailwind", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    description:
      "Aplicacion web enfocada a la gestion de negocios deportivos para gestionar clientes, planes, ventas y personal",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    previewUrl: "#",
    githubUrl: "https://github.com",
  },
];
