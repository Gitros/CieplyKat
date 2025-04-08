import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm py-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Ciepły Kąt. Wszelkie prawa
          zastrzeżone.
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/services" className="hover:text-orange-500 transition">
            Usługi
          </Link>
          <Link to="/about" className="hover:text-orange-500 transition">
            O nas
          </Link>
          <Link to="/realizations" className="hover:text-orange-500 transition">
            Realizacje
          </Link>
          <Link to="/contact" className="hover:text-orange-500 transition">
            Kontakt
          </Link>
          <Link to="/opinions" className="hover:text-orange-500 transition">
            Opinie
          </Link>
          <Link to="/faq" className="hover:text-orange-500 transition">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
