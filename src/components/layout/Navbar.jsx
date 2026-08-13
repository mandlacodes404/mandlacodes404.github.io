// src/components/layout/Navbar.jsx
//
// Shown at the top of every page. Clicking the name always returns
// to the home page, from anywhere on the site.

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Mandla Mahlangu</Link>
    </nav>
  );
}

export default Navbar;