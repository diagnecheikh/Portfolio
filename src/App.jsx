import React from "react";

const projects = [
  {
    name: "ex-mini-projet",
    description: "Projet Système d'Exploitation : lit les données du capteur Si7021 sur une Raspberry Pi 3 avec les étapes suivantes : Lecture multi-tâches du Si7021. Bouton avec interruption pour Reset (logs et UART). Connexion réseau TCP (port 8080). Alerte LED locale et Alerte LED via réseau. Gestion des erreurs avec logs",
    link: "https://github.com/diagnecheikh/ex-mini-projet",
  },
  {
    name: "mini_projet_c_ka_diagne",
    description: "Projet C : Développement d’un parser Mini-PNG conforme à un format simplifié d’images, avec prise en charge des images noir et blanc, niveaux de gris, couleurs RGB et palettes 256 couleurs. Le projet comprend la lecture, l’affichage, ainsi que la génération de fichiers Mini-PNG valides, tout en assurant la portabilité du code",
    link: "https://github.com/diagnecheikh/mini_projet_c_ka_diagne",
  },
  {
    name: "Application avec Python",
    description: "Projet Informatique : Développement d'une appication de Due Deligence qui permet d'analyser des documents financiers avec l'IA afin de gagner du temps ",
    link: "https://github.com/MkkCreations/Analyse_Doc_AWS",
  },
  {
    name: "td_l3_snio",
    description: "Travaux dirigés en Système Embarqué : Développement Logiciel",
    link: "https://github.com/diagnecheikh/td_l3_snio",
  },
];

const hardwareItems = [
  {
    name: "Raspberry Pi 3",
    image: "/images/rasb3.jpg",
  },
  {
    name: "STM32",
    image: "/images/STM32Cap.jpg",
  },
  {
    name: "Rover",
    image: "/images/rover.jpg",
  },
];

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen">
      <header className="bg-indigo-600 text-white py-6 shadow-md">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Portfolio de Cheikh Diagne</h1>
          <p className="text-indigo-200">Titulaire d’un DUT en informatique et actuellement étudiant en Licence 3 Système Numérique Informatqiue Embarquée et Objet Connecté. Curieux, motivé et dynamique, je cherche à approfondir mes compétences dans le domaine des systèmes embarqués.</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">À propos de moi</h2>
          <p className="text-lg leading-relaxed">
            Je suis passionné par les défis informatiques et électroniques et les projets techniques.
            Voici un aperçu de mes projets universitaires et du matériel que j’utilise.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Mes projets GitHub</h2>
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

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Matériel utilisé</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {hardwareItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-indigo-600">{item.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 text-center py-4 mt-10">
        <p className="text-sm">© 2025 Cheikh Diagne – Tous droits réservés.</p>
      </footer>
    </div>
  );
}
