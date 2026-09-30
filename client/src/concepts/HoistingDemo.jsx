import { useState } from "react";
import { Panel } from "../components/Panel";
import { getHoistingExamples } from "./hoisting";

export function HoistingDemo() {
  const [result, setResult] = useState(null);

  return (
    <Panel title="JavaScript — Hoisting">
      <p>
        Hoisting describes how JavaScript handles declarations before normal
        top-to-bottom execution of the code.
      </p>

      <button
        className="primary"
        onClick={() => setResult(getHoistingExamples())}
      >
        Run hoisting examples
      </button>

      {result && (
        <div className="result">
          <p><strong>Function:</strong> {result.functionResult}</p>
          <p><strong>var:</strong> Reading the declared variable before its assignment produces <code>undefined</code>.</p>
          <p><strong>let / const:</strong> {result.letConstExplanation}</p>
        </div>
      )}

      <div className="file-list">
        <code>HoistingDemo.jsx</code>
        <code>hoisting.js</code>
      </div>
    </Panel>
  );
}
