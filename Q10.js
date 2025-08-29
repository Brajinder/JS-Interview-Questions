const a = NaN;
const b = NaN;

console.log(a == b); // false
console.log(a === b); // false


// NaN is not equal to anything, including itself.

// Use Number.isNaN() if you want to check exactly for the NaN value.

// Use isNaN() only if you want to detect values that become NaN after conversion.