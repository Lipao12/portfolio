import { forwardRef } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  DiCss3,
  DiJavascript,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

interface TechnologiesProps {
  techsFrontRefs: React.MutableRefObject<any[]>;
}

export const Technologies = forwardRef<HTMLDivElement, TechnologiesProps>(
  ({ techsFrontRefs }) => {
    const technologies = [
      <DiNodejs />,
      <BiLogoPostgresql />,
      <DiCss3 />,
      <DiReact />,
      <BiLogoTypescript />,
      <DiPython />,
      <DiJavascript />,
      <RiTailwindCssFill />,
    ];
    return (
      <div className="flex flex-row gap-4">
        {technologies.map((tech, index) => {
          return (
            <div
              className="border rounded-md px-2 py-1 text-[24px] text-center items-center flex"
              key={index}
              ref={(el) => (techsFrontRefs.current[index] = el)}
            >
              {typeof tech === typeof "" ? (
                <h1 className="text-[15px] ">{tech}</h1>
              ) : (
                tech
              )}
            </div>
          );
        })}
      </div>
    );
  }
);
