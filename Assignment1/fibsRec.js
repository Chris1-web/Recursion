const fibsRec = function (length) {
  if (length < 1) return "please enter a valid number";
  if (length === 1) return [0];
  if (length === 2) return [0, 1];
  return [
    ...fibsRec(length - 1),
    fibsRec(length - 1)[length - 3] + fibsRec(length - 1)[length - 2],
  ];
};

console.log(fibsRec(-2)); // "Please enter a valid number of elements to be given an answer."
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(3)); // [0, 1, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
