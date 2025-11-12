const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  let arr = [a, b];

  if (b < a) {
    arr.reverse();
  }

  for (let i = arr[0] + 1; i < arr[1]; i++) {
    arr.push(i);
  }

  let result = arr.reduce((sum, current) => sum + current, 0);

  console.log(arr);
  console.log(result);
  return result;
};

sumAll(10, 3);

// Do not edit below this line
module.exports = sumAll;
