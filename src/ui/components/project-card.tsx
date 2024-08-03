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
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-secundary group`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img
        src={imgProject}
        alt={"Projeto 1"}
        className="group-hover:opacity-100"
      />
    </motion.div>
  );
};
