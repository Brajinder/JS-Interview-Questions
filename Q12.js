// let final = 1 + res;
// let res = 100; // cannot access res before initialisation
// console.log(final);


// let final2 = 1 + res2;
// const res2 = 100; // cannot access res before initialisation
// console.log(final2);


// What’s happening?
// Hoisting still happens for let and const.
// The variable res/res2 is known to exist in that scope.
// But it is put into the temporal dead zone (TDZ) until its declaration line is executed.


let final3 = 1 + res3; // NaN
var res3 = 100; // Hoisting is done but value remains undefined, therefore : NaN
console.log(final3);