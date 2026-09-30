import { Bug } from "../models/Bug.js";

export async function listBugs(_req, res) {
  try {
    const bugs = await Bug.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 })
      .limit(50);

    res.json(bugs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createBug(req, res) {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
