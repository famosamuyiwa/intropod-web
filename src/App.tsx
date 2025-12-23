import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import markImage from "./assets/images/mark.png";
import Contact from "./pages/Contact";
import DeleteAccount from "./pages/DeleteAccount";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("intropod-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hash, pathname]);

  return null;
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("intropod-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" to="/" aria-label="Intropod home">
            <img src={markImage} alt="Intropod logo" />
            <span>Intropod</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link to="/#features">Features</Link>
            <Link to="/#memory">Memory Lane</Link>
            <Link to="/#quests">Quests</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="header-actions">
            <Link className="button ghost" to="/contact">
              Get the app
            </Link>
            <button
              className="button toggle"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? "Light" : "Dark"} mode
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link className="logo" to="/">
              <img src={markImage} alt="Intropod logo" />
              <span>Intropod</span>
            </Link>
            <p className="footer-copy">
              A quiet home for your photos, memories, and small rituals.
            </p>
          </div>
          <div className="footer-links">
            <Link to="/contact">Contact Us</Link>
            <Link to="/delete-account">Delete Account</Link>
            <Link to="/terms">Terms and Conditions</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
          <div className="footer-meta">
            <p>Built with care for Intropod.</p>
            <p>Copyright 2025 Intropod.</p>
          </div>
        </div>
      </footer>
      <ScrollToHash />
    </div>
  );
}
