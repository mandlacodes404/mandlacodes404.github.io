// src/components/layout/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 text-sm text-text-secondary">
      <Link to="/" className="text-text-primary font-medium">
        Mandla Mahlangu
      </Link>
      <div className="flex gap-6">
        <a href="#projects" className="hover:text-text-primary transition-colors">
          Work
        </a>
        <a href="#about" className="hover:text-text-primary transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-text-primary transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;