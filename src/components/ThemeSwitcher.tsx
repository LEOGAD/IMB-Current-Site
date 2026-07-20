/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sun, Moon } from "lucide-react";

interface ThemeSwitcherProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export default function ThemeSwitcher({ theme, onToggle }: ThemeSwitcherProps) {
  return (
    <button
      id="theme-toggle-btn"
      onClick={onToggle}
      className="p-2.5 rounded-full border border-accent/20 bg-secondary/80 hover:bg-accent/10 text-primary dark:text-secondary dark:bg-charcoal/80 dark:hover:bg-accent/20 transition-all duration-300 pointer-events-auto flex items-center justify-center cursor-pointer relative group"
      aria-label="Toggle luxury theme mode"
    >
      <div className="absolute inset-0 rounded-full bg-accent/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-primary dark:text-secondary group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Sun className="w-4 h-4 text-primary dark:text-secondary group-hover:rotate-45 transition-transform duration-300" />
      )}
    </button>
  );
}
