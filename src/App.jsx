// src/App.jsx

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className="bg-bg min-h-screen transition-colors">
        <Routes>
          <Route
            path="/"
            element={
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Sidebar isDark={isDark} onToggle={() => setIsDark(!isDark)} />
                </div>
                <div className="md:w-1/2">
                  <Home />
                </div>
              </div>
            }
          />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;