import { runEventLoopExperiment } from "../services/eventLoopService.js";
import { getJoinResults, getAllUsersIncludingNoAttempts } from "../services/sqlJoinService.js";

export function eventLoopDemo(_req, res) {
  res.json({
    concept: "JavaScript Event Loop",
    note: "Timer callbacks execute after the current stack and microtasks.",
    result: runEventLoopExperiment()
  });
}

export async function sqlJoinDemo(_req, res) {
  try {
    const [attemptRows, userRows] = await Promise.all([
      getJoinResults(),
      getAllUsersIncludingNoAttempts()
    ]);

    res.json({
      concept: "SQL JOINs",
      innerJoin: attemptRows,
      leftJoin: userRows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
