const obj = {
  abc: {},
  suraj: {},
};

let name = "toString";

if (obj[name]) { // JS also checks in prototype chain here, therefore "toString" also works
  console.log("inside");
} else {
  console.log("else");
}
