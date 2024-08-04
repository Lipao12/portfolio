import { motion } from "framer-motion";
import { Home } from "./home";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Landing = () => {
  //const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="mx-auto space-y-8">
      <Home />
      <div className="md:h-full ">
        <motion.div onViewportEnter={() => {}}>
          <Skills />
        </motion.div>
      </div>
      <div className="md:h-full ">
        <motion.div onViewportEnter={() => {}}>
          <Projects />
        </motion.div>
      </div>
    </div>
  );
};
