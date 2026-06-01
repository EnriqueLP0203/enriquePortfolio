import React from "react";
import avatar from "../assets/avatar.webp";
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

export default function Home() {
  return (
    <div>
      {/* seccion de inicio */}
      <div className="flex grid-cols-3 items-center justify-center p-64">
        <h1 className="text-align-left">I am Enrique Castillo Rodriguez </h1>
        <img
          src={avatar}
          alt="avatar"
          className="w-[459px] h-[459px] rounded-full"
        />
        <p className="text-align-left">
          Desarrollador de software multiplataforma
        </p>
      </div>
      {/* barra de navegacion */}
      <div className="flex justify-center items-center">
        <div className="mb-10 flex justify-center items-center gap-24 w-3xl h-16 bg-gray-200 rounded-full bg-gradient-to-b from-white to-sky-500 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300">
          <a href="#about-me" className="text-xl font-medium">
            About me
          </a>
          <a href="#skills" className="text-xl font-medium">
            Skills
          </a>
          <a href="#proyects" className="text-xl font-medium">
            Proyects
          </a>
          <a href="#contact" className="text-xl font-medium">
            Contact
          </a>
        </div>
      </div>
      {/* seccion de about me */}
      <div id="about-me" className="mb-10">
        <div className="grid grid-cols-2">
          <div className="w-2xl h-96 rounded-20 bg-gray-200"></div>
          <div>
            <h1 className="text-2xl font-bold mb-10">About me</h1>
            <p className="text-base font-normal mb-10">
              Desarrollador Full Stack enfocado en la creación de aplicaciones
              web modernas, escalables y centradas en la experiencia de usuario.
              Actualmente trabajo con tecnologías como React, Node.js, Express,
              PostgreSQL y MongoDB, desarrollando soluciones frontend y backend
              para distintos tipos de proyectos web. Me interesa construir
              sistemas funcionales, bien estructurados y preparados para crecer
              con el tiempo.
            </p>
            <p className="text-base font-normal mb-10">
              Soy autodidacta, adaptable y aprendo rápido, cualidades que me han
              permitido evolucionar constantemente dentro del desarrollo de
              software y explorar nuevas herramientas y tecnologías.Busco seguir
              creciendo profesionalmente colaborando en proyectos reales,
              trabajando con equipos de desarrollo y creando soluciones
              digitales que generen impacto.
            </p>
            <button className="w-48 h-12 bg-gradient-to-b from-white to-sky-500 text-black text-base font-medium px-4 py-2 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300">
              Descargar CV
            </button>
          </div>
        </div>
      </div>
      {/* seccion de skills */}
      <div className="mb-10 mx-2">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold mb-10 w-2xl text-center">SKILLS Y HERRAMIENTAS QUE  SIEMPRE USO</h1>
        </div>
        <div className="grid grid-cols-3">
          {/* primer columna */}
          <div className="flex flex-col gap-4">
            {/* frontend development */}
            <div className="w-lg h-80 p-4 rounded-2xl bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white">
              <div className="flex justify-center items-center gap-4">
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={html} alt="html" className="size-12 object-cover" />
                </div>
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={react} alt="react" className="w-auto h-auto object-cover" />
                </div>
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={js} alt="js" className="size-10 object-cover" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-4 mt-12 font-[Momo Trust Display] ">Frontend Development</p>
              <p className="text-base font-normal mb-10 font-[Momo Trust Sans]">Uso de react para la creacion de proyectos, asi como manejo de lenguaje de etiquetado HTML y lenguaje de programacion JS</p>
            </div>
            {/* Cloud & Backend Development */}
            <div className="w-lg h-80 p-4 rounded-2xl bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white">
              <div className="flex justify-center items-center gap-4">
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={azure} alt="cloud" className="size-12 object-cover" />
                </div>
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={aws} alt="backend" className="size-10 object-cover" />
                </div>
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={vercel} alt="backend" className="w-auto h-auto object-cover" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-4 mt-12 font-[Momo Trust Display] ">Cloud & Backend Development</p>
              <p className="text-base font-normal mb-10 font-[Momo Trust Sans]">Uso de react para la creacion de proyectos, asi como manejo de lenguaje de etiquetado HTML y lenguaje de programacion JS</p>
            </div>
          </div>
          {/* segunda columna */}
          <div className="flex flex-col gap-4">
            {/* Styling & Design */}
            <div className="w-72 h-80 p-4 rounded-2xl bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white">
              <div className="flex justify-center items-center gap-4">
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={css} alt="css" className="size-12 object-cover" />
                </div>
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={tailwind} alt="tailwind" className="w-auto h-auto object-cover" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-4 mt-12 font-[Momo Trust Display] ">Styling & Design</p>
              <p className="text-base font-normal mb-10 font-[Momo Trust Sans]">Uso de etiquetas CSS y Tailwind CSS para poder construir los proyectos y mantener un diseño responsive y adaptativo a cualquier dispositivo.</p>
            </div>
            {/* UI/UX Design */}
            <div className="w-72 p-4 rounded-2xl bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white">
              <div className="flex justify-center items-center gap-4">
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={figma} alt="figma" className="w-auto h-auto object-cover" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-4 mt-12 font-[Momo Trust Display] ">UI/UX Design</p>
              <p className="text-base font-normal mb-2 font-[Momo Trust Sans]">Uso de Figma para poder construir los proyectos y mantener un diseño responsive y adaptativo a cualquier dispositivo.</p>
            </div>
          </div>
          {/* tercera columna */}
          <div className="flex flex-col gap-4">
            {/* backend development */}
            <div className="w-lg h-80 p-4 rounded-2xl bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white">
              <div className="flex justify-center items-center gap-4">
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={node} alt="node" className="w-auto h-auto object-cover" />
                </div>
                <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                  <img src={express} alt="express" className="w-auto h-auto object-cover" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-4 mt-12 font-[Momo Trust Display] ">Backend Development</p>
              <p className="text-base font-normal mb-10 font-[Momo Trust Sans]">Developing robust server-side logic and APIs to power dynamic and scalable web applications.</p>
            </div>

            <div className="grid grid-cols-2">
              {/* mobile app development */}
              <div className="w-64 h-80 p-4 rounded-2xl bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white">
                <div className="flex justify-center items-center gap-4">
                  <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                    <img src={native} alt="native" className="w-auto h-auto object-cover" />
                  </div>
                </div>
                <p className="text-2xl font-bold mb-4 mt-12 font-[Momo Trust Display] ">Mobile App Development</p>
                <p className="text-base font-normal mb-10 font-[Momo Trust Sans]">Developing mobile applications for iOS and Android platforms using React Native and Expo.</p>
              </div>
              {/* version control & collaboration */}
              <div className="w-64 h-80 p-4 rounded-2xl bg-sky-500/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white">
                <div className="flex justify-center items-center gap-4">
                  <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                    <img src={git} alt="git" className="w-auto h-auto object-cover" />
                  </div>
                  <div className="size-20 p-2 rounded-full bg-black flex justify-center items-center">
                    <img src={github} alt="github" className="w-auto h-auto object-cover" />
                  </div>
                </div>
                <p className="text-2xl font-bold mb-4 mt-12 font-[Momo Trust Display] ">Version Control & Collaboration</p>
                <p className="text-base font-normal mb-10 font-[Momo Trust Sans]">Using Git and GitHub for version control and collaboration on projects.</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
      {/* seccion de proyectos */}
      {/* seccion de contacto */}
    </div>
  );
}
