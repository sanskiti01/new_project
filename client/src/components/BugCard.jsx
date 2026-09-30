export function BugCard({ title, difficulty, category }) {
  return (
    <article className="bug-card">
      <strong>{title}</strong>
      <p>{category} · {difficulty}</p>
    </article>
  );
}
