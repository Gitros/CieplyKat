import ocieplenie1 from "../images/ocieplenie1.jpg";
import ocieplenie2 from "../images/ocieplenie2.jpg";
import ocieplenie3 from "../images/ocieplenie3.jpg";
import ocieplenie4 from "../images/ocieplenie4.jpg";
import ocieplenie5 from "../images/ocieplenie5.jpg";
import ocieplenie6 from "../images/ocieplenie6.jpg";

const projects = [
  { id: 1, title: "Dom jednorodzinny - Kraków", img: ocieplenie1 },
  { id: 2, title: "Ocieplenie bloku - Rzeszów", img: ocieplenie2 },
  { id: 3, title: "Elewacja domu - Tarnów", img: ocieplenie3 },
  { id: 4, title: "Modernizacja dachu - Mielec", img: ocieplenie4 },
  { id: 5, title: "Dom energooszczędny - Bochnia", img: ocieplenie5 },
  { id: 6, title: "Ocieplenie kamienicy - Nowy Sącz", img: ocieplenie6 },
];

const Realizations = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] px-4 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Nasze realizacje
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group bg-white"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizations;
