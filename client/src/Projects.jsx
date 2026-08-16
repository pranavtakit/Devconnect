import "./App.css";

function Projects() {
  const projects = [
    {
      title: "AI Farmer Assistant",
      description: "AI-based platform to help farmers with queries and guidance.",
      tech: "React • Node.js • MongoDB",
    },
    {
      title: "DevConnect",
      description: "A platform where developers can connect and collaborate.",
      tech: "React • Express • Prisma",
    },
    {
      title: "Book Recommendation",
      description: "Website that recommends books based on selected genres.",
      tech: "HTML • CSS • JavaScript",
    },
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>
      <p>Explore projects built by developers.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;