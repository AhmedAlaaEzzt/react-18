// Simulate an expensive computation (e.g., Fibonacci calculation)
export const calculateScore = (num: number) => {
  if (isNaN(num)) return;
  console.log("Running expensive calculation start...");
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += i * num; // Simulating a heavy operation
  }
  console.log("Running expensive calculation end...");
  return result;
};
