import { motion } from "framer-motion";

import ocieplanieImg from "../images/ocieplanieImg.jpg";
import elewacjeImg from "../images/elewacjeIMG.jpg";
import poddaszeImg from "../images/poddaszeImg.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Ocieplanie budynków",
    subtitle: "Komfort cieplny przez cały rok",
    description:
      "Oferujemy profesjonalne ocieplanie domów i budynków mieszkalnych przy użyciu wysokiej jakości materiałów termoizolacyjnych. Dzięki naszym usługom zmniejszysz straty ciepła i rachunki za ogrzewanie.",
    image: ocieplanieImg,
  },
  {
    id: 2,
    title: "Tynki i elewacje",
    subtitle: "Estetyka i ochrona w jednym",
    description:
      "Wykonujemy tynki zewnętrzne oraz nowoczesne elewacje, które nie tylko chronią budynek, ale też podkreślają jego charakter. Szeroki wybór faktur i kolorów pozwala dostosować wygląd do Twoich potrzeb.",
    image: elewacjeImg,
  },
  {
    id: 3,
    title: "Docieplanie poddaszy",
    subtitle: "Ciepło, które nie ucieka",
    description:
      "Izolujemy poddasza wełną mineralną lub pianką PUR - w zależności od potrzeb klienta. Zapewniamy odpowiednią wentylację i szczelność, co gwarantuje komfort w każdej porze roku.",
    image: poddaszeImg,
  },
];

const Services = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-orange-500 mb-2">
                {service.title}
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {service.subtitle}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/realizations"
                className="inline-block mt-6 text-orange-500 font-medium hover:underline"
              >
                Zobacz realizacje
              </Link>
            </div>

            <div className="flex-1">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full rounded-lg shadow-lg object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
