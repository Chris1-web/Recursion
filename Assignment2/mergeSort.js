const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const middlePoint = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, middlePoint));
  const rightHalf = mergeSort(array.slice(middlePoint));
  return merge(leftHalf, rightHalf);
};

const merge = (leftArray, rightArray) => {
  const mergedArray = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
    const mergeEl = arrayWithMin.shift();
    mergedArray.push(mergeEl);
  }

  return mergedArray.concat(leftArray, rightArray);
};

console.log(mergeSort([10, 7, 8, 9, 1, 5])); //[1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 70, 40, 55])); //[10, 20, 30, 40, 55, 60]
