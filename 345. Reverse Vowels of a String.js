/**
 * @param {string} s
 * @return {string}
 */

// My solution
var reverseVowels = function (s) {
  const voewls = "AaEeIiOoUu";
  let reverseOrder = "";
  let count = 0;
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (voewls.includes(s[i])) reverseOrder += s[i];
  }
  for (let i = 0; i < s.length; i++) {
    if (!voewls.includes(s[i])) {
      result += s[i];
    } else {
      result += reverseOrder[count];
      count++;
    }
  }
  return result;
};

// Best solution
var reverseVowels = function (s) {
  let left_ptr = 0;
  let right_ptr = s.length - 1;
  let sArr = s.split("");
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  while (left_ptr < right_ptr) {
    if (!vowels[sArr[left_ptr]]) {
      left_ptr += 1;
    }
    if (!vowels[sArr[right_ptr]]) {
      right_ptr -= 1;
    }
    if (vowels[sArr[right_ptr]] && vowels[sArr[left_ptr]]) {
      const temp = sArr[right_ptr];
      sArr[right_ptr] = sArr[left_ptr];
      sArr[left_ptr] = temp;
      left_ptr += 1;
      right_ptr -= 1;
    }
  }
  return sArr.join("");
};
