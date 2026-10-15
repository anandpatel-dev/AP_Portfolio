
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            Open to Opportunities
          </div>

          <p className="hero-greeting">HELLO, I'M</p>

          <h1>
            {profile.name}
            <span className="hero-highlight">
              {profile.title}
              <span className="hero-period">.</span>
            </span>
          </h1>

          <h2 className="hero-subtitle">{profile.subtitle}</h2>

          <p className="hero-description">
            {profile.introduction}
          </p>

          <div className="hero-location">
            <Icon name="location" size={17} />
            <span>{profile.location}</span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore My Projects
              <Icon name="arrowRight" size={18} />
            </a>

            <a
              className="btn btn-secondary"
              href={profile.resume || "#contact"}
              download={Boolean(profile.resume)}
            >
              Download Resume
              <Icon name="download" size={18} />
            </a>
          </div>

          <div className="hero-socials">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Icon name="github" size={20} />
                <span>GitHub</span>
              </a>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <span className="social-text-icon">in</span>
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="analytics-card">
            <div className="analytics-card-header">
              <div>
                <span className="analytics-eyebrow">
                  DATA ANALYTICS
                </span>
                <h3>Insights through data</h3>
              </div>

              <div className="analytics-icon">
                <Icon name="arrowDown" size={22} />
              </div>
            </div>

            <div className="analytics-chart">
              <div className="chart-y-labels">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
              </div>

              <svg
                viewBox="0 0 340 180"
                role="img"
                aria-label="Illustrative analytics line chart"
                className="chart-svg"
              >
                {[20, 60, 100, 140].map((y) => (
                  <line
                    key={y}
                    x1="8"
                    y1={y}
                    x2="330"
                    y2={y}
                    className="chart-grid-line"
                  />
                ))}

                <defs>
                  <linearGradient
                    id="heroChartFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#4f46e5"
                      stopOpacity="0.22"
                    />
                    <stop
                      offset="100%"
                      stopColor="#4f46e5"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M 10 145 L 65 120 L 115 130 L 165 82 L 215 95 L 270 42 L 328 24 L 328 165 L 10 165 Z"
                  fill="url(#heroChartFill)"
                />

                <path
                  d="M 10 145 L 65 120 L 115 130 L 165 82 L 215 95 L 270 42 L 328 24"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {[
                  [10, 145],
                  [65, 120],
                  [115, 130],
                  [165, 82],
                  [215, 95],
                  [270, 42],
                  [328, 24],
                ].map(([cx, cy]) => (
                  <circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#ffffff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  />
                ))}
              </svg>
            </div>

            <div className="analytics-card-footer">
              <div>
                <span className="footer-label">MY APPROACH</span>
                <strong>Analyze · Visualize · Understand</strong>
              </div>

              <div className="footer-status">
                <span />
                Learning
              </div>
            </div>
          </div>

          <div className="floating-tag floating-tag-top">
            <span className="floating-tag-icon">SQL</span>
            <span>Query & Analyze</span>
          </div>

          <div className="floating-tag floating-tag-bottom">
            <span className="floating-tag-icon">BI</span>
            <span>Visualize Insights</span>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <span>Scroll to explore</span>
        <Icon name="arrowDown" size={16} />
      </a>
    </section>
  );
}
