if ([] == true) {
  console.log("Maggi");
} else {
  console.log("Masala");
}


// Truthy and Falsy Values :
// Falsy values (only 6 of them):

// false
// 0 (and -0, 0n for BigInt)
// "" (empty string)
// null
// undefined
// NaN


// | Expression          | Result |
// | ------------------- | ------ |
// | `[] == ![]`         | `true` |
// | `null == undefined` | `true` |
// | `[] == 0`           | `true` |
// | `"" == 0`           | `true` |
// | `false == "0"`      | `true` |
// | `true == "1"`       | `true` |
// | `[0] == 0`          | `true` |
// | `[1] == true`       | `true` |



// Why not true == false? (`[] == ![]`)

// Because == does not call Boolean(x) on objects.
// Instead, it tries to bring both values into numbers (or primitives).

// The rule is:

// If one side is a boolean, convert it to a number (false → 0, true → 1).

// If the other side is an object, convert it to a primitive ([].toString() → "" → 0).
