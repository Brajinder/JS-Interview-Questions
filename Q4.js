var y = 1;
if (function magic() {}) {
    // no scope of function magic here.
  y += typeof magic;
}

console.log(y);
// '1undefined'
