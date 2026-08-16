function Developers() {
  const developers = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      skills: "React • Node.js • MongoDB",
    },
    {
      name: "Aman Verma",
      role: "Frontend Developer",
      skills: "HTML • CSS • JavaScript",
    },
    {
      name: "Priya Patel",
      role: "Backend Developer",
      skills: "Node.js • Express • Prisma",
    },
  ];

  return (
    <section className="developers" id="developers">
      <h2>Developers</h2>
      <p>Connect with talented developers.</p>

      <div className="developer-grid">
        {developers.map((developer, index) => (
          <div className="developer-card" key={index}>
            <div className="avatar">
              {developer.name.charAt(0)}
            </div>

            <h3>{developer.name}</h3>
            <p>{developer.role}</p>
            <span>{developer.skills}</span>

            <button>View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Developers;