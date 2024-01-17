// The result of
// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.
let a = null;
let b = null;
let c = 3;
console.log(a ?? b ?? c);

// (a !== null && a !== undefined) ? a : b;
