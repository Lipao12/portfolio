import { motion } from "framer-motion";

const technologies = [
  "JavaScript",
  "React",
  "TypeScript",
  "CSS",
  "HTML",
  "Tailwind CSS",
];

const lineVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1 },
};

const FrontendTech = () => {
  return (
    <section className="flex flex-col items-center mt-20">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        Front End
      </motion.h2>

      <div className="relative w-full flex flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <div key={index} className="m-4 flex flex-col items-center">
            <motion.svg
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              width="2"
              height="100"
              viewBox="0 0 2 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="#4A5568"
                strokeWidth="2"
                variants={lineVariants}
              />
            </motion.svg>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              className="text-lg font-medium text-gray-800 mt-2"
            >
              {tech}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrontendTech;
