import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Working with Shai was an absolute pleasure. Their attention to detail and innovative approach to design challenges truly set them apart.",
    expandedContent:
      "The project was delivered ahead of schedule and exceeded all our expectations. Shai's ability to understand our business needs and translate them into beautiful, functional designs was remarkable. They brought fresh perspectives and creative solutions to every challenge we faced.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    content:
      "Shai's ability to balance user needs with business objectives resulted in a product that exceeded our expectations.",
    expandedContent:
      "Their strategic thinking and user-centered approach helped us achieve a 40% increase in user engagement. The redesigned interface not only looks beautiful but has significantly improved our conversion rates and user satisfaction scores.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "DesignLab",
    content:
      "The design system Shai created has become the foundation of our product's visual language. Exceptional work!",
    expandedContent:
      "The implementation of the design system reduced our design-to-development time by 60% and ensured consistency across all our products. Shai's documentation and training sessions made the adoption process smooth for our entire team.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Lead",
    company: "InnovateTech",
    content:
      "Rare to find a designer who understands both design and development. Shai bridges that gap perfectly.",
    expandedContent:
      "Their technical understanding made collaboration with our development team seamless. The component specifications were precise, and their ability to discuss technical constraints while maintaining design quality was invaluable.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Research Lead",
    company: "UserFirst",
    content:
      "Shai's research-driven approach to design challenges helped us create truly user-centered solutions.",
    expandedContent:
      "The depth of user research and analysis they conducted provided invaluable insights that shaped our product strategy. Their ability to synthesize complex user feedback into actionable design decisions was impressive.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Owner",
    company: "FinTech Solutions",
    content:
      "The impact of Shai's work on our user engagement metrics was remarkable. A true professional.",
    expandedContent:
      "We saw a 45% increase in user retention within the first month after launch. Their understanding of financial products and user behavior in the fintech space brought unique value to our project.",
  },
];

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState([]);
  const isMobile = useIsMobile();
  const visibleTestimonials = showMore
    ? testimonials
    : testimonials.slice(0, 4);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= visibleTestimonials.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? visibleTestimonials.length - 1 : prev - 1
    );
  };

  const toggleExpand = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section className="ds-template-py-16">
      <h2 className="ds-template-text-3xl ds-template-font-bold ds-template-mb-12 ds-template-text-center">
        What People Say
      </h2>

      <div
        className={`ds-template-relative ${
          isMobile
            ? "ds-template-px-4"
            : "ds-template-grid ds-template-grid-cols-2 ds-template-gap-6 ds-template-max-w-4xl ds-template-mx-auto ds-template-px-4"
        }`}
      >
        {isMobile ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: 2,
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  rotate: 4,
                  transition: { duration: 0.2 },
                }}
                className="ds-template-bg-card ds-template-border ds-template-border-card-border ds-template-p-6 ds-template-rounded-lg ds-template-shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <p className="dark:ds-template-text-gray-400 ds-template-text-gray-600">
                  {visibleTestimonials[currentIndex].content}
                  {!expandedCards.includes(
                    visibleTestimonials[currentIndex].id
                  ) && (
                    <button
                      onClick={() =>
                        toggleExpand(visibleTestimonials[currentIndex].id)
                      }
                      className="ds-template-ml-1 ds-template-text-foreground/80 hover:ds-template-text-foreground ds-template-inline-flex ds-template-items-center ds-template-gap-1"
                    >
                      View More
                      <ChevronDown className="ds-template-h-3 ds-template-w-3" />
                    </button>
                  )}
                </p>

                <AnimatePresence>
                  {expandedCards.includes(
                    visibleTestimonials[currentIndex].id
                  ) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ds-template-overflow-hidden"
                    >
                      <p className="dark:ds-template-text-gray-400 ds-template-text-gray-600 ds-template-mt-4">
                        {visibleTestimonials[currentIndex].expandedContent}
                        <button
                          onClick={() =>
                            toggleExpand(visibleTestimonials[currentIndex].id)
                          }
                          className="ds-template-ml-1 ds-template-block ds-template-mt-2 ds-template-text-foreground/80 hover:ds-template-text-foreground ds-template-inline-flex ds-template-items-center ds-template-gap-1"
                        >
                          Show Less
                          <ChevronUp className="ds-template-h-3 ds-template-w-3" />
                        </button>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="ds-template-flex ds-template-items-center ds-template-gap-2 ds-template-mt-4">
                  <div className="ds-template-flex-1">
                    <h4 className="ds-template-font-semibold">
                      {visibleTestimonials[currentIndex].name}
                    </h4>
                    <p className="ds-template-text-sm dark:ds-template-text-gray-400 ds-template-text-gray-600">
                      {visibleTestimonials[currentIndex].role} at{" "}
                      {visibleTestimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="ds-template-flex ds-template-justify-center ds-template-gap-4 ds-template-mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="ds-template-rounded-full"
              >
                <ChevronLeft className="ds-template-h-4 ds-template-w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="ds-template-rounded-full"
              >
                <ChevronRight className="ds-template-h-4 ds-template-w-4" />
              </Button>
            </div>
          </>
        ) : (
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 === 0 ? 2 : -2,
                }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{
                  rotate: index % 2 === 0 ? 4 : -4,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="ds-template-bg-card ds-template-border ds-template-border-card-border ds-template-p-6 ds-template-rounded-lg ds-template-shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:ds-template-shadow-[0_4px_12px_rgba(0,0,0,0.06)] ds-template-transition-shadow ds-template-duration-300"
              >
                <p className="dark:ds-template-text-gray-400 ds-template-text-gray-600">
                  {testimonial.content}
                  {!expandedCards.includes(testimonial.id) && (
                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="ds-template-ml-1 ds-template-text-foreground/80 hover:ds-template-text-foreground ds-template-inline-flex ds-template-items-center ds-template-gap-1"
                    >
                      View More
                      <ChevronDown className="ds-template-h-3 ds-template-w-3" />
                    </button>
                  )}
                </p>

                <AnimatePresence>
                  {expandedCards.includes(testimonial.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ds-template-overflow-hidden"
                    >
                      <p className="dark:ds-template-text-gray-400 ds-template-text-gray-600 ds-template-mt-4">
                        {testimonial.expandedContent}
                        <button
                          onClick={() => toggleExpand(testimonial.id)}
                          className="ds-template-ml-1 ds-template-block ds-template-mt-2 ds-template-text-foreground/80 hover:ds-template-text-foreground ds-template-inline-flex ds-template-items-center ds-template-gap-1"
                        >
                          Show Less
                          <ChevronUp className="ds-template-h-3 ds-template-w-3" />
                        </button>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="ds-template-flex ds-template-items-center ds-template-gap-2 ds-template-mt-4">
                  <div className="ds-template-flex-1">
                    <h4 className="ds-template-font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="ds-template-text-sm dark:ds-template-text-gray-400 ds-template-text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {!isMobile && testimonials.length > 4 && (
        <motion.div
          className="ds-template-text-center ds-template-mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="outline" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "View More"}
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default Testimonials;
