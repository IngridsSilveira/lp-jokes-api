import { FaLinkedin, FaGithub } from "react-icons/fa";
export const Footer = () => {
    return (
        <div className="max-w-full flex items-center justify-center bg-gray-950 text-white gap-2 p-1">
            <p className="font-fredoka text-md">Developed by Ingrid</p>
            <div className="flex gap-1 cursor-pointer">
                <FaLinkedin size={20} className="text-blue-700 hover:text-blue-600"/>
                <FaGithub size={20} className="text-white hover:text-gray-300"/>
            </div>
        </div>
    )
}