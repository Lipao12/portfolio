import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCode, FaRobot } from "react-icons/fa";
import { projects } from "../assets/projects";
import { ProjectCard } from "../ui/components/project-card";
import { ProjectExtended } from "../ui/components/project-expanded";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="projects" className="flex flex-col pt-16 pb-24 w-5/6 mx-auto">
      <div className="justify-center items-center flex flex-col mb-14">
        <h1 className="font-playfair font-semibold text-5xl mb-6">
          Meus Projetos
        </h1>
        <p className="text-lg w-1/2">
          Confira alguns dos meus projetos mais interessantes e veja como minhas
          habilidades em desenvolvimento foram aplicadas para criar soluções
          inovadoras e eficazes.
        </p>
      </div>
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            layoutId="icon-1"
          >
            <FaCode className="text-6xl text-secundary" />
          </motion.div>
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              layoutId={proj.id}
              onClick={() => setSelectedId(proj.id)}
              className="cursor-pointer"
            >
              <ProjectCard
                project={proj}
                title={proj.name}
                description={proj.description}
              />
            </motion.div>
          ))}
          <motion.div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            layoutId="icon-2"
          >
            <FaRobot className="text-6xl text-secundary" />
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedId &&
          projects
            .filter((proj) => proj.id === selectedId)
            .map((proj) => (
              <motion.div
                key={proj.id}
                layoutId={proj.id}
                className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70 z-50 p-8"
                onClick={() => setSelectedId(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ProjectExtended
                  title={""}
                  description={""}
                  project={proj}
                  setSelectedId={setSelectedId}
                />
              </motion.div>
            ))}
      </AnimatePresence>
    </section>
  );
};
