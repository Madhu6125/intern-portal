import "./Leaderboard.css";

const leaderboardData = [
  { name: "Madhu Vishwakarma", donations: 12500 },
  { name: "Priya Sharma", donations: 11300 },
  { name: "Ravi Patel", donations: 9800 },
];

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>
      <ul>
        {leaderboardData.map((user, index) => (
          <li key={index}>
            {index + 1}. <strong>{user.name}</strong> — ₹{user.donations}
          </li>
        ))}
      </ul>
    </div>
  );
}