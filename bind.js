function f() {
  console.log(this);
}

let user = {
  name: "Parul",
};

user.g = f.bind(user);

user.g();

// if we use call or apply on this g function, result will be of bind(this) only.
user.g.call({ age: "20" }); // doesn't work

// f.bind() create a new func tion over here.

// ================================================================================
// Another Question

function abc(success, fail, flag) {
  if (flag) {
    success();
  } else fail();
}

var fruit ="apple";

const user = {
  msg: "DONE",
  loggedIn: function () {
    console.log(this.msg);
  },
  loggedFail: function () {
    console.log(this.msg);
  },
  arrow: () => {
    console.log(this.fruit);
  },
};

// user.arrow(); // undefined => this.fruit

abc(user.loggedIn, user.loggedFail, true);

// success(); console undefined because for function abc success is still a plain function call

// Solution
// 1.> abc(user.loggedIn.bind(user), user.loggedFail.bind(user), true);

// 2.> abc(() => user.loggedIn(), () => user.loggedFail(), true);
// arrow function closes over the user. (Closure concept)
