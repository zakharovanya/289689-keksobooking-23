const getRandomInteget = function (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteget();

const getRandomNumber = function (min,max,numbers) {
  min = Math.ceil(min);
  max = Math.floor(max);
  numbers = numbers || 0;
  const randomNumber = Math.random() * (max - min + 1) + min;
  return randomNumber.toFixed(numbers);
};

getRandomNumber();
