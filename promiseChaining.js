Promise.resolve("start")
  .then(val => {
    console.log("then:", val);
    return "next";
  })
  .finally(() => {
    console.log("finally 1");
    return "changed";  // ignored
  })
  .then(val => {
    console.log("after finally:", val);
    throw new Error("boom");
  })
  .finally(() => {
    console.log("finally 2");
    return "ignored";  // ignored
  })
  .catch(err => {
    console.log("caught:", err.message);
    return "safe";
  })
  .finally(() => {
    console.log("finally 3");
    throw new Error("oops");  // this one overrides!
  })
  .then(console.log)
  .catch(err => console.log("last catch:", err.message));


  //Question 2:

// Promise.reject("fail")
//   .catch(err => {
//     console.log("caught:", err);
//     throw new Error("new error");
//   })
//   .catch(err => {
//     console.log("caught again:", err.message);
//     return "recovered";
//   })
//   .then(value => {
//     console.log("value:", value);
//     return "done";
//   })
//   .finally(() => {
//     console.log("finally");
//   })
//   .then(console.log);



