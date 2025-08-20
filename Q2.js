[1, 2, 3].map(function magic(x) {
  // magic is named function expression
  return x + x;
});

magic();

// magic is not defined beacuse it is function-expresion not a function-declaration

// CONCEPT :
// Function Declaration (Hoisted)
// Anonymous Function Expression (Not Hoisted)
// Named Function Expression (Not Hoisted)

// | Type                              | Example                                          | Hoisted?                                   | Name visible outside?                                              | Typical use                                   |
// | --------------------------------- | ------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------- |
// | **Function Declaration**          | `js function foo(x) { return x+x; } `            | ✅ Hoisted (can call before definition)     | ✅ `foo` is available in outer scope                                | Reusable named functions                      |
// | **Anonymous Function Expression** | `js const f = function(x) { return x+x; }; `     | ❌ Not hoisted (must be defined before use) | ❌ No name (only reference via variable `f`)                        | Short-lived callbacks                         |
// | **Named Function Expression**     | `js const f = function bar(x) { return x+x; }; ` | ❌ Not hoisted                              | ✅ Inside the function body only (`bar`), (only reference via variable `f`) | Recursion in expressions, better stack traces |
