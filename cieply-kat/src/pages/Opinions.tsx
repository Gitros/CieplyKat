import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";

const reviews = [
  {
    name: "Anna Nowak",
    city: "Kraków",
    content:
      "Bardzo profesjonalna ekipa, wszystko wykonane terminowo i zgodnie z ustaleniami. Dom wygląda świetnie!",
    avatar: avatar1,
  },
  {
    name: "Marek Kowalski",
    city: "Rzeszów",
    content:
      "Świetny kontakt z firmą, pomocne doradztwo i szybka realizacja. Polecam każdemu!",
    avatar: avatar2,
  },
  {
    name: "Katarzyna Wiśniewska",
    city: "Tarnów",
    content:
      "Najlepsza ekipa z jaką miałam do czynienia. Elewacja wygląda rewelacyjnie, a dom jest dużo cieplejszy.",
    avatar: avatar3,
  },
];

const Opinions = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] px-4 py-12 animate-fade-in-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Opinie naszych klientów
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white-800">{review.name}</p>
                  <p className="text-sm text-gray-200">{review.city}</p>
                </div>
              </div>
              <p className="text-gray-100">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opinions;
