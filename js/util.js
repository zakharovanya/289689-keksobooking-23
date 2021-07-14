const ALERT_SHOW_TIME = 5000;

const getRandomNumber = (min = 0, max = 10, precision = 3) => Number((Math.random() * (max - min + 1) + min).toFixed(Math.abs(precision)));

const getRandomInteger = (min = 0, max = 10) => getRandomNumber(min, max, 0);

const getRandomArray = (array) => array.slice(0, getRandomInteger(1, array.length - 1));

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const addLeadingZeroIfNeeded = (number) => number < 10 ? `0${number}` : `${number}`;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('error');
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const onSuccess = (message) => {
  const successContainer = document.createElement('div');
  successContainer.classList.add('success');
  successContainer.textContent = message;
  document.body.append(successContainer);

  setTimeout(() => {
    successContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomNumber, getRandomInteger, getRandomArray, getRandomArrayElement, addLeadingZeroIfNeeded, showAlert, onSuccess};
