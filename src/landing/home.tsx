import Profile from "../assets/profile-image.jpeg";
import { MainAnimation } from "../ui/components/home-animation/desktop";
import SocialMediaIcons from "../ui/components/social-media";

export const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col min-h-screen justify-center items-center max-w-6xl px-6 py-10 mx-auto"
    >
      <div className="flex flex-col-reverse items-center md:flex-row md:gap-16 px-4">
        <div className="flex-1 flex flex-col items-start text-left md:text-left">
          <div className="w-full ">
            <MainAnimation />
          </div>

          <div className="mt-5">
            <h1 className="text-4xl font-bold mb-4">Filipe Mai</h1>
            <p className="mb-6 text-lg">
              Sou um desenvolvedor apaixonado por JavaScript, Python, Node,
              TypeScript e React, sempre buscando novos desafios e crescimento
              profissional.
            </p>
            {/*<button
              type="button"
              onClick={() => {}}
              className="px-6 py-2 bg-secundary text-white rounded-md transition hover:bg-[#444b5b] duration-300"
            >
              Contato
            </button>*/}
            <SocialMediaIcons />
          </div>
        </div>

        <div className="relative z-0 flex justify-center md:justify-end mt-10 md:mt-0">
          <div
            className="relative before:absolute before:-top-20 before:-right-20 before:rounded-[400px] before:w-full before:max-w-[400px]
                            md:before:max-w-[600px] before:h-full before:border-2 before:z-[-1] before:border-[#bdbfc2]"
          >
            <img
              onClick={() => {}}
              src={Profile}
              alt="Imagem de Filipe Mai"
              className="md:h-[500px] h-[200px] rounded-full transform -scale-x-100 hover:filter hover:saturate-200 transition duration-500 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
