import React from "react";

const projects = [
  {
    name: "ex-mini-projet",
    description: "Petit projet d’application ou d’algorithme (université).",
    link: "https://github.com/diagnecheikh/ex-mini-projet",
  },
  {
    name: "sde1601t-diagne-cheikh",
    description: "Projet Système d’Exploitation (architecture, shell, processus).",
    link: "https://github.com/diagnecheikh/sde1601t-diagne-cheikh",
  },
  {
    name: "mini_projet_c_ka_diagne",
    description: "Projet C : Développement d’un parser Mini-PNG conforme à un format simplifié d’images, avec prise en charge des images noir et blanc, niveaux de gris, couleurs RGB et palettes 256 couleurs. Le projet comprend la lecture, l’affichage, ainsi que la génération de fichiers Mini-PNG valides, tout en assurant la portabilité du code.",
    link: "https://github.com/diagnecheikh/mini_projet_c_ka_diagne",
  },
  {
    name: "td_l3_snio",
    description: "Travaux dirigés en Système Numérique et Informatique.",
    link: "https://github.com/diagnecheikh/td_l3_snio",
  },
];

function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Mes projets GitHub</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
