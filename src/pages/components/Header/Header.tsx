export const Header = () => {
  return (
    <div className="max-w-full flex justify-between items-center p-2 bg-blue-600 text-white">
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
      <ul className="flex gap-2 cursor-pointer font-fredoka text-md">
        <li className="hover:underline">Contato</li>
        <li className="hover:underline">Sobre nós</li>
      </ul>
    </div>
  );
};
