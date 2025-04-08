import { ShieldCheck, Leaf, Users } from "lucide-react";
import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] px-4 py-20 animate-fade-in-up">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">O nas</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Jesteśmy zespołem specjalistów, którzy dbają o komfort i ciepło w
          Twoim domu. Od lat oferujemy nowoczesne rozwiązania w zakresie
          ocieplania budynków i elewacji.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <AboutCard
            icon={<ShieldCheck size={40} className="text-orange-400" />}
            title="Gwarancja jakości"
            description="Korzystamy tylko z certyfikowanych materiałów i zapewniamy wieloletnią gwarancję."
          />
          <AboutCard
            icon={<Leaf size={40} className="text-orange-400" />}
            title="Ekologiczne rozwiązania"
            description="Dbamy o środowisko oferując energooszczędne i ekologiczne technologie."
          />
          <AboutCard
            icon={<Users size={40} className="text-orange-400" />}
            title="Doświadczony zespół"
            description="Nasi fachowcy posiadają wieloletnie doświadczenie i stale podnoszą swoje kwalifikacje."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
