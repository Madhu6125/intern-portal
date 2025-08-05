Absolutely, Madhu! Here's your updated `README.md` — fully aligned with the internship Round 1 requirements and now includes your screenshots and hosted links. Just copy this into your repo and you’ll be ready to submit 💪

---

##  `README.md`

```markdown
#  Fundraising Intern Portal – Round 1 Submission

This is a full-stack intern portal prototype created for the **Full Stack Developer Internship – Round 1 Task**. It provides a dashboard view for interns to monitor referral activity, view dummy donations, and access static rewards information.

---

##  Live Demo

-  **Frontend (Vercel):** [https://intern-portal-green.vercel.app](https://intern-portal-green.vercel.app)
-  **Backend (Render):** [https://intern-portal-1-1gpo.onrender.com](https://intern-portal-1-1gpo.onrender.com)

---

##  Tech Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Styling:** CSS (responsive, clean UI)
- **Hosting:** Vercel (Frontend), Render (Backend)

---

##  Features

-  Dummy Login Page
-  Intern Dashboard:
  - Intern Name
  - Referral Code (e.g. `madhu2025`)
  - Total Donations Raised (dummy)
  - Rewards/Unlockables (static display)
-  Leaderboard (Static bonus feature)

---

##  Backend API Overview

### `POST /api/auth/login`

- Dummy login using static credentials:
```json
{ "username": "intern", "password": "1234" }
```
- Response:
```json
{ "success": true }
```

### `GET /api/intern`

Returns static intern details:
```json
{
  "name": "Madhu Vishwakarma",
  "referralCode": "madhu2025",
  "donations": 1200
}
```

---

## 📸 Screenshots


|  Login | ![login](https://github.com/Madhu6125/intern-portal/blob/main/login.png) |
|  Dashboard | ![dashboard](https://github.com/Madhu6125/intern-portal/blob/main/Dashboard.png) |
|  Leaderboard | ![leaderboard](https://github.com/Madhu6125/intern-portal/blob/main/Leaderboard.png) |

---

## 🧪 Running Locally

### 1. Clone the Repo
```bash
git clone https://github.com/Madhu6125/intern-portal
```

### 2. Install Backend Dependencies
```bash
cd intern-portal
npm install
```

### 3. Start Backend
```bash
node server.js
```

### 4. Connect Frontend to Backend

In your frontend folder `.env`:
```
VITE_API_BASE=https://intern-portal-1-1gpo.onrender.com
```

### 5. Run Frontend
```bash
npm run dev
```

---

##  Additional Notes

- Fully hosted & functional prototype
- Screenshots provided for UI overview
- Clean, responsive design with simple API integration
-  Ready for Round 2

---

##  About Me

**Name:** Madhu Vishwakarma  
**Email:** madhugv2005@gmail.com  
**GitHub:** [github.com/Madhu6125](https://github.com/Madhu6125)
