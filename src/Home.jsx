// Home.jsx
import project1 from './assets/safehubthumb.jpg';
import project2 from './assets/searchthumbnails.jpg';
import project3 from './assets/wardrobethumbnails.jpg';
import icon from './assets/sandy.jpg';
import icon2 from './assets/om.png'

const projects = [
  {
    image: project1,
    title: "Safehub",
    tags: ["Emergency Response", "Safety", "Real-Time Alerts", "Crisis Communication", "User Research"],
    duration: "December 2023 – June 2024",
    overview: "A mobile app that improves campus safety at Stamford High School.",
    link: "https://easy-iron-95a.notion.site/Safehub-19534c722e4280a69ff3e3b0650b9136",
    bgColor: "#FFFFFF"
  },
  {
    image: project3,
    title: "Wardrobe",
    tags: ["User Research", "E-Commerce", "iOS", "Shopping"],
    duration: "June 2024 – August 2024",
    overview: "A one-stop online shopping center for clothing from top brands—all in one app.",
    link: "https://your-link.com/safehub",
    bgColor: "#FFFFFF"
  },
  {
    image: project2,
    title: "SearchNEU",
    tags: ["Campus", "Student Tools", "Course Info", "User Research"],
    duration: "Jan 2025 - June 2025",
    overview: "A fast and intuitive app for finding courses, professors, and campus information.",
    link: "https://easy-iron-95a.notion.site/SearchNEU-19534c722e42805aa1ead97764bfb549",
    bgColor: "#FFFFFF"
  }
];

function Home() {
  return (
    <>
      <div className="about-section">
        <p>
        <span className="highlight"> Nitish Gannu.</span> A passionate <span className="highlight">Data Scientist</span>  and <span className="highlight">Designer</span>. Previously Biostatistics Research at <span className="highlight"> <u>Stamford Health</u></span>. Incoming Stats, Data Science & Product Management at <span className="highlight"> <u>Cornell</u></span>.
        </p>
      </div>

      <div className="status-section">
        <p>Currently designing at Sandbox</p>
        <a href="https://www.sandboxnu.com/" target="_blank" rel="noopener noreferrer">
          <img src={icon} alt="Sandbox icon" className="sandbox-image" />
        </a>
      </div>

      <hr className="about-divider" />

      <h2 className="section-heading">UX Design Projects</h2>

      <div className="project-section">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <footer className="footer">
  <div className="footer-left">
    <p className="footer-thankyou">reach out to me at ↓</p>
    <p className="footer-email">ng545@cornell.edu</p>
  </div>

  <div className="footer-right">
    <div className="footer-links">
      <a href="#" className="footer-link">GITHUB</a>
      <span>/</span>
      <a href="#" className="footer-link">DRIBBLE</a>
      <span>/</span>
      <a href="#" className="footer-link">NOTION ARCHIVE</a>
      <span>/</span>
      <a href="#" className="footer-link">PHOTOS</a>
    </div>

    <div className="rotating-icon-wrapper">
      <div className="rotating-icon-container">
        <img src={icon2} alt="rotating icon" className="rotating-icon" />
      </div>
    </div>
  </div>
</footer>

    </>
  );
}

function ProjectCard({ image, title, tags, duration, overview, link, bgColor }) {
  return (
    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
      <div className="project-card" style={{ backgroundColor: bgColor }}>
        <div className="project-image-container">
          <img src={image} alt={title} className="project-image" />
        </div>
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="project-meta">
            <div>
              <h4>Duration</h4>
              <p>{duration}</p>
            </div>
            <div>
              <h4>Project Overview</h4>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Home;
