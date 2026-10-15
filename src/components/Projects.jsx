
import { useMemo, useState } from "react";
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

const categories = [
  "All Projects",
  "Data Analytics",
  "Software Development & AI",
  "AI & Social Impact",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const projects = portfolioData.projects;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory, projects]);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">MY WORK</span>

          <h2>
            Projects &{" "}
            <span className="text-accent">Experience</span>
          </h2>

          <p>
            A collection of my work across data analytics,
            software development, and AI.
          </p>
        </div>

        <div
          className="project-filters"
          aria-label="Filter projects"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`project-filter ${
                activeCategory === category
                  ? "project-filter-active"
                  : ""
              }`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <div className="project-category-icon">
                  <Icon name="layers" size={23} />
                </div>

                <span
                  className={`project-status project-status-${(
                    project.status || "in-progress"
                  )
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {project.status || "In Progress"}
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {project.highlights?.length > 0 && (
                <div className="project-highlights">
                  <h4>Key Features & Focus</h4>

                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies?.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" size={17} />
                    GitHub
                    <Icon name="arrow" size={15} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="external" size={16} />
                    Live Demo
                    <Icon name="arrow" size={15} />
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="project-links-placeholder">
                    Project details coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}