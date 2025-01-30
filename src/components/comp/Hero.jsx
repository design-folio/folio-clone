import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const skills = [
    "Product Design",
    "UI/UX",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Frontend Development",
    "React",
    "TypeScript",
    "Figma",
    "Design Thinking",
  ];

  // Duplicate skills for smooth infinite scroll
  const scrollSkills = [...skills, ...skills];

  return (
    <section className="ds-template-flex ds-template-flex-col ds-template-items-center ds-template-text-center ds-template-py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="ds-template-w-24 ds-template-h-24 ds-template-mb-6 ds-template-relative ds-template-rounded-lg">
          <div className="ds-template-relative ds-template-w-full ds-template-h-full">
            <AnimatePresence>
              {!isLoaded && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ds-template-absolute ds-template-inset-0 ds-template-bg-secondary/50 ds-template-animate-pulse ds-template-rounded-lg"
                />
              )}
            </AnimatePresence>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
              alt="Profile"
              className="ds-template-rounded-lg ds-template-w-full ds-template-h-full ds-template-object-cover"
              loading="eager"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            />
          </div>
        </Avatar>
      </motion.div>

      <motion.h1
        className="ds-template-text-4xl ds-template-font-bold ds-template-mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Hey there! I'm Shai
      </motion.h1>

      <motion.p
        className="dark:ds-template-text-gray-400 ds-template-text-gray-600 ds-template-max-w-xl ds-template-mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Product Designer with over 7+ years of experience. A unicorn designer
        who can both design and code. Designed experiences in sports, medtech,
        gig economy, fintech, and designed gamified learning experiences.
      </motion.p>

      <div className="ds-template-w-full ds-template-overflow-hidden ds-template-relative ds-template-py-4 before:ds-template-absolute before:ds-template-left-0 before:ds-template-top-0 before:ds-template-z-10 before:ds-template-w-20 before:ds-template-h-full before:ds-template-bg-gradient-to-r before:ds-template-from-background before:ds-template-to-transparent after:ds-template-absolute after:ds-template-right-0 after:ds-template-top-0 after:ds-template-z-10 after:ds-template-w-20 after:ds-template-h-full after:ds-template-bg-gradient-to-l after:ds-template-from-background after:ds-template-to-transparent">
        <motion.div
          className="ds-template-flex ds-template-gap-4 ds-template-whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {scrollSkills.map((skill, index) => (
            <span
              key={index}
              className="ds-template-bg-card ds-template-px-4 ds-template-py-2 ds-template-rounded-full ds-template-text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
