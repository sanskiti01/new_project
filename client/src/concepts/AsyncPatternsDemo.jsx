import { useState } from "react";
import { Panel } from "../components/Panel";
import {
  findBugWithCallback,
  findBugWithPromise
} from "./asyncPatterns";

export function AsyncPatternsDemo() {
  const [result, setResult] = useState("Choose an approach.");

  function runCallback() {
    setResult("Callback: waiting...");
    findBugWithCallback(1, (error, bug) => {
      if (error) {
        setResult(`Callback error: ${error.message}`);
        return;
      }
      setResult(`Callback result: ${bug.title} (${bug.difficulty})`);
    });
  }

  async function runPromise() {
    setResult("Promise: waiting...");
    try {
      const bug = await findBugWithPromise(1);
      setResult(`Promise result: ${bug.title} (${bug.difficulty})`);
    } catch (error) {
      setResult(`Promise error: ${error.message}`);
    }
  }

  return (
    <Panel title="JavaScript — Promises vs callbacks">
      <p>
        Both approaches handle the same asynchronous operation. The callback
        receives its result through a function argument; the Promise can be
        consumed with <code>await</code> or <code>.then()</code>.
      </p>

      <div className="file-list">
        <button className="primary" onClick={runCallback}>Run callback</button>
        <button className="primary" onClick={runPromise}>Run Promise</button>
      </div>

      <div className="result">
        <strong>{result}</strong>
      </div>

      <div className="file-list">
        <code>AsyncPatternsDemo.jsx</code>
        <code>asyncPatterns.js</code>
      </div>
    </Panel>
  );
}
