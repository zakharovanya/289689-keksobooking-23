import {showAlert, onSuccess} from './util.js';
import {sendData} from './api.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGHT = 1000000;
const MinPriceOfType = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const offerTitle = document.querySelector('#title');
const offerPrice = document.querySelector('#price');
const roomsSelect = document.querySelector('#room__number');
const selectToSyncTime = document.getElementById('timein');
const formButton = document.querySelector('.ad-form__submit');

export const setAdFormEnabled = () => {
  const adFormDisabled = document.querySelector('.ad-form');
  if (!L.map('map-canvas').on('load')) {
    adFormDisabled.classList.add('ad-form--disabled');
    adFormDisabled.querySelectorAll('fieldset').forEach((fielsetForm) => {
      fielsetForm.classList.add('disabled');
    });
  } else {
    adFormDisabled.classList.remove('ad-form--disabled');
    adFormDisabled.querySelectorAll('fieldset').forEach((fielsetForm) => {
      fielsetForm.classList.remove('disabled');
    });
  }
};

const generateError = (text) => {
  const error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
};

offerTitle.addEventListener('input', () => {
  const valueTitleLength = offerTitle.value.length;

  if (valueTitleLength < MIN_TITLE_LENGTH) {
    offerTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueTitleLength } симв.`);
  } else if (valueTitleLength > MAX_TITLE_LENGTH) {
    offerTitle.setCustomValidity(`Удалите лишние ${  valueTitleLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    offerTitle.setCustomValidity('');
  }
  offerTitle.reportValidity();
});


const syncTime = (checkin, checkout) => {
  if (!checkin) {
    return false;
  }
  else {
    const checkinValue = checkin.value;
    const checkoutSync = document.getElementById(checkout);
    const checkoutOptions = checkoutSync.getElementsByTagName('option');
    for (let i = 0, checkoutLength = checkoutOptions.length; i < checkoutLength; i++) {
      if (checkoutOptions[i].value === checkinValue) {
        checkoutOptions[i].selected = true;
      }
    }
  }
};

selectToSyncTime.onchange = () => {
  syncTime(this,'timeout');
};

export const setOfferFormSubmit = () => {
  formButton.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess('Ваше объявление успешно размещено!'),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

export const clearForm = (adFormElement) => {
  const formElements = adFormElement.elements;
  adFormElement.reset();
  for (let i = 0; i < formElements.length; i++) {
    const formFieldType = formElements[i].type.toLowerCase();
    switch(formFieldType) {
      case 'text':
      case 'textarea':
      case 'hidden':
        formElements[i].value = '';
        break;

      case 'radio':
      case 'checkbox':
        if (formElements[i].checked) {
          formElements[i].checked = false;
        }
        break;

      case 'select-one':
      case 'select-multi':
        formElements[i].selectedIndex = -1;
        break;

      default:
        break;
    }
  }
};

offerPrice.addEventListener('change', () => {
  for (const type in MinPriceOfType) {
    offerPrice.getElementById('price').placeholder = MinPriceOfType[type];
    if (!offerPrice.value) {
      const error = generateError('Цена не указана');
      offerPrice.parentElement.insertBefore(error, offerPrice);
    } else if (offerPrice.value < MinPriceOfType[type]) {
      const error = generateError(`Цена должна быть выше ${(MinPriceOfType[type])}`);
      offerPrice.parentElement.insertBefore(error, offerPrice);
    } else if (offerPrice.value < MAX_PRICE_LENGHT) {
      const error = generateError(`Цена должна быть ниже ${MAX_PRICE_LENGHT}`);
      offerPrice.parentElement.insertBefore(error, offerPrice);
    } else {
      offerPrice.setCustomValidity('');
    }
  }
  offerPrice.reportValidity();
});

roomsSelect.addEventListener('change', () => {
  const roomValue = roomsSelect.querySelectorAll('option').value;
  const capacitySelect = document.querySelector('#capacity');
  const capacityValue = capacitySelect.querySelectorAll('option').value;
  capacityValue.disabled = true;
  for (const i = 0; i <= 100;) {
    if (roomValue[i] <= capacityValue[i]) {
      capacityValue.disabled = false;
    } else {
      const error = generateError('Число гостей не должно превышать число комнат');
      roomValue.parentElement.insertBefore(error, roomValue);
    }
    roomValue[i].remove();
  }
  roomsSelect.reportValidity();
});
