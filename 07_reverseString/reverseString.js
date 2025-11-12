const reverseString = function (string) {
  let split = string.split("");
  split = split.reverse();

  return split.join("");
};

// Do not edit below this line
module.exports = reverseString;
