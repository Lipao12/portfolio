import { motion } from "framer-motion";
import { useState } from "react";
import { Home } from "./home";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Landing = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="mx-auto space-y-8">
      <Home />
      <div className="md:h-full ">
        <motion.div onViewportEnter={() => setSelectedPage("skills")}>
          <Skills />
        </motion.div>
      </div>
      <div className="md:h-full ">
        <motion.div onViewportEnter={() => setSelectedPage("skills")}>
          <Projects />
        </motion.div>
      </div>
    </div>
  );
};
