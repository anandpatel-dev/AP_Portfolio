
const portfolioData = {
  profile: {
    name: "Anand Patel",
    initials: "AP",
    title: "Aspiring Data Analyst",
    subtitle: "Data Analytics | Software Development | AI",
    introduction:
      "I explore data, build interactive dashboards, and develop technology projects that solve practical problems.",
    location: "India",
    email: "",
    linkedin: "https://linkedin.com/in/anand-patel-b37aa12b3",
    github: "",
    resume: "/resume.pdf",
  },

  about: {
    heading: "About Me",
    description:
      "I'm a B.Tech Computer Science and Design student building my career across Data Analytics, Software Development, and AI. I enjoy working with data, developing applications, and learning through hands-on projects.",
    interests: [
      "Data Analytics",
      "Business Intelligence",
      "Software Development",
      "Artificial Intelligence",
      "Problem Solving",
    ],
  },

  skills: [
    {
      category: "Data Analytics",
      items: [
        { name: "Excel", level: "Intermediate" },
        { name: "SQL", level: "Basic" },
        { name: "Power BI", level: "Intermediate" },
        { name: "Power Query", level: "Learning" },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Python", level: "Beginner / Project Use" },
        { name: "JavaScript", level: "Project Use" },
        { name: "C++", level: "Basic" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "GitHub", level: "Basic" },
        { name: "Streamlit", level: "Project Use" },
        { name: "SQLite", level: "Project Use" },
        { name: "REST APIs", level: "Project Use" },
        { name: "React", level: "Project Use" },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "Flask", level: "Project Use" },
      ],
    },
  ],

  projects: [
    {
      id: "live-climate",
      name: "Live Climate Impact Dashboard",
      category: "Data Analytics",
      featured: true,
      description:
        "An interactive dashboard exploring weather conditions, air quality, historical observations, and forecasts using live data sources.",
      highlights: [
        "Fetch weather information using APIs",
        "Clean and store data with Python and SQLite",
        "Explore temperature, rainfall, and air-quality indicators",
        "Visualize climate information with Streamlit",
      ],
      technologies: [
        "Python",
        "Streamlit",
        "SQLite",
        "Pandas",
        "REST APIs",
      ],
      status: "Deployed",
      github: "",
      demo:
        "https://live-climate-impact-dashboard-ruxmeigczzusoeyq2ck9qf.streamlit.app/",
    },
    {
      id: "ecommerce-analytics",
      name: "E-Commerce Sales, Delivery & Customer Satisfaction Analytics",
      category: "Data Analytics",
      featured: true,
      description:
        "An analytics project focused on understanding e-commerce sales performance, delivery operations, and customer satisfaction through data-driven business insights.",
      highlights: [
        "Explore and clean records using Excel",
        "Join datasets and answer business questions using SQL",
        "Build repeatable data transformations using Power Query",
        "Create data models, DAX measures, and interactive Power BI dashboards",
        "Investigate sales trends, delivery performance, and customer satisfaction",
      ],
      technologies: [
        "Excel",
        "SQL",
        "Power Query",
        "Power BI",
      ],
      status: "In Progress",
      github: "",
      demo: "",
    },
    {
      id: "resumeforge",
      name: "ResumeForge",
      category: "Software Development & AI",
      featured: true,
      description:
        "An AI-assisted resume screening and job-description matching platform designed to help users analyze resumes against job requirements.",
      highlights: [
        "Resume screening",
        "Job-description matching",
        "Web-based application interface",
      ],
      technologies: [
        "Python",
        "Flask",
        "React",
        "SQL",
      ],
      status: "Existing Project",
      github: "",
      demo: "",
    },
    {
      id: "krishi-sakhi",
      name: "Krishi Sakhi",
      category: "AI & Social Impact",
      featured: true,
      description:
        "A smart farming assistant concept focused on making agricultural guidance more accessible to farmers.",
      highlights: [
        "Farmer-focused digital assistance",
        "Multilingual experience concept",
        "Agricultural information and guidance",
      ],
      technologies: [
        "React",
        "JavaScript",
        "AI",
      ],
      status: "Existing Project",
      github: "",
      demo: "",
    },
    {
      id: "retail-analytics",
      name: "Retail Analytics & Customer Segmentation",
      category: "Data Analytics",
      featured: false,
      description:
        "A planned analytics project to explore retail sales, customer purchasing behavior, product performance, and customer segments.",
      highlights: [
        "Analyze sales and revenue trends",
        "Identify high-performing products",
        "Explore customer purchasing behavior",
        "Build business-focused reports and dashboards",
      ],
      technologies: [
        "SQL",
        "Python",
        "Excel",
        "Power BI",
      ],
      status: "Planned",
      github: "",
      demo: "",
    },
  ],

  
certifications: [
  {
    name: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Mar 2025",
    credentialUrl: "/certificates/Data-Science.pdf",
    verified: false,
  },
  {
    name: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "Jan 2024",
    credentialUrl: "/certificates/Python-Essentials.pdf",
    verified: false,
  },
  {
    name: "Agile Software Development",
    issuer: "University of Minnesota · Coursera",
    date: "May 2025",
    credentialUrl: "/certificates/Agile-Coursera.pdf",
    verified: false,
  },
  {
    name: "Salesforce AI Agent Developer — LastMile Program",
    issuer: "SmartBridge Educational Services",
    date: "Dec 2025",
    credentialUrl: "/certificates/Salesforce-AI-Agent.pdf",
    verified: false,
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy · GGITS",
    date: "May 2025",
    credentialUrl: "/certificates/CCNA.pdf",
    verified: false,
  },
  {
    name: "Linux Essentials",
    issuer: "Cisco Networking Academy · GGITS",
    date: "Dec 2024",
    credentialUrl: "/certificates/Linux-Essentials.pdf",
    verified: false,
  },
],


  education: [
    {
      degree: "Bachelor of Technology",
      specialization: "Computer Science and Design",
      institution:
        "Gyan Ganga Institute of Technology and Science",
      graduationYear: "",
    },
  ],

  contact: {
    heading: "Let's Connect",
    message:
      "I'm exploring opportunities across Data Analytics and technology. Feel free to connect with me to discuss projects, internships, and collaboration.",
  },
};

export default portfolioData;
