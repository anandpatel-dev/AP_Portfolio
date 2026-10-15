
import { useState } from "react";
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Education",
  "Contact",
];

export default function Navbar({
  activeSection = "Home",
  onNavigate = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { name, initials } = portfolioData.profile;

  function handleNavigate(section) {
    onNavigate(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button
          type="button"
          className="brand"
          aria-label={`${name} - Home`}
          onClick={() => handleNavigate("Home")}
        >
          <span className="brand-icon">
            <Icon name="chart" size={23} />
          </span>

          <span className="brand-name">
            {name}
            <small>{initials} / PORTFOLIO</small>
          </span>
        </button>

        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <Icon name="close" size={22} />
          ) : (
            <Icon name="menu" size={22} />
          )}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${
            menuOpen ? "nav-links-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((section) => (
            <button
              type="button"
              key={section}
              className={`nav-link ${
                activeSection === section ? "nav-link-active" : ""
              }`}
              aria-current={
                activeSection === section ? "page" : undefined
              }
              onClick={() => handleNavigate(section)}
            >
              {section}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="nav-contact-button"
          onClick={() => handleNavigate("Contact")}
        >
          Let's Talk
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </header>
  );
}
