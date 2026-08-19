import comeeva1 from "../assets/Proyects/Comeeva/comeeva1.png";
import comeeva2 from "../assets/Proyects/Comeeva/comeeva2.png";
import comeeva3 from "../assets/Proyects/Comeeva/comeeva3.png";
import comeeva4 from "../assets/Proyects/Comeeva/comeeva4.png";
import orion1 from "../assets/Proyects/Orion/orion1.png";
import orion2 from "../assets/Proyects/Orion/orion2.jpeg";
import orion3 from "../assets/Proyects/Orion/orion3.jpeg";
import orion4 from "../assets/Proyects/Orion/orion4.jpeg";
import travelLogic1 from "../assets/Proyects/travel-logic/travel-logic1.png";
import travelLogic2 from "../assets/Proyects/travel-logic/travel-logic2.png";
import travelLogic3 from "../assets/Proyects/travel-logic/travel-logic3.png";
import travelLogic4 from "../assets/Proyects/travel-logic/travel-logic4.png";
import travelLogic5 from "../assets/Proyects/travel-logic/travel-logic5.png";

/** Añade capturas extra en `images` para activar el carrusel de Ver más */
export const projects = [
  {
    id: "comeeva",
    title: "COME-EVA",
    category: "Landing Page",
    tech: ["React", "Vite", "Node.js", "Tailwind", "JavaScript"],
    description:
      "COME-EVA es un negocio de la ciudad de cancun, que buscaba renovar su pagina web, añadiendo un nuevo diseño, un catalogo de los productos que ofrece y un cotizador con el que los clientes podian obtener un estimado de los costos de cada servicio que esta empresa ofrece",
    image: comeeva1,
    images: [comeeva1, comeeva2, comeeva3, comeeva4],
    previewUrl: "https://comeeva.com",
    githubUrl: "https://github.com/EnriqueLP0203/comeeva",
    isMainProject: true,
  },
  {
    id: "travel-logic",
    title: "Travel Logic",
    category: "Dashboard",
    tech: ["PHP", "MySQL", "JavaScript", "Laravel", "Blade", "Tailwind"],
    description:
      "Travel Logic es un negocio que busca conectar clientes con diversas agencias de viajes, por lo que solicitaron una pagina web para atraer agencias para que trabajen con ellos, y que se mostrara la informacion de todos los hoteles con los que trabajan. Este proyecto sirve como landing page y como dashboard para administrar las solicitudes de los clientes interesados en trabajar con ellos.",
    image: travelLogic1,
    images: [travelLogic1, travelLogic2, travelLogic3, travelLogic4, travelLogic5],
    previewUrl: "#",
    githubUrl: "#",
    isMainProject: true,
  },
  {
    id: "orion",
    title: "ORION",
    category: "App web",
    tech: [
      "React",
      "Vite",
      "Tailwind",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    description:
      "ORION nace como un proyecto universitario, el cual busca ofrecerse como una aplicacion web para la gestion de negocios deportivos, la cual permite gestionar clientes, planes, ventas y personal.",
    image: orion1,
    images: [orion1, orion2, orion3, orion4],
    previewUrl: "#",
    githubUrl: "#",
    isMainProject: true,
  },
  {
    id: "nexusimpact",
    title: "Nexus Impact",
    category: "Portfolio",
    tech: ["React", "Vite", "Tailwind", "JavaScript", "PostgreSQL", "API-REST", "Node.js", "Express"],
    description: "Esta pagina sirve como proyecto escolar, en donde se aplico la implementacion de una API publica, en este caso, con la informacion de un videojuego. En esta pagina se pueden encontrar elementos como cards, filtros de busqueda y buzon de sugerencias.",
    image: [],
    images: [],
    previewUrl: "#",
    githubUrl: "#",
    isMainProject: false,
  },
];
