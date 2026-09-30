const fakeBugs = {
  1: { id: 1, title: "Promise chain breaks", difficulty: "Medium" },
  2: { id: 2, title: "JOIN returns duplicate rows", difficulty: "Hard" }
};

export function findBugWithCallback(id, callback) {
  setTimeout(() => {
    const bug = fakeBugs[id];

    if (!bug) {
      callback(new Error("Bug not found"), null);
      return;
    }

    callback(null, bug);
  }, 350);
}

export function findBugWithPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bug = fakeBugs[id];

      if (!bug) {
        reject(new Error("Bug not found"));
        return;
      }

      resolve(bug);
    }, 350);
  });
}
