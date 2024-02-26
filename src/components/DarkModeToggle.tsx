"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative rounded-md p-4 sm:p-5 border flex items-center justify-center ${
        darkMode ? "border-yellow-300" : ""
      }`}
    >
      <SunIcon
        className={`absolute text-yellow-300 h-4 w-4 sm:h-5 sm:w-5 icon ${
          darkMode ? "show" : "hide"
        }`}
      />
      <MoonIcon
        className={`absolute h-4 w-4 sm:h-5 sm:w-5 icon ${
          darkMode ? "hide" : "show"
        }`}
      />
    </button>
  );
}
