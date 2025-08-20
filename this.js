// In JavaScript, when a plain function is called (not as a method of an object), its this is:
// global object (window in browsers, global in Node) in non-strict mode.
// undefined in strict mode.


// PLAIN Method Call:
function foo() { console.log(this); }
foo(); 
// logs: window (in browsers) or global object (in Node)

//METHOD CALL:
const obj = {
  foo: function() { console.log(this); }
};
obj.foo(); // logs obj

//ARROW Func:
const arrow = () => console.log(this);
arrow(); // `this` is inherited from outer scope

