import { Router } from "express";
import { listBugs, createBug } from "../controllers/bugController.js";

const router = Router();

router.get("/", listBugs);
router.post("/", createBug);

export default router;
