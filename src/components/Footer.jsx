
import Icon from "./Icons";
import portfolioData from "../data/portfolioData";

export default function Footer() {
  const { profile } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home">
          <span className="footer-brand-icon">
            <Icon name="chart" size={21} />
          </span>

          <span>
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </p>

        <a className="back-to-top" href="#home">
          Back to top
          <Icon name="arrow-up" size={16} />
        </a>
      </div>
    </footer>
  );
}

