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

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", isDark ? "#0a0a0a" : "#f6f1e7");
    }
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
                  <Home isDark={isDark} onToggle={() => setIsDark(!isDark)} />
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