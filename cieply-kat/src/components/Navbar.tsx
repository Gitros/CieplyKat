import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white border-b shadow-md h-[60px]">
      <div className="max-w-7xl h-full mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
            Ciepły Kąt
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/services"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Usługi
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            O nas
          </Link>
          <Link
            to="/realizations"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Realizacje
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Kontakt
          </Link>
          <Link
            to="/opinions"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Opinie
          </Link>
          <Link
            to="/faq"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            FAQ
          </Link>
        </div>

        <button
          className="md:hidden bg-gray-600 hover:bg-gray-700 rounded-md"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="md:hidden absolute top-[60px] left-0 w-full z-50 bg-white px-4 pt-2 space-y-2 shadow-md border-b rounded-b-md overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-500"
              >
                Usługi
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-500"
              >
                O nas
              </Link>
              <Link
                to="/realizations"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-500"
              >
                Realizacje
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-500"
              >
                Kontakt
              </Link>
              <Link
                to="/opinions"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-500"
              >
                Opinie
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-500"
              >
                FAQ
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
