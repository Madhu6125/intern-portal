import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Status check route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});