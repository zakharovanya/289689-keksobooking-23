const getRandomNumber = (min = 0, max = 10, precision = 3) => (Math.random() * (max - min + 1) + min).toFixed(Math.abs(precision));

const getRandomInteger = (min = 0, max = 10) => getRandomNumber(min, max, 0);

const getRandomArray = (array) => array.slice(0, getRandomInteger(1, array.length - 1));

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const addLeadingZeroIfNeeded = (number) => number < 10 ? `0${number}` : `${number}`;

export {getRandomNumber, getRandomInteger, getRandomArray, getRandomArrayElement, addLeadingZeroIfNeeded};
