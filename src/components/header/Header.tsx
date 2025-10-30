import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#powerOfData" },
  { label: "Customers", href: "#customers" },
  { label: "Revolution", href: "#cta-banner" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const { theme, toggleTheme: onThemeToggle } = useTheme();

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close search on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setShowSearch(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/favicon.ico" alt="Zyvo Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${
                activeSection === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions" ref={searchRef}>
          {/* Theme Toggle Button */}
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          {/* Search Button */}
          <div className={`search-wrapper ${showSearch ? "active" : ""}`}>
            <button
              className="search-btn"
              aria-label="Search"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="9" cy="9" r="7" strokeWidth="2" />
                <path d="M14 14l5 5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {showSearch && (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                autoFocus
              />
            )}
          </div>

          {/* Sign In (Desktop only) */}
          <button
            className="signin-btn desktop-only"
            onClick={() => handleNavigate("/signin")}
          >
            Sign In
          </button>

          {/* Hamburger (Mobile only) */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Sidebar (mobile) */}
      <div
        className={`backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button
          className="close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <nav className="side-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`side-link ${
                activeSection === link.href ? "active" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="side-cta" onClick={() => handleNavigate("/signin")}>
          Sign In
        </button>
      </aside>
    </header>
  );
};

export default Header;
