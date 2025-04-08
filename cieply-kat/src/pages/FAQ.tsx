import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Jak długo trwa ocieplenie domu?",
    answer:
      "W zależności od wielkości budynku, ocieplenie trwa zazwyczaj od 3 do 7 dni roboczych.",
  },
  {
    question: "Jakich materiałów używacie?",
    answer:
      "Stosujemy wyłącznie certyfikowane i sprawdzone materiały, głównie wełnę mineralną i styropian grafitowy.",
  },
  {
    question: "Czy oferujecie gwarancję?",
    answer:
      "Tak, na wszystkie nasze usługi udzielamy pisemnej gwarancji - od 5 do 10 lat w zależności od zakresu prac.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-[calc(100vh-64px)] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer"
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`px-4 pt-0 pb-4 text-gray-600 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
