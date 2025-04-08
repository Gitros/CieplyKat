import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

  return (
<nav className="bg-white border-b shadow-md h-[60px]">
      <div className="max-w-7xl h-full mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">Ciepły Kąt</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Usługi</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">O nas</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">Realizacje</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Kontakt</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">Opinie</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">FAQ</Link>
        </div>

        <button className="md:hidden bg-gray-600 hover:bg-gray-700 rounded-md" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Usługi</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>O nas</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Realizacje</Link>
          <Link to="/" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Kontakt</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Opinie</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>FAQ</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
