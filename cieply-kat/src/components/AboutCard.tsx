import { ReactNode } from "react"

interface AboutCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const AboutCard = ({icon, title, description}: AboutCardProps) => {
  return (
    <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-md transition text-white">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-200 text-center">{description}</p>
    </div>
  )
}

export default AboutCard
