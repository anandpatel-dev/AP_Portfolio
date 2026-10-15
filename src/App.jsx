
import { useState } from "react";
import Icon from "./components/Icons";
import portfolioData from "./data/portfolioData";

const navigation = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Education",
  "Contact",
];

const projectColors = ["violet", "blue", "pink", "green", "amber"];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SocialLink({ href, children, label }) {
  if (!href) return null;

  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function ProjectPreview({ project, index }) {
  const theme = projectColors[index % projectColors.length];

  return (
    <div className={`project-preview preview-${theme}`}>
      <div className="preview-window">
        <div className="preview-window-bar">
          <span />
          <span />
          <span />
          <small>{project.name}</small>
        </div>

        {project.id === "live-climate" ? (
          <div className="preview-climate">
            <div className="preview-side-label">
              <span>LIVE CLIMATE</span>
              <strong>Weather insights</strong>
            </div>
            <div className="climate-orbit">
              <div className="climate-sun" />
              <div className="climate-cloud">☁</div>
              <span className="climate-degree">24°</span>
            </div>
            <div className="preview-mini-row">
              <span>Temperature</span>
              <span>Air quality</span>
              <span>Forecast</span>
            </div>
          </div>
        ) : project.id === "resumeforge" ? (
          <div className="preview-resume">
            <div className="resume-sheet">
              <div className="resume-avatar">CV</div>
              <div className="resume-lines">
                <i />
                <i />
                <i />
              </div>
              <div className="resume-score">
                <span>Resume match</span>
                <strong>ATS</strong>
                <div><i /></div>
              </div>
              <div className="resume-lines lower">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="resume-float"><Icon name="shield-check" size={15} /> Resume analyzed</div>
          </div>
        ) : project.id === "krishi-sakhi" ? (
          <div className="preview-farm">
            <div className="farm-sun" />
            <div className="farm-hill hill-one" />
            <div className="farm-hill hill-two" />
            <div className="farm-plant plant-one">♧</div>
            <div className="farm-plant plant-two">♧</div>
            <div className="farm-label">Krishi Sakhi <span>Farmer support</span></div>
          </div>
        ) : (
          <div className="preview-generic">
            <div className="generic-sidebar">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="generic-content">
              <div className="generic-title" />
              <div className="generic-stat-row">
                <i />
                <i />
                <i />
              </div>
              <div className="generic-table">
                <i /><i /><i /><i />
              </div>
            </div>
          </div>
        )}
      </div>
      <span className="preview-index">PROJECT / 0{index + 1}</span>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const { profile, about, skills, projects, certifications, education, contact } =
    portfolioData;

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  function navigateTo(section) {
    setActiveSection(section);
    setMenuOpen(false);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openProject(project) {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToProjects() {
    setSelectedProject(null);
    setActiveSection("Projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSection() {
    if (selectedProject) {
      const project = selectedProject;
      const index = projects.findIndex((item) => item.id === project.id);

      return (
        <section className="page-section project-detail-page">
          <div className="container">
            <button className="back-link" onClick={backToProjects}>
              <Icon name="arrowDown" size={17} /> Back to projects
            </button>

            <div className="detail-intro">
              <span className="eyebrow">{project.category}</span>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <span className={`status-pill status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
                {project.status}
              </span>
            </div>

            <ProjectPreview project={project} index={Math.max(index, 0)} />

            <div className="detail-grid">
              <div className="detail-panel">
                <span className="eyebrow">PROJECT OVERVIEW</span>
                <h2>What this project focuses on</h2>
                <p>{project.description}</p>
                <h3>Key features & focus</h3>
                <ul className="feature-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Icon name="shield-check" size={17} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="detail-panel detail-side">
                <span className="eyebrow">TECH STACK</span>
                <h3>Tools used</h3>
                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="detail-actions">
                  {project.demo && (
                    <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">
                      Open live demo <Icon name="external" size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">
                      <Icon name="code" size={16} /> View source code
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <p className="muted-note">Project links will be added when available.</p>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      );
    }

    switch (activeSection) {
      case "Home":
        return (
          <>
            <section className="hero-section">
              <div className="hero-glow hero-glow-one" />
              <div className="hero-glow hero-glow-two" />
              <div className="container hero-layout">
                <div className="hero-copy">
                  <div className="availability">
                    <span className="availability-dot" />
                    Open to opportunities
                  </div>

                  <span className="eyebrow">HELLO, I'M</span>
                  <h1>
                    {profile.name}
                    <br />
                    <span className="hero-gradient">{profile.title}</span>
                  </h1>

                  <p className="hero-subtitle">{profile.subtitle}</p>
                  <p className="hero-description">{profile.introduction}</p>

                  <div className="hero-location">
                    <Icon name="location" size={16} />
                    {profile.location}
                  </div>

                  <div className="hero-actions">
                    <button className="button button-primary" onClick={() => navigateTo("Projects")}>
                      Explore projects <Icon name="arrowRight" size={17} />
                    </button>

                    <a className="button button-secondary" href={profile.resume || "#"} onClick={(event) => {
                      if (!profile.resume) event.preventDefault();
                    }} target="_blank" rel="noreferrer">
                      Download resume <Icon name="download" size={16} />
                    </a>
                  </div>

                  <div className="hero-socials">
                    <SocialLink href={profile.github} label="GitHub">
                      <Icon name="code" size={18} /> <span>GitHub</span>
                    </SocialLink>
                    <SocialLink href={profile.linkedin} label="LinkedIn">
                      <span className="linkedin-mark">in</span> <span>LinkedIn</span>
                    </SocialLink>
                    {profile.email && (
                      <SocialLink href={`mailto:${profile.email}`} label="Email">
                        <Icon name="mail" size={18} /> <span>Email</span>
                      </SocialLink>
                    )}
                  </div>
                </div>

                <div className="hero-art" aria-label="Developer portfolio illustration">
                  <div className="art-backdrop" />
                  <div className="art-orbit orbit-one" />
                  <div className="art-orbit orbit-two" />
                  <div className="art-monogram">
                    
                    <span className="monogram-initials">{profile.initials}</span>
                    <span className="monogram-name">{profile.name}</span>
                    <span className="monogram-role">{profile.title}</span>
                  </div>

                  <div className="floating-chip chip-top">
                    <Icon name="target" size={16} />
                    <span>Build with purpose</span>
                  </div>

                  <div className="floating-chip chip-bottom">
                    <Icon name="code" size={17} />
                    <span>Learn · Build · Improve</span>
                  </div>

                  <div className="art-caption">
                    <span>01 — CURRENT FOCUS</span>
                    <strong>Data, products & practical solutions</strong>
                  </div>
                </div>
              </div>

              <button className="scroll-cue" onClick={() => navigateTo("About")}>
                Discover my work <Icon name="arrowDown" size={16} />
              </button>
            </section>

            <section className="home-summary section-block">
              <div className="container summary-grid">
                <div>
                  <span className="eyebrow">A LITTLE ABOUT ME</span>
                  <h2>Curious by nature.<br /><span className="text-accent">Practical by design.</span></h2>
                </div>
                <p>{about.description}</p>
                <button className="text-button" onClick={() => navigateTo("About")}>
                  More about me <Icon name="arrowRight" size={16} />
                </button>
              </div>
            </section>

            <section className="home-projects section-block">
              <div className="container">
                <div className="section-topline">
                  <SectionHeading
                    eyebrow="SELECTED WORK"
                    title={<>Projects built to <span className="text-accent">solve problems.</span></>}
                    description="A selection of projects across analytics, software development and AI."
                  />
                  <button className="button button-secondary" onClick={() => navigateTo("Projects")}>
                    All projects <Icon name="arrowRight" size={16} />
                  </button>
                </div>

                <div className="project-grid featured-grid">
                  {projects.filter((project) => project.featured).slice(0, 3).map((project) => {
                    const index = projects.findIndex((item) => item.id === project.id);
                    return (
                      <article className="project-card" key={project.id}>
                        <button className="project-card-open" onClick={() => openProject(project)} aria-label={`View ${project.name}`}>
                          <ProjectPreview project={project} index={index} />
                        </button>
                        <div className="project-card-content">
                          <div className="project-meta">
                            <span>{project.category}</span>
                            <span className={`status-pill status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
                              {project.status}
                            </span>
                          </div>
                          <button className="project-title-button" onClick={() => openProject(project)}>
                            <h3>{project.name}</h3>
                            <Icon name="arrowRight" size={18} />
                          </button>
                          <p>{project.description}</p>
                          <div className="tech-list">
                            {project.technologies.slice(0, 4).map((technology) => (
                              <span key={technology}>{technology}</span>
                            ))}
                          </div>
                          <div className="project-card-links">
                            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <Icon name="external" size={14} /></a>}
                            {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Icon name="code" size={14} /></a>}
                            {!project.github && !project.demo && <button onClick={() => openProject(project)}>Project details <Icon name="arrowRight" size={14} /></button>}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        );

      case "About":
        return (
          <section className="page-section">
            <div className="container">
              <SectionHeading
                eyebrow="GET TO KNOW ME"
                title={<>Turning curiosity into <span className="text-accent">practical work.</span></>}
                description="My background, interests and the direction I'm working toward."
              />
              <div className="about-layout">
                <div className="about-main panel">
                  <div className="about-monogram">{profile.initials}</div>
                  <h3>{about.heading}</h3>
                  <p>{about.description}</p>
                  <div className="interest-tags">
                    {about.interests.map((interest) => <span key={interest}>{interest}</span>)}
                  </div>
                </div>
                <div className="about-facts">
                  <div className="fact-card">
                    <span className="fact-icon"><Icon name="graduation" size={19} /></span>
                    <div><small>Academic background</small><strong>B.Tech · Computer Science and Design</strong></div>
                  </div>
                  <div className="fact-card">
                    <span className="fact-icon"><Icon name="layers" size={19} /></span>
                    <div><small>Core interests</small><strong>Data analytics, software & AI</strong></div>
                  </div>
                  <div className="fact-card">
                    <span className="fact-icon"><Icon name="briefcase" size={19} /></span>
                    <div><small>Current goal</small><strong>Find an internship and build real-world experience</strong></div>
                  </div>
                  <div className="fact-card">
                    <span className="fact-icon"><Icon name="location" size={19} /></span>
                    <div><small>Location</small><strong>{profile.location}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "Skills":
        return (
          <section className="page-section">
            <div className="container">
              <SectionHeading
                eyebrow="MY TOOLKIT"
                title={<>Skills & <span className="text-accent">technologies.</span></>}
                description="Tools I'm learning and applying through practical projects. Skill levels reflect my current experience."
              />
              <div className="skills-grid">
                {skills.map((group, index) => (
                  <article className="skill-card panel" key={group.category}>
                    <div className="skill-card-heading">
                      <span className="skill-icon">
                        {index === 0 ? <Icon name="layers" size={21} /> : index === 1 ? <Icon name="code" size={21} /> : index === 2 ? <Icon name="target" size={21} /> : <Icon name="briefcase" size={21} />}
                      </span>
                      <h3>{group.category}</h3>
                    </div>
                    <div className="skill-list">
                      {group.items.map((skill) => (
                        <div className="skill-row" key={skill.name}>
                          <span>{skill.name}</span>
                          <small>{skill.level}</small>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <div className="note-panel">
                <Icon name="target" size={18} />
                <p>I focus on strengthening my fundamentals by applying these tools in portfolio projects, rather than listing skills without practical use.</p>
              </div>
            </div>
          </section>
        );

      case "Projects":
        return (
          <section className="page-section">
            <div className="container">
              <SectionHeading
                eyebrow="MY WORK"
                title={<>Projects with <span className="text-accent">purpose.</span></>}
                description="Explore my work across data analytics, software development and AI."
              />

              <div className="filter-bar" aria-label="Filter projects">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? "filter-button filter-active" : "filter-button"}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="project-grid">
                {filteredProjects.map((project) => {
                  const index = projects.findIndex((item) => item.id === project.id);
                  return (
                    <article className="project-card" key={project.id}>
                      <button className="project-card-open" onClick={() => openProject(project)} aria-label={`View ${project.name}`}>
                        <ProjectPreview project={project} index={index} />
                      </button>
                      <div className="project-card-content">
                        <div className="project-meta">
                          <span>{project.category}</span>
                          <span className={`status-pill status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span>
                        </div>
                        <button className="project-title-button" onClick={() => openProject(project)}>
                          <h3>{project.name}</h3><Icon name="arrowRight" size={18} />
                        </button>
                        <p>{project.description}</p>
                        <div className="tech-list">
                          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                        </div>
                        <div className="project-card-links">
                          <button onClick={() => openProject(project)}>Explore project <Icon name="arrowRight" size={14} /></button>
                          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <Icon name="external" size={14} /></a>}
                          {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <Icon name="code" size={14} /></a>}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              {filteredProjects.length === 0 && <p className="empty-state">No projects in this category yet.</p>}
            </div>
          </section>
        );

      case "Certificates":
        return (
          <section className="page-section">
            <div className="container">
              <SectionHeading
                eyebrow="LEARNING & DEVELOPMENT"
                title={<>Certificates & <span className="text-accent">learning.</span></>}
                description="Courses and certifications that support my ongoing learning journey."
              />
              <div className="certificate-grid">
                {certifications.map((certificate, index) => (
                  <article className="certificate-card panel" key={`${certificate.name}-${index}`}>
                    <div className="certificate-top">
                      <span className="certificate-icon"><Icon name="award" size={22} /></span>
                      <span className="certificate-number">0{index + 1}</span>
                    </div>
                    <span className="certificate-issuer">{certificate.issuer || "Course certificate"}</span>
                    <h3>{certificate.name}</h3>
                    {certificate.date && <p>{certificate.date}</p>}
                    {certificate.credentialUrl ? (
                      <a className="text-button" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                        View credential <Icon name="arrowRight" size={15} />
                      </a>
                    ) : (
                      <span className="muted-note">{certificate.verified ? "Credential verified" : "Credential link not added"}</span>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        );

      case "Education":
        return (
          <section className="page-section">
            <div className="container">
              <SectionHeading
                eyebrow="EDUCATION"
                title={<>Building my <span className="text-accent">foundation.</span></>}
                description="My academic background and the foundation behind my technology interests."
              />
              <div className="education-list">
                {education.map((item, index) => (
                  <article className="education-card panel" key={`${item.degree}-${index}`}>
                    <div className="education-icon"><Icon name="graduation" size={26} /></div>
                    <div className="education-copy">
                      <span className="eyebrow">{item.graduationYear || "ACADEMIC JOURNEY"}</span>
                      <h3>{item.degree}</h3>
                      <p>{item.specialization}</p>
                      <strong>{item.institution}</strong>
                    </div>
                    <span className="education-index">0{index + 1}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );

      case "Contact":
        return (
          <section className="page-section contact-page">
            <div className="container">
              <div className="contact-hero">
                <span className="eyebrow">GET IN TOUCH</span>
                <h1>Let's make something <span className="hero-gradient">meaningful.</span></h1>
                <p>{contact.message}</p>
              </div>

              <div className="contact-layout">
                <div className="contact-main panel">
                  <span className="contact-symbol"><Icon name="arrowRight" size={25} /></span>
                  <h2>{contact.heading}</h2>
                  <p>Have an opportunity, a project idea, or want to connect? Reach out through the channels below.</p>
                  {profile.email ? (
                    <a className="button button-primary" href={`mailto:${profile.email}`}>
                      Send me an email <Icon name="mail" size={16} />
                    </a>
                  ) : (
                    <p className="muted-note">Email address has not been configured yet.</p>
                  )}
                </div>

                <div className="contact-options">
                  {profile.linkedin && (
                    <a className="contact-option panel" href={profile.linkedin} target="_blank" rel="noreferrer">
                      <span className="contact-option-icon linkedin-mark">in</span>
                      <span><small>LINKEDIN</small><strong>Connect professionally</strong></span>
                      <Icon name="arrowRight" size={18} />
                    </a>
                  )}
                  {profile.github && (
                    <a className="contact-option panel" href={profile.github} target="_blank" rel="noreferrer">
                      <span className="contact-option-icon"><Icon name="code" size={21} /></span>
                      <span><small>GITHUB</small><strong>Explore my repositories</strong></span>
                      <Icon name="arrowRight" size={18} />
                    </a>
                  )}
                  {profile.email && (
                    <a className="contact-option panel" href={`mailto:${profile.email}`}>
                      <span className="contact-option-icon"><Icon name="mail" size={21} /></span>
                      <span><small>EMAIL</small><strong>{profile.email}</strong></span>
                      <Icon name="arrowRight" size={18} />
                    </a>
                  )}
                  <div className="contact-option panel">
                    <span className="contact-option-icon"><Icon name="location" size={21} /></span>
                    <span><small>LOCATION</small><strong>{profile.location}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  }

  return (
    <div className="portfolio-app">
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => navigateTo("Home")} aria-label="Go to home">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.title}</small>
            </span>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
             {menuOpen ? <Icon name="close" /> : <Icon name="menu" />}
          </button>

          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map((section) => (
              <button
                key={section}
                className={activeSection === section && !selectedProject ? "nav-item nav-item-active" : "nav-item"}
                onClick={() => navigateTo(section)}
              >
                {section}
              </button>
            ))}
          </nav>

          <button className="header-cta" onClick={() => navigateTo("Contact")}>
            Let's talk <Icon name="arrowRight" size={16} />
          </button>
        </div>
      </header>

      <main key={`${activeSection}-${selectedProject?.id || ""}`}>
        {renderSection()}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <button className="footer-brand" onClick={() => navigateTo("Home")}>
            <span className="brand-mark">{profile.initials}</span>
            <span><strong>{profile.name}</strong><small>{profile.title}</small></span>
          </button>

          <p>Built with curiosity, code, and a focus on learning.</p>

          <div className="footer-socials">
            <SocialLink href={profile.github} label="GitHub"><Icon name="code" size={17} /></SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn"><span className="linkedin-mark">in</span></SocialLink>
            {profile.email && <SocialLink href={`mailto:${profile.email}`} label="Email"><Icon name="mail" size={17} /></SocialLink>}
          </div>

          <span className="copyright">© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </footer>
    </div>
  );
}
