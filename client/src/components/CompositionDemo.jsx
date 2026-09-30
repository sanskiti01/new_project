import { Panel } from "./Panel";
import { StatCard } from "./StatCard";
import { BugCard } from "./BugCard";

export function CompositionDemo() {
  return (
    <Panel title="React component composition">
      <p>
        This screen is composed from reusable components. Each child receives
        only the props it needs.
      </p>

      <div className="composition-grid">
        <StatCard label="Concepts" value="6" />
        <StatCard label="Databases" value="2" />
        <BugCard
          title="Promise chain breaks"
          difficulty="Medium"
          category="JavaScript"
        />
        <BugCard
          title="Incorrect JOIN result"
          difficulty="Hard"
          category="SQL"
        />
      </div>

      <div className="file-list">
        <code>CompositionDemo.jsx</code>
        <code>Panel.jsx</code>
        <code>StatCard.jsx</code>
        <code>BugCard.jsx</code>
      </div>
    </Panel>
  );
}
