import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Technologies } from "./technologies";
import { Tubes } from "./tubes";

export const FrontendAnimation = () => {
  const frontEndRef = useRef<any>(null);
  const techsFrontRefs = useRef<any>([]);
  const [widthsFrontTech, setWidthsFrontTech] = useState([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const tubes_anim_duration = { h: 1, v: 0.5 };

  useEffect(() => {
    const calculateCoords = () => {
      if (frontEndRef.current) {
        const x = frontEndRef.current.offsetWidth;
        const y = frontEndRef.current.offsetHeight;
        setCoords({
          x: (x - 33) / 4,
          y: y / 4,
        });
      }
      const newWidths = techsFrontRefs.current.map(
        (ref: any) => ref?.offsetWidth || 0
      );
      setWidthsFrontTech(newWidths);
    };

    calculateCoords();
    window.addEventListener("resize", calculateCoords);
    return () => {
      window.removeEventListener("resize", calculateCoords);
    };
  }, []);

  console.log(widthsFrontTech);
  console.log(coords);
  console.log(isHovered);

  return (
    <div className="w-4/5 h-[480px] stroke-current text-custom-stroke p-4  border-custom-text border-none mx-auto text-secundary">
      <div className="flex flex-row justify-between">
        <motion.div
          className="border rounded-md px-3 py-2 bg-secundary text-white shadow-md cursor-default"
          ref={frontEndRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{
            duration: tubes_anim_duration.h,
            repeat: Infinity,
            delay: 4,
          }}
        >
          <h1 className="text-[25px] ">Front End</h1>
        </motion.div>
        <motion.div
          className="border rounded-md px-3 py-2 bg-secundary text-white shadow-md cursor-default"
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.25, 0.25, 1, 1, 0.25] }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-[25px] ">Back End</h1>
        </motion.div>
      </div>
      <Tubes
        coords={coords}
        widthsFrontTech={widthsFrontTech}
        tubes_anim_duration={tubes_anim_duration}
      />
      <Technologies techsFrontRefs={techsFrontRefs} />
    </div>
  );
};
