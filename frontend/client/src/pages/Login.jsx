import "./Login.css";

function Login({ onLoginSuccess }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.success) onLoginSuccess();
    else alert(data.message);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Intern Portal Login</h2>
        <input name="username" type="text" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;