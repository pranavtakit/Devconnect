import { useEffect, useState } from "react";
import "./App.css";
import Developers from "./Developers";
import Projects from "./Projects";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [status, setStatus] = useState("Connecting...");
const [showRegister, setShowRegister] = useState(false);
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user")) || null
);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("Backend Connected ✅");
        }
      })
      .catch(() => {
        setStatus("Backend Not Connected ❌");
      });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">DevConnect</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#developers">Developers</a>
          <a href="#projects">Projects</a>
          {user ? (
  <>
    <span>Welcome, {user.name}</span>
    <button
      className="btn"
      onClick={() => {
        localStorage.removeItem("user");
        setUser(null);
      }}
    >
      Logout
    </button>
  </>
) : (
  <a href="#login">Login</a>
)}
        </div>
      </nav>

      <section className="hero">
        <h1>Connect. Collaborate. Build.</h1>

        <p>
          Connect with developers, collaborate on projects and build
          amazing things together.
        </p>

        <button className="btn">Get Started</button>

        <p className="status">{status}</p>
      </section>

      <Developers />

      <Projects />

      <div id="login">
  {showRegister ? (
    <Register onLogin={() => setShowRegister(false)} />
  ) : (
   <Login
  onRegister={() => setShowRegister(true)}
  onLoginSuccess={(loggedInUser) => setUser(loggedInUser)}/>
  )}
      </div>
    </>
  );
}

export default App;