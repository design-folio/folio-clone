import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Figma, Laptop, Globe, FileCode, Pencil } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const ToolStack = () => {
  const isMobile = useIsMobile();

  const tools = [
    { name: "Github", icon: Github, link: "#" },
    { name: "Figma", icon: Figma, link: "#" },
    { name: "Mockup", icon: Laptop, link: "#" },
    { name: "Arc Browser", icon: Globe, link: "#" },
    { name: "Code Editor", icon: FileCode, link: "#" },
    { name: "Design", icon: Pencil, link: "#" },
  ];

  // Duplicate tools multiple times for smoother infinite scroll
  const scrollTools = [...tools, ...tools, ...tools];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const scrollAnimation = {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="ds-template-py-16 ds-template-overflow-hidden">
      <h2 className="ds-template-text-2xl ds-template-font-bold ds-template-mb-8 ds-template-text-center">
        Tool Stack
      </h2>
      {isMobile ? (
        <div className="ds-template-relative ds-template-w-full">
          <motion.div
            className="ds-template-flex ds-template-gap-4 ds-template-px-4"
            animate={scrollAnimation}
          >
            {scrollTools.map((Tool, index) => (
              <a
                key={index}
                href={Tool.link}
                className="ds-template-flex ds-template-flex-col ds-template-items-center ds-template-gap-2 ds-template-min-w-[100px]"
              >
                <div className="ds-template-bg-card ds-template-p-4 ds-template-rounded-2xl ds-template-flex ds-template-items-center ds-template-justify-center ds-template-transition-colors hover:ds-template-bg-card/80">
                  <Tool.icon className="ds-template-size-8" />
                </div>
                <span className="ds-template-text-sm ds-template-whitespace-nowrap">
                  {Tool.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="ds-template-flex ds-template-justify-center ds-template-gap-4"
        >
          {tools.map((Tool, index) => (
            <motion.a
              key={index}
              href={Tool.link}
              variants={item}
              whileHover={{ scale: 1.2, y: -8 }}
              className="ds-template-relative ds-template-group"
            >
              <div className="ds-template-bg-card ds-template-p-4 ds-template-rounded-2xl ds-template-flex ds-template-items-center ds-template-justify-center ds-template-transition-colors hover:ds-template-bg-card/80">
                <Tool.icon className="ds-template-size-8" />
              </div>
              <div className="ds-template-absolute ds-template--bottom-6 ds-template-left-1/2 ds-template--translate-x-1/2 ds-template-opacity-0 group-hover:ds-template-opacity-100 ds-template-transition-opacity ds-template-text-sm ds-template-whitespace-nowrap">
                {Tool.name}
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </section>
  );
};
