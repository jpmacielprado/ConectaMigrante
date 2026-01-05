import HeroImg from "../assets/heroImg.svg";
import Logo from "../assets/logo.svg";
import Languages from "../assets/languages.svg";
import Globe from "../assets/globe.svg";
import PlayStore from "../assets/playstore.svg";
import Arrow from "../assets/arrow-right.svg";
import Button from "../components/Button";
import { openWhatsApp } from "../utils/whatsapp";

export default function Home() {
  return (
    <section class="relative min-h-screen bg-[#1e2b8b] overflow-hidden font-sans flex flex-col">
      <nav class="flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto">
        <div class="flex items-center gap-1">
          <img src={Logo} alt="Conecta Migrantes logo" />
        </div>

        <div class="flex items-center gap-4">
          <button class="flex items-center gap-2 border border-white/40 text-white px-4 py-1.5 rounded-lg hover:bg-white/10 transition">
            <img src={Languages} class="w-4" />
            <img
              src="https://flagcdn.com/w20/br.png"
              alt="Brazil Flag"
              class="w-5"
            />
            <span class="text-sm font-medium">Português</span>
          </button>

          <button class="flex items-center gap-2 bg-white text-gray-700 px-4 py-1.5 rounded-lg shadow-md hover:bg-gray-100 transition">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              class="w-5"
            />
            <span class="text-sm font-semibold">Entrar com Google</span>
          </button>
        </div>
      </nav>

      <div class="grow flex px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div class="z-10 text-white max-w-2xl">
            <div class="inline-flex items-center gap-2 bg-[#2a3ba0] border border-white/10 px-4 py-2 rounded-full mb-8">
              <img src={Globe} />
              <span class="text-x font-medium">
                Conexão global para novas histórias
              </span>
            </div>

            <h1 class="text-5xl font-extrabold leading-tight mb-6">
              Conectando imigrantes a
              <span class="text-[#86ef6d]"> oportunidades, serviços</span> e
              <span class="text-[#86ef6d]"> direitos</span> no Brasil.
            </h1>

            <p class="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
              Aqui você encontra apoio, informação e oportunidades para
              construir sua nova vida no Brasil. Escolha seu idioma e siga sua
              jornada com dignidade e segurança.
            </p>

            <div class="flex items-center gap-4">
              <button class="bg-[#86ef6d] text-[#1e2b8b] px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#75d65e] transition">
                Conheça nossa plataforma
                <img src={Arrow}/>
              </button>

              <button class="w-12 h-12 flex items-center justify-center bg-white rounded-full hover:scale-105 transition shadow-lg">
                <img src={PlayStore} class="w-5" />
              </button>
            </div>
          </div>

          <div class="relative flex justify-center items-end h-full">
            <img
              src={HeroImg}
              alt="Illustration of people connecting"
              className="w-full h-auto object-contain scale-112"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
