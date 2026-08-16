import { useState } from "react";

function Register( { onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("Creating account...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful ✅");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.message || "Registration failed ❌");
      }
    } catch (error) {
      console.error(error);
      setMessage("Backend connection failed ❌");
    }
  };

  return (
    <section className="login-section">
      <div className="login-box">
        <h2>Create Account</h2>
        <p>Join DevConnect today</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="signup-text">
            Already have an account?{" "}
            <span onClick={onLogin}>Login</span>
          </p>

          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>

        <p className="status">{message}</p>
      </div>
    </section>
  );
}

export default Register;