// function b() {
//   const name = "parul";

//   return function () {
//     console.log(name);
//     console.log(this);
//   };
// }

// const res = b();
// setTimeout(res, 1000);

// const x = {
//   name: "abc",
//   log() {
//     console.log(this);
//   },
// };

// setTimeout(x.log, 1000);

function f() {
  console.log(this, "***");
  return "suraj"
}

function a() {
  console.log(arguments[0]());
}

a(f, 1, 2);
