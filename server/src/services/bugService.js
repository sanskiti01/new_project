const sampleBug = {
  id: 1,
  title: "Promise chain breaks",
  difficulty: "Medium",
  category: "JavaScript"
};

export function findBugWithCallback(id, callback) {
  setTimeout(() => {
    if (Number(id) !== sampleBug.id) {
      callback(new Error("Bug not found"), null);
      return;
    }
    callback(null, sampleBug);
  }, 250);
}

export function findBugWithPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(id) !== sampleBug.id) {
        reject(new Error("Bug not found"));
        return;
      }
      resolve(sampleBug);
    }, 250);
  });
}
