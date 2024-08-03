import { motion } from "framer-motion";

interface TubesFontendProps {
  coords: { x: number; y: number };
  widthsTech: number[];
  tubes_anim_duration: { v: number; h: number };
}

export const TubesBackend = ({
  coords,
  widthsTech,
  tubes_anim_duration,
}: TubesFontendProps) => {
  const gap = 16;
  const offset = 475.45 - coords.x * 5;
  return (
    <div className="">
      <motion.svg
        className={"w-full h-full"}
        viewBox="0 0 480 380"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tubo 1 */}
        <motion.rect
          x={offset + coords.x}
          y={0}
          width="4"
          height="320"
          initial={{ height: 0 }}
          animate={{ height: 320 }}
          transition={{ duration: tubes_anim_duration.v, ease: "easeInOut" }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={offset + coords.x}
          y="320"
          width={
            widthsTech[1] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[1] +
            gap +
            widthsTech[2] -
            coords.x
          }
          height="4"
          initial={{ width: 0, x: 0 }}
          animate={{
            width:
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[2] -
              coords.x,
            x: -(
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[1] +
              gap +
              widthsTech[2] -
              coords.x -
              4
            ),
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
            475 -
            27 -
            (widthsTech[0] +
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
              widthsTech[7] / 2)
          }
          y={320}
          width="4"
          height="75"
          initial={{ height: 0 }}
          animate={{ height: 55 }}
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
          x={offset + coords.x * 2}
          y={0}
          width="4"
          height="200"
          initial={{ height: 0 }}
          animate={{ height: 200 }}
          transition={{ duration: tubes_anim_duration.v, ease: "easeInOut" }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          x={offset + coords.x * 2}
          y="200"
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
            widthsTech[7] / 2 -
            coords.x * 2 +
            4
          }
          height="4"
          initial={{ width: 0, x: 0 }}
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
              widthsTech[7] / 2 -
              coords.x * 2 +
              4,
            x: -(
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
              widthsTech[7] / 2 -
              coords.x * 2
            ),
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
            475 -
            27 -
            (widthsTech[0] +
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
              widthsTech[7] / 2)
          }
          y="200"
          width="4"
          height={376 - 100}
          initial={{ height: 0 }}
          animate={{ height: 376 - 200 }}
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
          x={offset + coords.x * 3}
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
          x={offset + coords.x * 3}
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
            widthsTech[4] +
            gap +
            widthsTech[5] +
            gap +
            widthsTech[7] / 2 -
            coords.x * 2 +
            4
          }
          height="4"
          initial={{ width: 0, x: 0 }}
          animate={{
            width:
              widthsTech[4] +
              gap +
              widthsTech[4] +
              gap +
              widthsTech[5] +
              gap +
              widthsTech[7] / 2 -
              coords.x * 3 -
              8,
            x: -(
              widthsTech[4] +
              gap +
              widthsTech[4] +
              gap +
              widthsTech[5] +
              gap +
              widthsTech[7] / 2 -
              coords.x * 3 -
              12
            ),
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
          x={offset + coords.x * 4}
          y={0}
          width="4"
          height="274"
          initial={{ height: 0 }}
          animate={{ height: 274 }}
          transition={{ duration: tubes_anim_duration.v, ease: "easeInOut" }}
          fill="black"
          opacity="0.1"
        />
        <motion.rect
          className={""}
          x={offset + coords.x * 4}
          y="270"
          width={widthsTech[7] + gap + widthsTech[6] / 2}
          height="4"
          initial={{ width: 0, x: 0 }}
          animate={{
            width: widthsTech[7] + gap + widthsTech[6] / 2,
            x: -(widthsTech[7] + gap + widthsTech[6] / 2),
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
          x={475 - 27 - widthsTech[7] - gap - widthsTech[6] / 2}
          y={270}
          width="4"
          height="376-270"
          initial={{ height: 0 }}
          animate={{ height: 376 - 270 }}
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
