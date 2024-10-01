import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";

export const Header = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setwindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Limpar o evento quando o componente for desmontado
    return () => window.removeEventListener("resize", handleResize);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("menu")?.classList.add("hidden");
  };
  return (
    <div className="max-w-full flex justify-between items-center p-2 bg-yellow-400 ">
      {/* Inicio */}
      <h2 className="cursor-pointer font-fredoka text-lg hover:underline">
        Início
      </h2>
      {/* imagem */}
      <div className="cursor-pointer flex items-center gap-2">
        <img
          className="max-w-16 h-auto"
          src="/img/joke_logo.png"
          alt="Logo jokes"
        />
        <h1 className="font-fredoka font-bold text-2xl">Jokes Api</h1>
      </div>

      {/* lista de menu */}
      <nav>
        {windowWidth < 640 ? (
          <>
            <IoIosMenu id="menu" className="" size={40} onClick={toggleMenu} />
            {isMenuOpen && (
              <ul className="flex flex-col gap-2 cursor-pointer font-fredoka text-md">
                <li className="hover:underline">Contato</li>
                <li className="hover:underline">Sobre nós</li>
              </ul>
            )}
          </>
        ) : (
          <ul className="flex tablet:flex-row gap-2 cursor-pointer font-fredoka text-md">
            <li className="hover:underline">Contato</li>
            <li className="hover:underline">Sobre nós</li>
          </ul>
        )}
      </nav>
    </div>
  );
};
