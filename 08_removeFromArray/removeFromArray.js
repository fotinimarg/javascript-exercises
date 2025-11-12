function inArr(val, arg) {
  return val === arg;
}

const removeFromArray = function (arr, ...theArgs) {
  let newArr = [];

  arr.forEach((item) => {
    if (!theArgs.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
