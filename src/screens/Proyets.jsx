import { CircleArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { pillButton } from "../lib/styles";
import ProyectBanner from "../components/ProyectBanner";
import { projects } from "../data/projects";

export default function Proyets() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex justify-start w-full px-6">
        <button type="button" className={pillButton} onClick={() => navigate("/")}>
          <CircleArrowLeft className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center mb-10">
        <h1>CODING PROJECTS</h1>
        <div className="w-full h-2 bg-sky-500 rounded-full justify-center mx-auto" />
      </div>
      <p className="max-w-3xl text-center text-lg font-medium">
        A continuación podras ver un listado de proyectos que he realizado desde
        el comienzo de mi carrera universitaria asi como proyectos que he
        realizado como desarrllador freelancer. Proyectos que van desde sitios
        web simples hasta proyectos mas complejos como aplicaciones web.
      </p>
      <div className="w-full px-48 py-12 flex flex-col gap-12 items-center justify-center">
        {projects.map((project) => (
          <ProyectBanner key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
