import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(() => getInitialTheme());

  // Update theme class in DOM and localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="ds-template-w-8 ds-template-h-8"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="ds-template-h-4 ds-template-w-4" />
      ) : (
        <Moon className="ds-template-h-4 ds-template-w-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
