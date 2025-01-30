import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <footer className="ds-template-py-16 ds-template-border-t ds-template-border-secondary-border">
      <div className="ds-template-container ds-template-max-w-3xl ds-template-mx-auto ds-template-px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="ds-template-flex ds-template-flex-col ds-template-items-center ds-template-gap-8"
        >
          <h2 className="ds-template-text-4xl sm:ds-template-text-5xl ds-template-font-bold ds-template-text-foreground ds-template-max-w-2xl ds-template-text-center ds-template-leading-tight">
            Let's work together
          </h2>

          <div className="ds-template-flex ds-template-flex-wrap ds-template-gap-4 ds-template-justify-center">
            <Button
              size="lg"
              variant="outline"
              className="ds-template-text-lg ds-template-px-8"
            >
              <Download className="ds-template-mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="ds-template-flex ds-template-items-center ds-template-gap-8 ds-template-text-foreground/60 dark:ds-template-text-gray-400">
            <a
              href="https://instagram.com"
              className="hover:ds-template-text-foreground dark:hover:ds-template-text-white ds-template-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
              <span className="ds-template-sr-only">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              className="hover:ds-template-text-foreground dark:hover:ds-template-text-white ds-template-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
              <span className="ds-template-sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:ds-template-text-foreground dark:hover:ds-template-text-white ds-template-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
              <span className="ds-template-sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              className="hover:ds-template-text-foreground dark:hover:ds-template-text-white ds-template-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
              <span className="ds-template-sr-only">Github</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
