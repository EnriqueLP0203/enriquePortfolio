import html from "../assets/html.webp";
import js from "../assets/js.webp";
import css from "../assets/css.webp";
import azure from "../assets/azure.webp";
import aws from "../assets/aws.webp";
import vercel from "../assets/vercel.webp";
import tailwind from "../assets/tailwind.webp";
import react from "../assets/react.webp";
import figma from "../assets/figma.webp";
import node from "../assets/node.webp";
import express from "../assets/express.webp";
import native from "../assets/native.webp";
import git from "../assets/git.webp";
import github from "../assets/github.webp";

export const skills = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "React para interfaces modernas, HTML semántico y JavaScript para experiencias interactivas.",
    icons: [html, react, js],
    gridClass: "lg:col-span-4 lg:row-span-2",
  },
  {
    id: "styling",
    title: "Styling & Design",
    description:
      "CSS y Tailwind para layouts responsive y diseño adaptable a cualquier dispositivo.",
    icons: [css, tailwind],
    gridClass: "lg:col-span-4",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Figma para prototipos, sistemas visuales y flujos centrados en el usuario.",
    icons: [figma],
    gridClass: "lg:col-span-4",
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "APIs y lógica de servidor con Node.js y Express para aplicaciones escalables.",
    icons: [node, express],
    gridClass: "lg:col-span-4",
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description:
      "Despliegue y servicios en la nube con Azure, AWS y Vercel.",
    icons: [azure, aws, vercel],
    gridClass: "lg:col-span-4",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Apps multiplataforma con React Native y Expo para iOS y Android.",
    icons: [native],
    gridClass: "lg:col-span-3",
  },
  {
    id: "vcs",
    title: "Version Control & Collaboration",
    description:
      "Git y GitHub para control de versiones y trabajo en equipo.",
    icons: [git, github],
    gridClass: "lg:col-span-5",
  },
];
