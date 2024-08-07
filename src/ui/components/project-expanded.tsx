import { motion } from "framer-motion";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

interface ProjectExtendedProps {
  project: any;
  setSelectedId: any;
}

// Componentes personalizados para renderização de Markdown
const CustomComponents: any = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl font-bold">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-2xl font-bold">{children}</h2>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-base mb-2">{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside ml-4">{children}</ul>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
  code: ({
    inline,
    className,
    children,
  }: {
    inline: boolean;
    className?: string;
    children: ReactNode;
  }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <pre className={`bg-gray-100 p-2 rounded ${className}`}>
        <code className={`language-${match[1]}`}>{children}</code>
      </pre>
    ) : (
      <code className={`bg-gray-100 p-1 rounded ${className}`}>{children}</code>
    );
  },
};

export const ProjectExtended = ({
  project,
  setSelectedId,
}: ProjectExtendedProps) => {
  return (
    <motion.div
      layoutId="expanded-card"
      className="bg-white rounded-lg p-4 max-w-2xl w-full my-5 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4 max-h-[calc(100vh-200px)]">
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <ReactMarkdown
          className="text-lg"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={CustomComponents}
        >
          {project.full_description}
        </ReactMarkdown>
      </div>
      <motion.button
        className="absolute top-4 right-4 text-2xl"
        onClick={() => setSelectedId(null)}
      >
        &times;
      </motion.button>
    </motion.div>
  );
};
