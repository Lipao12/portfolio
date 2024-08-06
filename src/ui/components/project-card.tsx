import { motion } from "framer-motion";
import imgProject from "../../assets/project-5.jpeg";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

interface ProjectCardProps {
  title: string;
  description: string;
}
export const ProjectCard = ({ title, description }: ProjectCardProps) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-80 transition duration-300
    z-30 flex flex-col justify-end items-start text-start pb-5 px-12 text-secundary group text-white hover:bg-black cursor-pointer`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={imgProject} alt={"Projeto 1"} />
    </motion.div>
  );
};
