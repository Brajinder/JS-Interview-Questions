// infinite currying

function add(x) {
  return function abc(y) {
    if (y) return add(x + y);
    console.log(x);
  };
}

add(1)(2)(3)(4)();
