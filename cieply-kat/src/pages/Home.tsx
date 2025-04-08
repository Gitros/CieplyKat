import { Link } from "react-router-dom"
import image from "../images/banner.png"

const Home = () => {
  return (
    <div className="flex items-center justify-center px-4 bg-gray-100 h-[calc(100vh-60px)]">
       <div className="max-w-4xl w-full text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Witamy w <span className="text-orange-400">Ciepłym Kącie</span>
        </h1>
        <img src={image} alt="baner" className="mx-auto mb-6 w-[200px] max-w-md" />

        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Ocieplanie domu w zasięgu twojej ręki!
        </p>

        <Link
          to="/about"
          className="inline-block px-6 py-3 bg-orange-400 text-white rounded-md text-lg hover:bg-orange-700 transition"
        >
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  )
}

export default Home
