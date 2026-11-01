
import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Signup form submitted successfully!");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* Logo */}
        <div className="logo"></div>

        {/* Heading */}
        <h1>Create your account</h1>
        <p className="subtitle">
          Welcome! Please fill in the details to get started.
        </p>

        {/* Google Button */}
        <button
          className="google-btn"
          type="button"
          onClick={() => alert("Google sign-in needs authentication setup.")}
        >
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email address</label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="continue-btn" type="submit">
            Continue <span>›</span>
          </button>

        </form>

        {/* Sign In */}
        <p className="signin-text">
          Already have an account?{" "}
          <a href="#signin">Sign in</a>
        </p>

       

      </div>
    </div>
  );
}

export default App;
