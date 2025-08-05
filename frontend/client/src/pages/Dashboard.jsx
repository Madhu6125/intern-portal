import "./Dashboard.css";
import { Link } from "react-router-dom"; // Add this import

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <h2>Welcome, Madhu Vishwakarma!</h2>

      <div className="card referral">
        <h3>Referral Code</h3>
        <p>Madhu2025</p>
      </div>

      <div className="card donations">
        <h3>Donations Raised</h3>
        <p>₹ 12,500</p>
      </div>

      <div className="card rewards">
        <h3>Rewards Earned</h3>
        <p>Gold Tier</p>
      </div>

      {/* 🔗 Link to Leaderboard */}
      <div className="card leaderboard-link">
        <h3>Leaderboard</h3>
        <Link to="/leaderboard">View Top Interns 🏆</Link>
      </div>

      <button onClick={onLogout} style={{ marginTop: "2rem" }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;