function magic() {
  let x;
  x = 1, [], {}; // 1
  return x;
}
console.log(magic());

function magic2() {
  let x;
  x = (1, [], {}); // {}
  return x;
}
console.log(magic2());

function magic3() {
  // return is in play.
  return x = 1, [], {}; // {}
  // return (x = 1, [], {}); // {}
}
console.log(magic3());
