export function getHoistingExamples() {
  function declaredBeforeItsLine() {
    return "Function declaration can be called before its declaration.";
  }

  // This is intentionally before the declaration in the source file.
  const functionResult = declaredBeforeItsLine();

  var declaredWithVar;
  const varBeforeAssignment = declaredWithVar === undefined;

  return {
    functionResult,
    varBeforeAssignment,
    letConstExplanation:
      "let and const are hoisted in their scope but remain uninitialized in the temporal dead zone until execution reaches their declaration."
  };
}
