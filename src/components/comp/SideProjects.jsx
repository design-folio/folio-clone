import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const SideProjects = () => {
  const projects = [
    { name: "White Illustration Pack", icon: "🎨" },
    { name: "500+ Gradient Pack", icon: "🎯" },
    { name: "Case Study Template", icon: "📝" },
    { name: "Clean Portfolio Template", icon: "🎨" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.15,
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

  const ref = useRef(null);
  const [isInView, refInView] = useInView({ once: true, margin: "-100px" });

  return (
    <section className="ds-template-py-16">
      <h2 className="ds-template-text-2xl ds-template-font-bold ds-template-mb-8">
        Side Projects
      </h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="ds-template-space-y-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="ds-template-bg-card ds-template-p-4 ds-template-rounded-lg ds-template-flex ds-template-items-center ds-template-justify-between hover:ds-template-bg-card/80 ds-template-transition-colors ds-template-cursor-pointer ds-template-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]"
          >
            <div className="ds-template-flex ds-template-items-center ds-template-gap-3">
              <span className="ds-template-text-2xl">{project.icon}</span>
              <span>{project.name}</span>
            </div>
            <span className="ds-template-text-gray-400">→</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
