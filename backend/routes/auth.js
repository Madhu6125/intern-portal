import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "intern" && password === "1234") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

export default router;