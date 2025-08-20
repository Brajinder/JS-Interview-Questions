var magic = 1;
function magic() {
  console.log(2);
}
magic();

// Hoisting rules:
// function magic() {} is hoisted before var magic.
// Then var magic = 1 overwrites the function with 1.


// | Code Type                          | Behavior                                                                  |
// | ---------------------------------- | ------------------------------------------------------------------------- |
// | `var + function`                   | Function hoisted, then overwritten → `TypeError: magic is not a function` |
// | `let + function`                   | ❌ `SyntaxError: Identifier has already been declared`                     |
// | `const + function`                 | ❌ `SyntaxError: Identifier has already been declared`                     |
// | `var + function` in `'use strict'` | Same as non-strict: hoisted + overwritten → `TypeError`                   |
