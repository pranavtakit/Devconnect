import { useState } from "react";

function Login({ onRegister, onLoginSuccess })   {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

    if (response.ok) {
  localStorage.setItem("user", JSON.stringify(data.user));
  setMessage("Login successful ✅");
  onLoginSuccess(data.user);

    }
       else {
        setMessage(data.message || "Login failed ❌");
      }
    } catch (error) {
      console.error(error);
      setMessage("Backend connection failed ❌");
    }
  };

  return (
    <section className="login-section">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Login to your DevConnect account</p>

        <form onSubmit={handleLogin}>
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

          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <p className="status">{message}</p>

        <p className="signup-text">
          Don't have an account?{" "}
        <span onClick={onRegister}>Sign Up</span>
        </p>
      </div>
    </section>
  );
}

export default Login;