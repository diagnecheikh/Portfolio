import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 hover:scale-105 transition duration-300">
          Cheikh Diagne
        </h1>
        <nav className="space-x-4">
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition">Projets</a>
          <a href="#hardware" className="text-gray-600 hover:text-indigo-600 transition">Matériel</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
