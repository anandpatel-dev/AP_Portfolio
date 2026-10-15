
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

const highlights = [
  {
    icon: "graduation",
    title: "Academic Background",
    description: "Computer Science & Design",
  },
  {
    icon: "target",
    title: "Career Focus",
    description: "Data Analytics & Business Intelligence",
  },
  {
    icon: "briefcase",
    title: "Current Goal",
    description: "Data Analyst Internship",
  },
];

export default function About() {
  const { about, education, profile } = portfolioData;
  const degree = education[0];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>

          <h2>
            About <span className="text-accent">Me</span>
          </h2>

          <p>
            My background, interests, and the direction I'm working toward.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <div className="about-monogram" aria-hidden="true">
              {profile.initials}
            </div>

            <h3>{about.heading}</h3>

            <p className="about-description">
              {about.description}
            </p>

            <div className="about-interests">
              {about.interests.map((interest) => (
                <span className="interest-tag" key={interest}>
                  {interest}
                </span>
              ))}
            </div>

            <a className="text-link" href="#projects">
              Explore my work
              <Icon name="arrow" size={17} />
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map(({ icon, title, description }) => (
              <article className="highlight-card" key={title}>
                <div className="highlight-icon">
                  <Icon name={icon} size={22} />
                </div>

                <div>
                  <h4>{title}</h4>

                  <p>
                    {title === "Academic Background"
                      ? `${degree.degree} in ${degree.specialization}`
                      : description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

