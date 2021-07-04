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

const adFormDisabled = document.querySelector('.ad-form');
adFormDisabled.classList.add('ad-form--disabled');
adFormDisabled.querySelectorAll('fieldset').forEach((fielsetForm) => {
  fielsetForm.classList.add('disabled');
});

const mapFilterDisabled = document.querySelector('.map__filters');
mapFilterDisabled.classList.add('map__filters--disabled');
mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
  selectFilter.classList.add('disabled');
});

const getActiveForm = (fielsetForm) => {
  adFormDisabled.addEventListener('mouseover', () => {
    adFormDisabled.classList.remove('ad-form--disabled');
    fielsetForm.classList.remove('disabled');
  });
};

const getActiveFilter = (selectFilter) => {
  mapFilterDisabled.addEventListener('mouseover', () => {
    mapFilterDisabled.classList.remove('ad-form--disabled');
    selectFilter.classList.remove('disabled');
  });
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

offerPrice.addEventListener('input', () => {
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

roomsSelect.addEventListener('input', () => {
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

export {getActiveForm, getActiveFilter};
