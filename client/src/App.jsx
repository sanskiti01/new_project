import { useState } from "react";
import { PageShell } from "./components/PageShell";
import { Panel } from "./components/Panel";
import { CompositionDemo } from "./components/CompositionDemo";
import { EventLoopDemo } from "./concepts/EventLoopDemo";
import { HoistingDemo } from "./concepts/HoistingDemo";
import { AsyncPatternsDemo } from "./concepts/AsyncPatternsDemo";

const concepts = [
  ["event-loop", "JavaScript — Event Loop"],
  ["hoisting", "JavaScript — Hoisting"],
  ["async", "JavaScript — Promises vs callbacks"],
  ["composition", "React component composition"],
  ["mongo", "Schema modeling (Mongo)"],
  ["sql", "SQL JOINS"]
];

function App() {
  const [selected, setSelected] = useState("event-loop");

  return (
    <PageShell>
      <header className="hero">
        <div>
          <span className="eyebrow">BUGLAB • PROJECT SCORE LAB</span>
          <h1>Concepts implemented in one project.</h1>
          <p>
            Six concepts are connected to executable features, reusable
            components, MongoDB modeling and PostgreSQL JOINs.
          </p>
        </div>
      </header>

      <nav className="concept-nav">
        {concepts.map(([id, label]) => (
          <button
            key={id}
            className={selected === id ? "active" : ""}
            onClick={() => setSelected(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {selected === "event-loop" && <EventLoopDemo />}
      {selected === "hoisting" && <HoistingDemo />}
      {selected === "async" && <AsyncPatternsDemo />}
      {selected === "composition" && <CompositionDemo />}
      {selected === "mongo" && (
        <Panel title="Schema modeling (Mongo)">
          <p>
            The backend contains Mongoose models for User, Bug and Attempt.
            The Bug document uses nested reproduction data, references,
            validation, timestamps and indexes.
          </p>
          <div className="file-list">
            <code>server/src/models/Bug.js</code>
            <code>server/src/models/User.js</code>
            <code>server/src/models/Attempt.js</code>
          </div>
        </Panel>
      )}
      {selected === "sql" && (
        <Panel title="SQL JOINs">
          <p>
            The PostgreSQL layer demonstrates INNER JOIN, LEFT JOIN,
            three-table JOINs and aggregation.
          </p>
          <pre>{`users
  ↓
attempts
  ↓
bugs

INNER JOIN  → matching rows only
LEFT JOIN   → keep every row from the left table
GROUP BY    → aggregate attempts per bug`}</pre>
          <div className="file-list">
            <code>server/sql/joins.sql</code>
            <code>server/src/services/sqlJoinService.js</code>
          </div>
        </Panel>
      )}
    </PageShell>
  );
}

export default App;
