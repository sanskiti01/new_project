import { useState } from "react";
import { Panel } from "../components/Panel";
import { runEventLoopExperiment } from "./eventLoop";

export function EventLoopDemo() {
  const [order, setOrder] = useState([]);

  async function run() {
    setOrder(["Running..."]);
    const result = await runEventLoopExperiment();
    setOrder(result);
  }

  return (
    <Panel title="JavaScript — Event Loop">
      <p>
        JavaScript runs synchronous work first. Promise callbacks are handled
        as microtasks, while timers are handled later as macrotasks.
      </p>
      <button className="primary" onClick={run}>Run experiment</button>

      {order.length > 0 && (
        <div className="result">
          <strong>Observed execution order</strong>
          <ol>
            {order.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
      )}

      <div className="file-list">
        <code>EventLoopDemo.jsx</code>
        <code>eventLoop.js</code>
      </div>
    </Panel>
  );
}
