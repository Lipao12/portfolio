import { motion } from "framer-motion";

interface TubesFontendProps {
  coords: { x: number; y: number };
  widthsTech: number[];
  tubes_anim_duration: { v: number; h: number };
}

export const TubesFontend = ({
  coords,
  widthsTech,
  tubes_anim_duration,
}: TubesFontendProps) => {
  const gap = 16;

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
          width={
            widthsTech[1] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] / 2 -
            coords.x
          }
          height="4"
          initial={{ width: 0 }}
          animate={{
            width:
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[2] / 2 -
              coords.x,
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
          x={widthsTech[1] + gap + widthsTech[1] + gap + widthsTech[2] / 2}
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
            widthsTech[0] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] +
            gap +
            widthsTech[3] / 2 -
            coords.x * 2
          }
          height="4"
          initial={{ width: 0 }}
          animate={{
            width:
              widthsTech[0] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[2] +
              gap +
              widthsTech[3] / 2 -
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
            widthsTech[0] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] +
            gap +
            widthsTech[3] / 2
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
            widthsTech[0] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] +
            gap +
            widthsTech[3] +
            gap +
            widthsTech[4] / 2 -
            coords.x * 3
          }
          height="4"
          initial={{ width: 0 }}
          animate={{
            width:
              widthsTech[0] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[2] +
              gap +
              widthsTech[3] +
              gap +
              widthsTech[4] / 2 -
              coords.x * 3,
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
            widthsTech[0] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] +
            gap +
            widthsTech[3] +
            gap +
            widthsTech[4] / 2
          }
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
            widthsTech[0] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] +
            gap +
            widthsTech[3] +
            gap +
            widthsTech[4] +
            gap +
            widthsTech[5] +
            gap +
            widthsTech[6] +
            gap +
            widthsTech[7] / 2 -
            coords.x * 4
          }
          height="4"
          initial={{ width: 0 }}
          animate={{
            width:
              widthsTech[0] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[2] +
              gap +
              widthsTech[3] +
              gap +
              widthsTech[4] +
              gap +
              widthsTech[5] +
              gap +
              widthsTech[6] +
              gap +
              widthsTech[7] / 2 -
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
            widthsTech[0] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] +
            gap +
            widthsTech[3] +
            gap +
            widthsTech[4] +
            gap +
            widthsTech[5] +
            gap +
            widthsTech[6] +
            gap +
            widthsTech[7] / 2
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
