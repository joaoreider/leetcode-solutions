// My solution
var canPlaceFlowers = function (flowerbed, n) {
  let flowers = [0, ...flowerbed, 0];
  console.log(flowers);
  for (let i = 1; i < flowers.length - 1; i++) {
    if (flowers[i - 1] === 0 && flowers[i] === 0 && flowers[i + 1] === 0) {
      flowers[i] = 1;
      n -= 1;
    }
  }
  return n <= 0;
};

//Best solution
var canPlaceFlowers = function (flowerbed, n) {
  let max = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    const currentPot = flowerbed[i];
    const previousPot = flowerbed[i - 1];
    const nextPot = flowerbed[i + 1];
    if (currentPot != 1 && nextPot != 1 && previousPot != 1) {
      max += 1;
      flowerbed[i] = 1;
    }
  }
  return n <= max;
};
