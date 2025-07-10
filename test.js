import { getValidMoves, arraysEqual } from "./utils.js";
import { knightMoves } from "./knightMoves.js";

console.log("Testing knightMoves:");
console.log("===================");

// Test 1: Simple case
console.log("Test 1: [0,0] to [1,2]");
const result1 = knightMoves([3,3], [4,3]);
console.log("Result:", result1);
console.log();
