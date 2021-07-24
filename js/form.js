import {showAlert, onSuccessAlert} from './util.js';
import {sendData} from './api.js';

'use strict';

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

const offerForm = document.querySelector('.ad-form');
const offerTitle = offerForm.querySelector('#title');
const selectToSyncTime = document.getElementById('timein');
const selectToSyncRooms = document.getElementById('room_number');
const selectedToSyncType = document.getElementById('type');
const formButton = offerForm.querySelector('.ad-form__submit');
const formButtonReset = offerForm.querySelector('.ad-form__reset');

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


const getSyncSelect = (base, compare) => {
  if (!base) {
    return false;
  }
  else {
    const baseValue = base.value;
    const compareSync = document.getElementById(compare);
    const compareOptions = compareSync.getElementsByTagName('option');
    for (let i = 0, compareLength = compareOptions.length; i < compareLength; i++) {
      compareOptions[i].disabled = true;
      if (compareOptions[i].value <= baseValue) {
        compareOptions[i].disabled = false;
        compareOptions[i].selected = true;
      }
    }
  }
};

selectToSyncTime.onchange = function () {
  getSyncSelect(this,'timeout');
};

selectToSyncRooms.onchange = function () {
  getSyncSelect(this,'capacity');
};

const getValidPrice = (type) => {
  const priceInput = document.querySelector('#price');
  priceInput.addEventListener('input', () => {
    const priceValue = priceInput.value;
    //const minPrice = priceInput.min = priceValue;
    if (priceValue < type) {
      priceInput.setCustomValidity(`Цена должна быть выше минимальной ${type}`);
    } else if (priceValue > MAX_PRICE_LENGHT) {
      priceInput.setCustomValidity(`Цена не должна превышать ${MAX_PRICE_LENGHT}`);
    } else {
      priceInput.setCustomValidity('');
    }
    priceInput.reportValidity();
  });
};

selectedToSyncType.onchange = function () {
  const optionsValue = this.options[this.selectedIndex].value;
  if (optionsValue === 'bungalow') {
    document.getElementById('price').value = MinPriceOfType.BUNGALOW;
    document.getElementById('price').min = MinPriceOfType.BUNGALOW;
    getValidPrice(MinPriceOfType.BUNGALOW);
  } else if (optionsValue === 'flat') {
    document.getElementById('price').value = MinPriceOfType.FLAT;
    document.getElementById('price').min = MinPriceOfType.FLAT;
    getValidPrice(MinPriceOfType.FLAT);
  } else if (optionsValue === 'hotel') {
    document.getElementById('price').value = MinPriceOfType.HOTEL;
    document.getElementById('price').min = MinPriceOfType.HOTEL;
    getValidPrice(MinPriceOfType.HOTEL);
  } else if (optionsValue === 'house') {
    document.getElementById('price').value = MinPriceOfType.HOUSE;
    document.getElementById('price').min = MinPriceOfType.HOUSE;
    getValidPrice(MinPriceOfType.HOUSE);
  } else if (optionsValue === 'palace') {
    document.getElementById('price').value = MinPriceOfType.PALACE;
    document.getElementById('price').min = MinPriceOfType.PALACE;
    getValidPrice(MinPriceOfType.PALACE);
  }
};

export const setOfferFormSubmit = (onSuccess) => {
  formButton.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(onSuccessAlert('Ваше объявление успешно размещено!')),
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

formButtonReset.addEventListener('submit', (evt) => {
  evt.preventDefault();
  clearForm();
});
