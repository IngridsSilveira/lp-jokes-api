export const Section = () => {
  
  const handleButton = () => {
    const paragrafo = document.getElementById("paragrafo") as HTMLElement

    paragrafo.innerHTML = 'teste'
  };
  return (
    <div className="max-w-full min-h-96 flex flex-col items-center justify-around gap-2">
      <div>
        <button
          className="bg-yellow-400 py-2 px-2 rounded-md shadow-md font-fredoka font-medium text-gray-800"
          onClick={handleButton}
        >
          Próxima piada
        </button>
      </div>

      <div className="flex min-h-72 max-w-80 border rounded-md shadow-lg">
         <div className="bg-blue-700 rounded-tl-md rounded-bl-md  w-16 shadow-lg"></div>
          <div className="w-60 p-3 content-center font-fredoka shadow-inner">
            <p id="paragrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat est id nemo officiis, numquam nihil odit assumenda rem aperiam consequatur, quasi reiciendis ipsa debitis dolore cum quaerat eaque laudantium voluptatem? </p>
          </div>
      </div>
    </div>
  );
};
