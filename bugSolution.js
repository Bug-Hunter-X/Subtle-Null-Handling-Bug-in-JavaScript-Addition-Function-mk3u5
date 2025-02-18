function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Null or undefined values are not allowed.'); // Throw an error for null/undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
//console.log(foo(null, 2)); // Throws an error
//console.log(foo(1, null)); // Throws an error
//console.log(foo(null, null)); // Throws an error