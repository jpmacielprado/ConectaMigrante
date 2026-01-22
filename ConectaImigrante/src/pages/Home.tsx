import { useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import HeroImg from "../assets/heroImg.svg";
import Nav from "../components/Header";
import Languages from "../assets/languages.svg";
import Globe from "../assets/globe.svg";
import PlayStore from "../assets/playstore.svg";
import Arrow from "../assets/arrow-right.svg";
import Button from "../components/Button";

export default function Home() {
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

        <Reveal delay={0.2}>
          <Button className="bg-white gap-2 h-8 py-4 px-6">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              className="w-4"
            />
            <span className="text-gray-700">Entrar com Google</span>
          </Button>
        </Reveal>
      </Nav>

      <div className="grow flex px-15 max-w-7xl max-h-3xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="z-10 text-white max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-[#2a3ba0] border border-white/10 px-4 py-2 rounded-full mb-8">
                <img src={Globe} />
                <span className="font-medium">
                  Conexão global para novas histórias
                </span>
              </div>
            </Reveal>

            <h1 className="text-4xl font-extrabold leading-tight mb-6">
              Conectando imigrantes a
              <span className="text-[#7EBE4F]"> oportunidades, serviços</span> e
              <span className="text-[#7EBE4F]"> direitos</span> no Brasil.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
              Aqui você encontra apoio, informação e oportunidades para
              construir sua nova vida no Brasil. Escolha seu idioma e siga sua
              jornada com dignidade e segurança.
            </p>

            <div className="flex items-center gap-4 text-2xl">
              <Reveal delay={0.3}>
                <Button
                  className="bg-[#7EBE4F] text-xl px-8 py-3 rounded-full"
                  onClick={() => navigate("/profile")}
                >
                  Conheça nossa plataforma
                  <img src={Arrow} alt="" />
                </Button>
              </Reveal>

              <Reveal delay={0.5}>
                <Button className="w-14 h-14 bg-white rounded-full shadow-lg">
                  <img src={PlayStore} className="w-5" />
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="relative flex justify-center items-end top-55 right-8 h-full">
            <img
              src={HeroImg}
              alt="Illustration of people connecting"
              className="w-full h-auto object-contain scale-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
