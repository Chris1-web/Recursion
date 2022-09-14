const fibs = function (length) {
  if (length < 1) return "please enter a valid number";
  const initialArray = [0, 1];
  if (length === 1) return [0];
  if (length === 2) return initialArray;
  for (let i = 0; i < length - 2; i++) {
    initialArray[i + 2] = initialArray[i] + initialArray[i + 1];
  }
  return initialArray;
};

console.log(fibs(-2)); // "Please enter a valid number."
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(3)); // [0, 1, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
