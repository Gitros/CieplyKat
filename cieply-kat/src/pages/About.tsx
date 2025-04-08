// src/pages/About.tsx
import { ShieldCheck, Leaf, Users } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] px-4 py-20 animate-fade-in-up">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">O nas</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Jesteśmy zespołem specjalistów, którzy dbają o komfort i ciepło w Twoim domu.
          Od lat oferujemy nowoczesne rozwiązania w zakresie ocieplania budynków i elewacji.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-md transition">
          <div className="flex justify-center">
            <ShieldCheck size={40} className="text-orange-400 mb-4" />
          </div>
            <h3 className="text-xl font-semibold mb-2">Gwarancja jakości</h3>
            <p className="text-gray-60">
              Korzystamy tylko z certyfikowanych materiałów i zapewniamy wieloletnią gwarancję.
            </p>
          </div>

          <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex justify-center">
              <Leaf size={40} className="text-orange-400 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ekologiczne rozwiązania</h3>
            <p className="text-gray-60">
              Dbamy o środowisko oferując energooszczędne i ekologiczne technologie.
            </p>
          </div>

          <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex justify-center">
              <Users size={40} className="text-orange-400 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Doświadczony zespół</h3>
            <p className="text-gray-60">
              Nasi fachowcy posiadają wieloletnie doświadczenie i stale podnoszą swoje kwalifikacje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
