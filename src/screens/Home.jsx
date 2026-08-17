import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.webp";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import StickyNav from "../components/StickyNav";
import { cardShadow, pillButton } from "../lib/styles";

const stagger = (index) => ({
  animationDelay: `${index * 0.5}s`,
});

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <header className="grid min-h-[70vh] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-3 lg:px-16 lg:py-32">
        <h1
          className="animate-fade-in-up text-right text-3xl lg:text-4xl"
          style={stagger(0)}
        >
          I am Enrique Castillo Rodriguez
        </h1>
        <div
          className="animate-fade-in flex justify-center"
          style={stagger(1)}
        >
          <img
            src={avatar}
            alt="Enrique Castillo Rodriguez"
            className="animate-float size-56 rounded-full object-cover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ring-4 ring-white/80 md:size-72 lg:size-[459px]"
          />
        </div>
        <p
          className="animate-fade-in-up text-left text-3xl font-[Momo_Trust_Sans] md:text-3xl"
          style={stagger(2)}
        >
          Desarrollador de software multiplataforma
        </p>
      </header>

      <StickyNav />

      {/* About me */}
      <section
        id="about-me"
        className="scroll-mt-32 mb-20 grid max-w-6xl grid-cols-1 items-center gap-10 px-6 mx-auto lg:grid-cols-2"
      >
        <div
          className={`animate-fade-in-up h-72 rounded-[20px] bg-gradient-to-br from-sky-200/60 to-sky-500/30 lg:h-96 ${cardShadow}`}
          style={stagger(0)}
          aria-hidden
        />
        <div className="animate-fade-in-up" style={stagger(1)}>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">About me</h2>
          <p className="mb-6 text-base leading-relaxed">
            Desarrollador Full Stack enfocado en la creación de aplicaciones web
            modernas, escalables y centradas en la experiencia de usuario.
            Actualmente trabajo con tecnologías como React, Node.js, Express,
            PostgreSQL y MongoDB, desarrollando soluciones frontend y backend
            para distintos tipos de proyectos web.
          </p>
          <p className="mb-8 text-base leading-relaxed">
            Soy autodidacta, adaptable y aprendo rápido. Busco seguir creciendo
            profesionalmente colaborando en proyectos reales y creando
            soluciones digitales que generen impacto.
          </p>
          <button type="button" className={pillButton}>
            Descargar CV
          </button>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-32 mb-24 px-4">
        <h1
          className="animate-fade-in-up mx-auto mb-12 max-w-3xl text-center text-2xl font-bold md:text-3xl"
          style={stagger(0)}
        >
          SKILLS Y HERRAMIENTAS QUE SIEMPRE USO
        </h1>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icons={skill.icons}
              className={skill.gridClass}
              style={stagger(index + 1)}
            />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-32 mb-24 px-4">
        <h1
          className="animate-fade-in-up mb-14 text-center text-4xl font-extrabold"
          style={stagger(0)}
        >
          MAIN PROJECTS
        </h1>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              images={project.images}
              tech={project.tech}
              previewUrl={project.previewUrl}
              githubUrl={project.githubUrl}
              isMainProject={project.isMainProject}
              style={stagger(index + 1)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button type="button" className={pillButton} onClick={() => navigate('/projects')}>
            View All Projects
          </button>
        </div>
      </section>

      {/* Contact */}
      <ContactSection style={stagger(0)} />
    </div>
  );
}
