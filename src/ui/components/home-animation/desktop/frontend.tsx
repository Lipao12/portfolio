import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Technologies } from "./technologies";
import { TubesBackend } from "./tubes-backend";
import { TubesFontend } from "./tubes-frontend";

export const FrontendAnimation = () => {
  const frontEndRef = useRef<any>(null);
  const backEndRef = useRef<any>(null);
  const techsFrontRefs = useRef<any>([]);
  const [widthsTech, setWidthsTech] = useState([]);
  const [coords, setCoords] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const tubes_anim_duration = { h: 1, v: 0.5 };

  useEffect(() => {
    const calculateCoords = () => {
      if (frontEndRef.current) {
        const x = frontEndRef.current.offsetWidth;
        const y = frontEndRef.current.offsetHeight;

        setCoords((prevCoords) => [
          {
            x: (x - 33) / 4,
            y: y / 4,
          },
          prevCoords[1],
        ]);
      }
      if (backEndRef.current) {
        const x = backEndRef.current.offsetWidth;
        console.log("Num: ", x);
        const y = backEndRef.current.offsetHeight;
        setCoords((prevCoords) => [
          prevCoords[0],
          {
            x: (x - 33) / 4,
            y: y / 4,
          },
        ]);
      }
      const newWidths = techsFrontRefs.current.map(
        (ref: any) => ref?.offsetWidth || 0
      );
      setWidthsTech(newWidths);
    };

    calculateCoords();
    window.addEventListener("resize", calculateCoords);
    return () => {
      window.removeEventListener("resize", calculateCoords);
    };
  }, []);

  console.log(coords);
  console.log(
    backEndRef?.current && backEndRef?.current.getBoundingClientRect()
  );

  return (
    <div className="w-4/5 h-[480px] stroke-current text-custom-stroke p-4  border-custom-text border-none mx-auto text-secundary">
      <div className="flex flex-row justify-between">
        <motion.div
          className="border rounded-md px-3 py-2 bg-secundary text-white shadow-md cursor-default"
          ref={frontEndRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{
            duration: tubes_anim_duration.h * 2,
            repeat: Infinity,
            delay: 4,
          }}
        >
          <h1 className="text-[25px] ">Front End</h1>
        </motion.div>
        <motion.div
          className="border rounded-md px-3 py-2 bg-secundary text-white shadow-md cursor-default"
          ref={backEndRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{
            duration: tubes_anim_duration.h * 2,
            repeat: Infinity,
            delay: 4,
          }}
          onMouseEnter={() => {
            //setIsHovered(true);
          }}
          onMouseLeave={() => {
            //setIsHovered(false);
          }}
        >
          <h1 className="text-[25px] ">Back End</h1>
        </motion.div>
      </div>
      <div className="relative">
        <TubesFontend
          coords={coords[0]}
          widthsTech={widthsTech}
          tubes_anim_duration={tubes_anim_duration}
        />
        <div className="absolute inset-0">
          <TubesBackend
            coords={coords[1]}
            widthsTech={widthsTech}
            tubes_anim_duration={tubes_anim_duration}
          />
        </div>
      </div>
      <Technologies techsFrontRefs={techsFrontRefs} />
    </div>
  );
};
