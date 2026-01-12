import Button from "../components/Button";
import Globe from "../assets/profile_bg.png";

export default function Profile() {
  return (
    <div className="relative overflow-hidden bg-linear-to-r from-[#22267F] to-[#265384] flex items-center justify-center min-h-screen p-5">

      <img
        src={Globe}
        alt="Globe"
        className="absolute bottom-[-15%] right-[-5%] object-contain opacity-20 w-3/4 max-w-150 pointer-events-none z-0"
      />

      <div className="z-10 w-full max-w-md">
        {/* Título Superior */}
        <h2 className="text-[#1e3a8a] text-center font-bold text-xl mb-5 leading-tight">
          Este é o primeiro passo para o recomeço.
        </h2>

        {/* Card Principal */}
        <div className="bg-[#10224d] p-7 rounded-3xl shadow-2xl">
          <h1 className="text-white text-3xl font-semibold mb-2">
            Complete seu perfil
          </h1>
          <p className="text-gray-300 text-sm mb-6">
            Essas informações nos ajudam a personalizar sua experiência.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                País de origem:
              </label>
              <input
                type="text"
                placeholder="Seu país"
                className="w-full bg-[#dbeafe] text-[#10224d] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Cidade atual no Brasil:
              </label>
              <input
                type="text"
                placeholder="Sua cidade"
                className="w-full bg-[#dbeafe] text-[#10224d] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-4">
                Qual serviço você necessita:{" "}
                <span className="text-xs font-normal opacity-70">
                  (Selecione pelo menos 3)
                </span>
              </label>

              {/* Grid de Checkboxes */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  "Documentação",
                  "Educação",
                  "Emprego",
                  "Apoio jurídico",
                  "Moradia",
                  "Saúde",
                ].map((servico) => (
                  <label
                    key={servico}
                    className="flex items-center space-x-3 text-white cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-full border-2 border-white bg-transparent appearance-none checked:bg-blue-400 checked:border-transparent transition-all shrink-0 cursor-pointer"
                    />
                    <span className="text-sm whitespace-nowrap">{servico}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#7EBE4F] py-3">
              Continuar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
