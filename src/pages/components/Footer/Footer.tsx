import { FaLinkedin, FaGithub } from "react-icons/fa";
export const Footer = () => {
    return (
        <div className="max-w-full flex items-center justify-center bg-gray-900 text-white gap-2 p-2">
            <p className="font-fredoka text-lg">Desenvolvido por Ingrid Souza</p>
            <div className="flex gap-1 cursor-pointer">
                <FaLinkedin size={30} className="text-blue-700 hover:text-blue-600"/>
                <FaGithub size={30} className="text-white hover:text-gray-300"/>
            </div>
        </div>
    )
}