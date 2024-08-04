import { motion } from "framer-motion";
import SkillsImage from "../assets/skills-image.png";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="pt-16 pb-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-secundary "
          initial={{ scale: 0, borderRadius: "100%" }}
          whileInView={{ scale: 1, borderRadius: "0%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <div className="w-5/6 mx-auto relative z-10 text-slate-300">
          <div className="flex flex-row justify-between">
            <motion.div
              className="md:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-playfair font-semibold text-4xl mb-5">
                MINHAS{" "}
                <span className="text-secundary px-1 bg-gradient-to-tr to-slate-50 from-secundary shadow-sm rounded-sm ">
                  HABILIDADES
                </span>
              </p>
              <p className="mt-10 mb-7 text-lg">
                Minhas experiências me ajudaram a desenvolver e aprimorar várias
                habilidades essenciais.
              </p>
            </motion.div>
            <motion.div
              className="mt-16 md:mt-0"
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div
                className="relative z-0 mr-20 before:absolute before:-top-10 before:left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]
              before:rounded-md "
              >
                <img
                  alt="skills"
                  className="z-10 shadow-lg rounded-md"
                  src={SkillsImage}
                />
              </div>
            </motion.div>
          </div>
          <div className="md:flex md:justify-between mt-16 gap-32">
            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-32">
                <div className="z-10">
                  <p className="font-playfair font-semibold text-5xl">01</p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Resolução de problemas
                  </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-blue-700 absolute right-0 top-0 z-[-1]" />
              </div>
              <p className="mt-5">
                Durante minha iniciação científica, mantive e melhorei
                aplicações, resolvendo desafios técnicos e implementando
                soluções eficazes.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-32">
                <div className="z-10">
                  <p className="font-playfair font-semibold text-5xl">02</p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Organização
                  </p>
                  <div className="w-1/2 md:w-3/4 h-32 bg-red-700 absolute right-0 top-0 z-[-1]" />
                </div>
              </div>
              <p className="mt-5">
                Utilizei o Trello no Projeto Solares para organizar e monitorar
                tarefas semanalmente, garantindo eficiência e cumprimento de
                prazos.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/3 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-32">
                <div className="z-10">
                  <p className="font-playfair font-semibold text-5xl">03</p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Trabalho em equipe
                  </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-yellow-700 absolute right-0 top-0 z-[-1]" />
              </div>
              <p className="mt-5">
                Colaborei eficazmente com a equipe no Projeto Solares,
                garantindo a integração do aplicativo e demonstrando comunicação
                e cooperação para alcançar objetivos comuns.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
