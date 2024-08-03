import { motion } from "framer-motion";

interface TubesProps {
  coords: { x: number; y: number };
  widthsFrontTech: number[];
  tubes_anim_duration: { v: number; h: number };
}

export const Tubes = ({
  coords,
  widthsFrontTech,
  tubes_anim_duration,
}: TubesProps) => {
  const gap = 16;
  const totalWidth =
    widthsFrontTech[0] +
    gap +
    widthsFrontTech[1] +
    gap +
    widthsFrontTech[2] +
    gap +
    widthsFrontTech[3] / 2;
  return (
    <div>
      <motion.svg
        className={"w-full h-full"}
        viewBox="0 0 480 380"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tubo 1 */}
        <motion.rect
          x={coords.x}
          y={0}
          width="4"
          height="300"
          initial={{ height: 0 }}
          animate={{ height: 300 }}
          transition={{ duration: tubes_anim_duration.v, ease: "easeInOut" }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={coords.x}
          y="300"
          width={widthsFrontTech[0] / 2 - coords.x}
          height="4"
          initial={{ width: 0 }}
          animate={{ width: widthsFrontTech[0] / 2 - coords.x }}
          transition={{
            duration: tubes_anim_duration.h,
            ease: "easeInOut",
            delay: tubes_anim_duration.v,
          }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={widthsFrontTech[0] / 2}
          y={300}
          width="4"
          height="75"
          initial={{ height: 0 }}
          animate={{ height: 75 }}
          transition={{
            duration: tubes_anim_duration.v,
            ease: "easeInOut",
            delay: tubes_anim_duration.v + tubes_anim_duration.h,
          }}
          fill="black"
          opacity="0.1"
        />

        {/* Tubo 2 */}
        <motion.rect
          x={coords.x * 2}
          y={0}
          width="4"
          height="100"
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ duration: tubes_anim_duration.v, ease: "easeInOut" }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={coords.x * 2}
          y="100"
          width={
            widthsFrontTech[0] +
            gap +
            widthsFrontTech[1] +
            gap +
            widthsFrontTech[2] / 2 -
            coords.x * 2
          }
          height="4"
          initial={{ width: 0 }}
          animate={{
            width:
              widthsFrontTech[0] +
              gap +
              widthsFrontTech[1] +
              gap +
              widthsFrontTech[2] / 2 -
              coords.x * 2,
          }}
          transition={{
            duration: tubes_anim_duration.h,
            ease: "easeInOut",
            delay: tubes_anim_duration.v,
          }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={
            widthsFrontTech[0] +
            gap +
            widthsFrontTech[1] +
            gap +
            widthsFrontTech[2] / 2
          }
          y="100"
          width="4"
          height={376 - 100}
          initial={{ height: 0 }}
          animate={{ height: 376 - 100 }}
          transition={{
            duration: tubes_anim_duration.v,
            ease: "easeInOut",
            delay: tubes_anim_duration.h + tubes_anim_duration.v,
          }}
          fill="black"
          opacity="0.1"
        />
        {/* Tubo 3 */}
        <motion.rect
          x={coords.x * 3}
          y={0}
          width="4"
          height="155"
          initial={{ height: 0 }}
          animate={{ height: 155 }}
          transition={{ duration: tubes_anim_duration.v, ease: "easeInOut" }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={coords.x * 3}
          y="155"
          width={
            widthsFrontTech[0] + gap + widthsFrontTech[1] / 2 - coords.x * 3
          }
          height="4"
          initial={{ width: 0 }}
          animate={{
            width:
              widthsFrontTech[0] + gap + widthsFrontTech[1] / 2 - coords.x * 3,
          }}
          transition={{
            duration: tubes_anim_duration.h,
            ease: "easeInOut",
            delay: tubes_anim_duration.v,
          }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={widthsFrontTech[0] + gap + widthsFrontTech[1] / 2}
          y={155}
          width="4"
          height="376-155"
          initial={{ height: 0 }}
          animate={{ height: 376 - 155 }}
          transition={{
            duration: tubes_anim_duration.v,
            ease: "easeInOut",
            delay: tubes_anim_duration.h + tubes_anim_duration.v,
          }}
          fill="black"
          opacity="0.1"
        />
        {/* Tubo 4 */}
        <motion.rect
          x={coords.x * 4}
          y={0}
          width="4"
          height="230"
          initial={{ height: 0 }}
          animate={{ height: 230 }}
          transition={{ duration: tubes_anim_duration.v, ease: "easeInOut" }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={coords.x * 4}
          y="230"
          width={
            widthsFrontTech[0] +
            gap +
            widthsFrontTech[1] +
            gap +
            widthsFrontTech[2] +
            gap +
            widthsFrontTech[3] / 2 -
            coords.x * 4
          }
          height="4"
          initial={{ width: 0 }}
          animate={{
            width:
              widthsFrontTech[0] +
              gap +
              widthsFrontTech[1] +
              gap +
              widthsFrontTech[2] +
              gap +
              widthsFrontTech[3] / 2 -
              coords.x * 4,
          }}
          transition={{
            duration: tubes_anim_duration.h,
            ease: "easeInOut",
            delay: tubes_anim_duration.v,
          }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={
            widthsFrontTech[0] +
            gap +
            widthsFrontTech[1] +
            gap +
            widthsFrontTech[2] +
            gap +
            widthsFrontTech[3] / 2
          }
          y={230}
          width="4"
          height="376-230"
          initial={{ height: 0 }}
          animate={{ height: 376 - 230 }}
          transition={{
            duration: tubes_anim_duration.v,
            ease: "easeInOut",
            delay: tubes_anim_duration.h + tubes_anim_duration.v,
          }}
          fill="black"
          opacity="0.1"
        />
      </motion.svg>
    </div>
  );
};
