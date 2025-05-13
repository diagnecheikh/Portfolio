import React from "react";

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

function HardwareGallery() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Matériel utilisé</h2>
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
            <h3 className="text-xl font-semibold text-indigo-600">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HardwareGallery;
