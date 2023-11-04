// My solution
var mergeAlternately = function (word1, word2) {
  let mergedString = "";
  tamWord1 = word1.length;
  tamWord2 = word2.length;
  let smaller = tamWord1;

  if (tamWord2 < tamWord1) {
    smaller = tamWord2;
  }

  for (i = 0; i < smaller; i++) {
    mergedString += word1[i];
    mergedString += word2[i];
  }

  mergedString += word1.substring(smaller);
  mergedString += word2.substring(smaller);
  return mergedString;
};

// Best Solution
var mergeAlternately = function (word1, word2) {
  let mergedString = "";

  let maxLength = word2.length;
  if (word1.length > word2.length) {
    maxLength = word1.length;
  }

  for (let i = 0; i < maxLength; i++) {
    if (word1.length > i) {
      mergedString += word1[i];
    }
    if (word2.length > i) {
      mergedString += word2[i];
    }
  }

  return mergedString;
};
