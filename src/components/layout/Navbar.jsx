// src/components/layout/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar({ isDark, onToggle }) {
  return (
    <nav className="flex justify-between items-center px-10 py-6 text-sm text-text-secondary">
      <Link to="/" className="text-text-primary font-medium">
        Mandla Mahlangu
      </Link>
      <div className="flex gap-6 items-center">
        <a href="#projects" className="hover:text-text-primary transition-colors">
          Work
        </a>
        <a href="#about" className="hover:text-text-primary transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-text-primary transition-colors">
          Contact
        </a>
        <button
          type="button"
          onClick={onToggle}
          aria-label="Toggle light and dark mode"
          className="text-text-secondary hover:text-text-primary transition-colors"
        >
          <i className={isDark ? "ti ti-sun" : "ti ti-moon"} aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;