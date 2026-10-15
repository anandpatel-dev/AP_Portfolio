
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

export default function Certificates() {
  const { certifications } = portfolioData;

  return (
    <section className="section certificates-section" id="certificates">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            LEARNING & DEVELOPMENT
          </span>

          <h2>
            Certifications &{" "}
            <span className="text-accent">Courses</span>
          </h2>

          <p>
            Courses and certifications supporting my technical
            learning and professional development.
          </p>
        </div>

        <div className="certificates-grid">
          {certifications.map((certificate) => (
            <article
              className="certificate-card"
              key={`${certificate.name}-${certificate.issuer}`}
            >
              <div className="certificate-icon">
                <Icon name="award" size={25} />
              </div>

              <div className="certificate-content">
                <h3>{certificate.name}</h3>

                <p className="certificate-issuer">
                  {certificate.issuer ||
                    "Issuing organization not added"}
                </p>

                {certificate.date && (
                  <p className="certificate-date">
                    {certificate.date}
                  </p>
                )}

                {certificate.verified && (
                  <span className="certificate-verified">
                    <Icon name="shield-check" size={15} />
                    Verified
                  </span>
                )}

                {certificate.credentialUrl && (
                  <a
                    className="certificate-link"
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                    <Icon name="external" size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
