// My solution
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  const max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
// Best solution
const kidsWithCandies = (candies, extraCandies) => {
  const result = [];
  const maxItem = Math.max(...candies);
  for (let el of candies) {
    result.push(el + extraCandies >= maxItem);
  }
  return result;
};
