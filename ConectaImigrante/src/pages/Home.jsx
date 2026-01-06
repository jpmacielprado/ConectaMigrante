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
    <section class="relative min-h-screen bg-linear-to-r from-[#22267F] to-[#265384] overflow-hidden font-sans flex flex-col">
      <nav class="flex items-center justify-between px-15 py-6 w-full max-w-7xl mx-auto">
        <div class="flex items-center gap-1">
          <img src={Logo} alt="Conecta Migrantes logo" />
        </div>

        <div class="flex items-center gap-4">
          <button class=" h-8 flex items-center gap-2 border border-white/40 text-white px-4 py-1.5 rounded-lg hover:bg-white/10 cursor-pointer transition">
            <img src={Languages} class="w-4" />
            <img
              src="https://flagcdn.com/w20/br.png"
              alt="Brazil Flag"
              class="w-5"
            />
            <span class="text-sm font-medium">Português</span>
          </button>

          <Button color="bg-white shadow-md flex items-center gap-2 h-8 rounded-lg">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              class="w-4"
            />
            <span class="text-gray-700 font-semibold">Entrar com Google</span>
          </Button>
        </div>
      </nav>

      <div class="grow flex px-15 max-w-7xl max-h-3xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div class="z-10 text-white max-w-2xl">
            <div class="inline-flex items-center gap-2 bg-[#2a3ba0] border border-white/10 px-4 py-2 rounded-full mb-8">
              <img src={Globe} />
              <span class="text-x font-medium">
                Conexão global para novas histórias
              </span>
            </div>

            <h1 class="text-4xl font-extrabold leading-tight mb-6">
              Conectando imigrantes a
              <span class="text-[#7EBE4F]"> oportunidades, serviços</span> e
              <span class="text-[#7EBE4F]"> direitos</span> no Brasil.
            </h1>

            <p class="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
              Aqui você encontra apoio, informação e oportunidades para
              construir sua nova vida no Brasil. Escolha seu idioma e siga sua
              jornada com dignidade e segurança.
            </p>

            <div class="flex items-center gap-4 text-2xl">
              <Button color="bg-[#7EBE4F] flex items-center gap-2 font-lexend text-xl px-8 py-3 rounded-full">
                Conheça nossa plataforma
                <img src={Arrow} alt="" />
              </Button>

              <button class="w-14 h-14 flex items-center justify-center bg-white rounded-full hover:scale-105 cursor-pointer transition shadow-lg">
                <img src={PlayStore} class="w-5" />
              </button>
            </div>
          </div>

          <div class="relative flex justify-center items-end top-55 right-8 h-full">
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
