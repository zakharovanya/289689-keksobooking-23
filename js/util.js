const ALERT_SHOW_TIME = 5000;

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('error');
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export const onSuccessAlert = (message) => {
  const successContainer = document.createElement('div');
  successContainer.classList.add('success');
  successContainer.textContent = message;
  document.body.append(successContainer);

  setTimeout(() => {
    successContainer.remove();
  }, ALERT_SHOW_TIME);
};

export const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
