[a] = [1, 2, 3, 4]; // destructuring concept

console.log(a in globalThis); // "a" will be in the module scope and not in the global scope.
// modules in node js create a module scope and do not let variables to go in Global Scope.
