const repeatString = function (string, num) {
  let repeated = "";

  if (Number.isInteger(num) && num >= 0) {
    for (let i = 0; i < num; i++) {
      repeated = repeated + string;
    }
  } else {
    return "ERROR";
  }

  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
