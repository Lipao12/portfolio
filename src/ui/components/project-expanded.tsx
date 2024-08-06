import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface ProjectExtendedProps {
  title: string;
  description: string;
  project: any;
  setSelectedId: any;
}
export const ProjectExtended = ({
  project,
  setSelectedId,
}: ProjectExtendedProps) => {
  return (
    <motion.div
      layoutId="expanded-card"
      className="bg-white rounded-lg p-4 max-w-2xl w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <ReactMarkdown className="text-lg">
          {project.full_description}
        </ReactMarkdown>
      </div>
      <motion.button
        className="absolute top-4 right-4 text-2xl"
        onClick={() => setSelectedId(null)}
      >
        &times;
      </motion.button>
    </motion.div>
  );
};
