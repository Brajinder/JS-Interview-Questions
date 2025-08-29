// Closure example:

function a() {
  const name = "suraj";
  const fruit = "Apple";
  function b() {
    console.log("b");
  }

  function c() {
    // closure preservation
    console.log("c");
  }

  console.dir(c);
}

a();
