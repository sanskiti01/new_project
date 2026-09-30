export function runEventLoopExperiment() {
  const order = [];
  order.push("synchronous: start");

  Promise.resolve().then(() => {
    order.push("microtask: Promise.then");
  });

  setTimeout(() => {
    order.push("macrotask: setTimeout");
  }, 0);

  order.push("synchronous: end");

  return order;
}
