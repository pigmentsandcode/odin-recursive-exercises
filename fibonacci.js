function fibs(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }
  let firstNum = 0;
  let secondNum = 1;
  let targetNum = n;
  let currNum = 2;
  const seqArr = [0, 1];

  while (currNum < targetNum) {
    const tempNum = firstNum + secondNum;
    seqArr.push(tempNum);
    firstNum = secondNum;
    secondNum = tempNum;
    currNum++;
  }

  return seqArr;
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  let fibsArr = fibsRec(n - 1);
  fibsArr.push(fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2]);
  return fibsArr;
}

console.log(fibs(8));
console.log(fibsRec(8));
