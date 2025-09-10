var a = "suraj"; // set in global scope during hoisting

function f() {
  console.log(a); // undefined
  var a = "parul"; // set in local scope during hoisting
}

f();
