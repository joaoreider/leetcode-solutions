// My solution
var reverseWords = function (s) {
  const strArr = s.split(" ").filter((i) => i !== "");
  let result = "";

  for (let i = strArr.length - 1; i >= 0; i--) {
    result += strArr[i] + " ";
  }
  return result.trim();
};

// Best solution
var reverseWords = function (s) {
  var str1 = "";
  //var result = s.trim
  var str = s.trim().split(" ");
  str = str.filter(function (item) {
    return item;
  });
  for (var i = str.length - 1; i >= 0; i--) {
    str1 = str1.concat(str[i]);

    if (i > 0) {
      str1 = str1.concat(" ");
    }
  }
  return str1;
};
