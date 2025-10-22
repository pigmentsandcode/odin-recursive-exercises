function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  const mergedArr = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  if (leftIndex < left.length) {
    mergedArr.push(...left.slice(leftIndex));
  }
  if (rightIndex < right.length) {
    mergedArr.push(...right.slice(rightIndex));
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  } else {
    const mid = arr.length / 2;
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
}

console.log("Empty arr: " + mergeSort([]));
console.log("Single item: " + mergeSort([73]));
console.log("In order: " + mergeSort([1, 2, 3, 4, 5]));
console.log("Fib out of order: " + mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("random: " + mergeSort([105, 79, 100, 110]));
