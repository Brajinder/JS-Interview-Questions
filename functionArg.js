function f() {
  console.log(this, "***"); // not a global Object in this case
  return "suraj"
}

function a() {
  console.log(arguments[0]());
}

a(f, 1, 2);
