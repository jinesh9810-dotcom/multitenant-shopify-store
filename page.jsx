"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  function handleLogin() {
    if (!email) return alert("Enter email");

    localStorage.setItem("user", email);
    window.location.href = "/dashboard";
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>

      <input
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, width: 250 }}
      />

      <br /><br />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white"
        }}
      >
        Login
      </button>
    </div>
  );
}
