
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">MY BACKGROUND</span>

          <h2>
            Education &{" "}
            <span className="text-accent">Learning</span>
          </h2>

          <p>
            My academic foundation and continued technical learning.
          </p>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <article
              className="education-card"
              key={`${item.institution}-${item.degree}-${index}`}
            >
              <div className="education-icon">
                <Icon name="graduation" size={27} />
              </div>

              <div className="education-content">
                <span className="education-label">
                  ACADEMIC QUALIFICATION
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.specialization}</h4>

                <p className="education-institution">
                  <Icon name="location" size={16} />
                  {item.institution}
                </p>

                {item.graduationYear && (
                  <p className="education-year">
                    <Icon name="calendar" size={16} />
                    {item.graduationYear}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="education-note">
          <span className="education-note-icon">
            <Icon name="graduation" size={21} />
          </span>

          <div>
            <h3>Continuous Learning</h3>
            <p>
              Building practical skills through hands-on projects,
              technical courses, and independent learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
