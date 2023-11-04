// My solution
var gcdOfStrings = function (str1, str2) {
  let smaller = str2;
  let biggest = str1;
  if (smaller > str1) {
    smaller = str1;
    biggest = str2;
  }
  const joker = smaller;

  while (smaller.length > 0) {
    const dividesBiggest =
      biggest.split(smaller).filter((i) => i !== "").length > 0 ? false : true;
    const dividesJoker =
      joker.split(smaller).filter((i) => i !== "").length > 0 ? false : true;

    if (dividesBiggest && dividesJoker) {
      return smaller;
    }
    smaller = smaller.slice(0, -1);
  }
  return "";
};

// Best solution
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const commonLen = gcd(str1.length, str2.length);
  return str1.substring(0, commonLen);
};
