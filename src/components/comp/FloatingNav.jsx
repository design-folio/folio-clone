import { useState, useEffect } from "react";
import { Home, Briefcase, Award, Wrench } from "lucide-react";

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "spotlight", label: "Projects", icon: Award },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "work", label: "Work", icon: Briefcase },
  ];

  const mobileSections = sections.filter((section) => section.id !== "tools");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = [
        document.getElementById("hero"),
        document.getElementById("featured-projects"),
        document.getElementById("tools"),
        document.getElementById("work-experience"),
      ];

      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        const sectionToNavMapping = {
          hero: "hero",
          "featured-projects": "spotlight",
          tools: "tools",
          "work-experience": "work",
        };
        setActiveSection(
          sectionToNavMapping[currentSection.id] || currentSection.id
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const sectionMapping = {
      hero: "hero",
      spotlight: "featured-projects",
      tools: "tools",
      work: "work-experience",
    };

    const targetId = sectionMapping[id] || id;
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="ds-template-fixed ds-template-left-8 ds-template-top-1/2 ds-template--translate-y-1/2 ds-template-z-50 ds-template-hidden lg:ds-template-block">
        <div className="ds-template-bg-card dark:ds-template-bg-secondary ds-template-border ds-template-border-card-border dark:ds-template-border-secondary-border ds-template-rounded-xl ds-template-p-3 ds-template-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]">
          <div className="ds-template-flex ds-template-flex-col ds-template-gap-4">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`ds-template-group ds-template-flex ds-template-items-center ds-template-gap-4 ds-template-transition-all ${
                  activeSection === id
                    ? "ds-template-opacity-100"
                    : "ds-template-opacity-50 hover:ds-template-opacity-100"
                }`}
              >
                <div
                  className={`ds-template-flex ds-template-items-center ds-template-justify-center ds-template-w-10 ds-template-h-10 ds-template-rounded-full ds-template-transition-colors ${
                    activeSection === id
                      ? "ds-template-bg-foreground dark:ds-template-bg-[#4a4e5d]"
                      : "ds-template-bg-primary dark:ds-template-bg-[#262832] hover:ds-template-bg-primary-hover dark:hover:ds-template-bg-[#4a4e5d]"
                  }`}
                >
                  <Icon
                    className={`ds-template-w-5 ds-template-h-5 ${
                      activeSection === id
                        ? "ds-template-text-background dark:ds-template-text-white"
                        : "ds-template-text-foreground dark:ds-template-text-gray-400"
                    }`}
                  />
                </div>
                <span className="ds-template-text-sm ds-template-opacity-0 group-hover:ds-template-opacity-100 ds-template-transition-opacity ds-template-absolute ds-template-left-full ds-template-pl-4 ds-template-whitespace-nowrap dark:ds-template-text-gray-300">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <nav className="ds-template-fixed ds-template-bottom-8 ds-template-left-1/2 ds-template--translate-x-1/2 ds-template-z-50 lg:ds-template-hidden">
        <div className="ds-template-bg-card dark:ds-template-bg-secondary ds-template-border ds-template-border-card-border dark:ds-template-border-secondary-border ds-template-rounded-xl ds-template-p-3 ds-template-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]">
          <div className="ds-template-flex ds-template-items-center ds-template-gap-4">
            {mobileSections.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`ds-template-group ds-template-flex ds-template-flex-col ds-template-items-center ds-template-transition-all ${
                  activeSection === id
                    ? "ds-template-opacity-100"
                    : "ds-template-opacity-50 hover:ds-template-opacity-100"
                }`}
              >
                <div
                  className={`ds-template-flex ds-template-items-center ds-template-justify-center ds-template-w-10 ds-template-h-10 ds-template-rounded-full ds-template-transition-colors ${
                    activeSection === id
                      ? "ds-template-bg-foreground dark:ds-template-bg-[#4a4e5d]"
                      : "ds-template-bg-primary dark:ds-template-bg-[#262832] hover:ds-template-bg-primary-hover dark:hover:ds-template-bg-[#4a4e5d]"
                  }`}
                >
                  <Icon
                    className={`ds-template-w-5 ds-template-h-5 ${
                      activeSection === id
                        ? "ds-template-text-background dark:ds-template-text-white"
                        : "ds-template-text-foreground dark:ds-template-text-gray-400"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
