import { useEffect, useState } from "react";

interface Piada {
  id: number;
  setup: string;
  delivery: string;
}

export const Section = () => {
  const [joke, setJokes] = useState<Piada[]>([]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0); //piada atual
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const jokesUrl = "https://v2.jokeapi.dev/joke/Any?lang=pt&amount=10";

    const fetchJokes = async () => {
      setLoading(true); // Indica que o carregamento está em andamento
      try {
        const res = await fetch(jokesUrl);
        const json = await res.json();
        setJokes(json.jokes); // Define o estado com as piadas recebidas
        setLoading(false); // Conclui o carregamento
      } catch (error) {
        console.error("Erro ao buscar piadas:", error);
        setLoading(false); // Finaliza o carregamento mesmo em caso de erro
      }
    };

    fetchJokes();
  }, []);

  const handleButton = () => {
    // Garante que haja piadas para evitar acessar o array vazio
    if (joke.length > 0) {
      setLoading(true); // Definir loading como true ao clicar em "Próxima"

      // Avança para a próxima piada com verificação do array
      setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % joke.length);

      // Simulação do tempo de carregamento para exibir o próximo item
      setTimeout(() => {
        setLoading(false); // Desativa o loading após o tempo simulado
      }, 1000);
    }
  };
  return (
    <div className="max-w-full min-h-96 flex flex-col items-center justify-around gap-2">
      <div className="flex min-h-72 max-w-80 border rounded-md shadow-lg">
        <div className="bg-blue-700 rounded-tl-md rounded-bl-md  w-16 shadow-lg"></div>
        <div className="w-60 p-3 content-center font-fredoka shadow-inner">
          <div id="paragrafo">
            {loading ? (
              <h1>Carregando piadas...</h1>
            ) : (
              joke.length > 0 && (
                <div>
                  <p>{joke[currentJokeIndex].setup}</p>
                  <p>{joke[currentJokeIndex].delivery}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div>
        <button
          className="py-2 px-2 rounded-md shadow-md font-fredoka font-medium bg-blue-600 hover:bg-blue-700 text-gray-100"
          onClick={handleButton}
        >
          Próxima piada
        </button>
      </div>
    </div>
  );
};
