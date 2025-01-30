import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const WorkShowcase = () => {
  const projects = [
    {
      title: "MyCaptain Course Platform",
      description:
        "Designed and developed the course overview page with interactive calendar, project submission, and progress tracking features",
      image: "/lovable-uploads/583822bc-e5e5-4852-ac18-b8b612b58f88.png",
      link: "#",
    },
    {
      title: "MyCaptain Profile Builder",
      description:
        "Built a responsive profile creation flow with multi-step form validation and real-time preview",
      image: "/lovable-uploads/a74665b6-a9d5-449a-8d53-68ecf5d99e46.png",
      link: "#",
    },
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ImageWithPreload = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div className="ds-template-relative ds-template-w-full ds-template-h-full">
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              key="loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="ds-template-absolute ds-template-inset-0 ds-template-bg-secondary/50"
            />
          )}
        </AnimatePresence>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          src={src}
          alt={alt}
          className="ds-template-w-full ds-template-h-full ds-template-object-cover ds-template-object-center group-hover:ds-template-scale-105 ds-template-transition-transform ds-template-duration-300"
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        variants={item}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="ds-template-group ds-template-rounded-3xl ds-template-bg-card ds-template-overflow-hidden ds-template-relative ds-template-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]"
      >
        <div
          className="ds-template-pointer-events-none ds-template-absolute ds-template--inset-px ds-template-opacity-0 group-hover:ds-template-opacity-100 ds-template-transition-opacity ds-template-duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.1), transparent 40%)`,
          }}
        />
        <div className="ds-template-aspect-[4/3] ds-template-overflow-hidden ds-template-bg-secondary/50 ds-template-relative">
          <ImageWithPreload src={project.image} alt={project.title} />
          <a
            href={project.link}
            className="ds-template-absolute ds-template-top-6 ds-template-right-6 ds-template-size-14 ds-template-rounded-full ds-template-bg-tertiary ds-template-flex ds-template-items-center ds-template-justify-center ds-template-opacity-0 ds-template-scale-75 group-hover:ds-template-opacity-100 group-hover:ds-template-scale-100 ds-template-transition-all ds-template-duration-300 hover:ds-template-bg-tertiary-hover"
          >
            <ArrowUpRight className="ds-template-size-6 ds-template-text-white" />
          </a>
        </div>
        <div className="ds-template-p-8 ds-template-pb-10">
          <h3 className="ds-template-text-2xl ds-template-font-semibold ds-template-mb-3 ds-template-leading-tight">
            {project.title}
          </h3>
          <p className="ds-template-text-gray-400 ds-template-line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="ds-template-pt-0 ds-template-pb-16">
      <h2 className="ds-template-text-2xl ds-template-font-bold ds-template-mb-8">
        Featured Projects
      </h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="ds-template-grid ds-template-grid-cols-1 md:ds-template-grid-cols-2 ds-template-gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default WorkShowcase;
