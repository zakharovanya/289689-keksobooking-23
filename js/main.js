const getRandomNumber = function (min = 0, max = 10, precision = 3) {
  return (Math.random() * (max - min + 1) + min).toFixed(Math.abs(precision));
};

const getRandomInteger = function (min = 0, max = 10) {
  return getRandomNumber(min, max, 0);
};

getRandomInteger();
getRandomNumber();
