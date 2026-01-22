import { useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import Nav from "../components/Header";
import Button from "../components/Button";
import Arrow from "../assets/arrow-right.svg";
import Languages from "../assets/languages.svg";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-linear-to-r from-[#22267F] to-[#265384] overflow-hidden flex flex-col">
      <Nav>
        <Reveal delay={0.1}>
          <Button className="bg-transparent gap-2 border border-white/40 hover:bg-white/10">
            <img src={Languages} className="w-4" />
            <img
              src="https://flagcdn.com/w20/br.png"
              alt="Brazil Flag"
              className="w-5"
            />
            <span className="text-sm">Português</span>
          </Button>
        </Reveal>
      </Nav>

      <div className="grow flex items-center justify-center px-15 min-w-screen mx-auto w-full">
        <div className="text-center align-center justify-center text-white z-10 w-full flex flex-col items-center">
          <Reveal delay={0.1}>
            <h1 className="text-9xl font-extrabold mb-4 text-[#7EBE4F]">
              404
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-300 text-lg flex flex-col items-center mb-10 max-w-md mx-auto">
              <p className="text-gray-300 text-lg mb-10 max-w-md mx-auto">
                Oops! A página que você está procurando não existe...
              </p>

              <Reveal delay={0.3}>
                <Button
                  className="bg-[#7EBE4F] text-xl px-8 py-3 rounded-full"
                  onClick={() => navigate("/")}
                >
                  Voltar para Home
                  <img src={Arrow} alt="" />
                </Button>
              </Reveal>
            </p>
          </Reveal>
        </div>
      </div>
    </section >
  );
}
