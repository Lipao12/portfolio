import { forwardRef } from "react";

interface TechnologiesProps {
  techsFrontRefs: React.MutableRefObject<any[]>;
}

export const Technologies = forwardRef<HTMLDivElement, TechnologiesProps>(
  ({ techsFrontRefs }, ref) => {
    const technologies = ["JavaScript", "React", "TypeScript", "Tailwind CSS"];
    return (
      <div className="flex flex-row gap-4">
        {technologies.map((tech, index) => {
          return (
            <div
              className="border rounded-md px-3 py-2"
              key={index}
              ref={(el) => (techsFrontRefs.current[index] = el)}
            >
              <h1 className="text-[18px] ">{tech}</h1>
            </div>
          );
        })}
      </div>
    );
  }
);
