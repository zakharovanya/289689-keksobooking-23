const getRandomInteget = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInteget = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.abs(randomInteget);
};

const getRandomNumber = function (min = 0, max = 10, precision = 3) {
  const randomNumber = (Math.random() * (max - min + 1) + min).toFixed(Math.abs(precision));
  return Math.abs(randomNumber);
};

getRandomInteget();
getRandomNumber();
