import { motion } from "framer-motion";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

interface ProjectCardProps {
  title: string;
  description: string;
  project: any;
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-300
    z-30 flex flex-col justify-end items-start text-start pb-5 px-12 text-secundary group text-white hover:bg-black cursor-pointer`;
  console.log(project);
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{project.name}</p>
        <p className="mt-7">{project.description}</p>
      </div>
      <img src={project.image} alt={`Projeto: ${project.name}`} />
    </motion.div>
  );
};
