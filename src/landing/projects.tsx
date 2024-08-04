import { motion } from "framer-motion";
import { FaCode, FaRobot } from "react-icons/fa";
import { projects } from "../assets/projects";
import { ProjectCard } from "../ui/components/project-card";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Projects = () => {
  const iconStyles = "text-6xl text-secundary";
  return (
    <section id="projects" className="flex flex-col pt-16 pb-24 w-5/6 mx-auto">
      <div className="justify-center items-center flex flex-col mb-14">
        <h1 className="font-playfair font-semibold text-5xl mb-6">Projetos</h1>
        <p className="text-lg">
          Aqui estão alguns dos meus projetos. Sinta-se à vontade para
          explorá-los.
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
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <FaCode className={iconStyles} />
          </div>
          {projects.map((proj) => {
            return (
              <ProjectCard
                key={proj.id}
                title={proj.name}
                description={proj.description}
              />
            );
          })}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <FaRobot className={iconStyles} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
