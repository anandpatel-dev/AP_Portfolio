
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

const categoryIcons = {
  "Data Analytics": "chart",
  Programming: "code",
  "Tools & Technologies": "wrench",
  Databases: "database",
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">MY TOOLKIT</span>

          <h2>
            Skills &{" "}
            <span className="text-accent">Technologies</span>
          </h2>

          <p>
            The tools I'm learning and applying to practical projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => {
            const iconName =
              categoryIcons[group.category] || "wrench";

            return (
              <article className="skill-card" key={group.category}>
                <div className="skill-card-heading">
                  <div className="skill-category-icon">
                    <Icon name={iconName} size={22} />
                  </div>

                  <h3>{group.category}</h3>
                </div>

                <div className="skill-list">
                  {group.items.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span className="skill-name">
                        {skill.name}
                      </span>

                      <span className="skill-level">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-note">
          <div className="skills-note-icon">
            <Icon name="database" size={21} />
          </div>

          <div className="skills-note-content">
            <h3>Learning through practical projects</h3>

            <p>
              I'm strengthening my analytical skills by working with
              real-world datasets, cleaning data, writing queries,
              and building interactive dashboards.
            </p>
          </div>

          <a
            className="skills-note-link"
            href="#projects"
            aria-label="Explore my projects"
          >
            <Icon name="arrow" size={21} />
          </a>
        </div>
      </div>
    </section>
  );
}
