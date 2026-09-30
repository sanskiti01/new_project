export function runEventLoopExperiment() {
  return new Promise((resolve) => {
    const order = [];

    order.push("1. synchronous: start");

    Promise.resolve().then(() => {
      order.push("3. microtask: Promise.then");
    });

    setTimeout(() => {
      order.push("4. macrotask: setTimeout");
      resolve(order);
    }, 0);

    order.push("2. synchronous: end");
  });
}
