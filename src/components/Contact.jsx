
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

export default function Contact() {
  const { profile, contact } = portfolioData;

  const hasContactDetails =
    profile.email || profile.linkedin || profile.github;

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-content">
            <span className="section-eyebrow">
              HAVE AN OPPORTUNITY?
            </span>

            <h2>
              {contact.heading}
              <span className="text-accent">.</span>
            </h2>

            <p>{contact.message}</p>

            <a
              className="btn btn-primary"
              href={
                profile.email
                  ? `mailto:${profile.email}`
                  : "#contact-links"
              }
            >
              Get in Touch
              <Icon name="arrowRight" size={17} />
            </a>
          </div>

          <div className="contact-links" id="contact-links">
            {profile.email && (
              <a
                className="contact-link-card"
                href={`mailto:${profile.email}`}
              >
                <span className="contact-link-icon">
                  <Icon name="mail" size={21} />
                </span>

                <span>
                  <small>Email</small>
                  <strong>{profile.email}</strong>
                </span>

                <Icon name="arrow" size={18} />
              </a>
            )}

            {profile.linkedin && (
              <a
                className="contact-link-card"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-link-icon">
                  <span className="social-text-icon">in</span>
                </span>

                <span>
                  <small>LinkedIn</small>
                  <strong>Connect professionally</strong>
                </span>

                <Icon name="arrow" size={18} />
              </a>
            )}

            {profile.github && (
              <a
                className="contact-link-card"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-link-icon">
                  <Icon name="github" size={21} />
                </span>

                <span>
                  <small>GitHub</small>
                  <strong>Explore my repositories</strong>
                </span>

                <Icon name="arrow" size={18} />
              </a>
            )}

            {!hasContactDetails && (
              <p>
                Add your email, LinkedIn, or GitHub URL in
                portfolioData.js to display your contact links here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
