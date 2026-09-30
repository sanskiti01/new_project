import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import conceptRoutes from "./routes/conceptRoutes.js";
import bugRoutes from "./routes/bugRoutes.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "buglab-concepts-server" });
});

app.use("/api/concepts", conceptRoutes);
app.use("/api/bugs", bugRoutes);

const port = process.env.PORT || 5000;

async function start() {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected");
    } else {
      console.log("MONGO_URI not configured; Mongo routes require configuration.");
    }

    app.listen(port, () => {
      console.log(`API running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

start();
