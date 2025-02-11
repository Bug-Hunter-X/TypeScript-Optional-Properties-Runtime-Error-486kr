# TypeScript Optional Properties Runtime Error

This repository demonstrates a potential runtime error in TypeScript when dealing with optional properties.  Even though a property is marked as optional using the `?` symbol, attempting to access it without checking for its existence can lead to unexpected behavior at runtime.

The issue stems from the fact that TypeScript's type checking focuses on compile-time safety.  While it correctly identifies that `lastName` might be undefined, it does not prevent the program from running and potentially encountering an error when `lastName` is accessed without a null check.

This example highlights the importance of always handling optional properties with caution, explicitly verifying their existence before accessing their values.

## How to reproduce

1. Clone the repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run the compiled JavaScript code (bug.js). Observe the output and potential runtime error. 
4. Compare this with the solution in bugSolution.ts, which addresses the problem.
