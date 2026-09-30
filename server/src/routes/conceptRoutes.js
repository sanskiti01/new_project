import { Router } from "express";
import { eventLoopDemo, sqlJoinDemo } from "../controllers/conceptController.js";

const router = Router();

router.get("/event-loop", eventLoopDemo);
router.get("/sql-joins", sqlJoinDemo);

export default router;
