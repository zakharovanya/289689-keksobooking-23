const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const minPriceOfType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const MAX_PRICE_LENGHT = 1000000;

const offerTitle = document.querySelector('#title');
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

const offerPrice = document.querySelector('#price');
offerPrice.addEventListener('input', () => {
  const valuePriceLength = offerPrice.value.length;
  for (const type in minPriceOfType) {
    offerPrice.getElementById('price').placeholder = minPriceOfType[type];
    if (valuePriceLength < minPriceOfType[type]) {
      offerPrice.setCustomValidity(`Ещё ${  (minPriceOfType[type]) - valuePriceLength } симв.`);
    } else if (valuePriceLength > MAX_PRICE_LENGHT) {
      offerPrice.setCustomValidity(`Уменьшите цену на ${  valuePriceLength - MAX_PRICE_LENGHT } симв.`);
    } else {
      offerPrice.setCustomValidity('');
    }
  }
  offerPrice.reportValidity();
});

const roomsSelect = document.querySelector('#room__number');
roomsSelect.addEventListener('input', () => {
  const roomValue = roomsSelect.querySelectorAll('option').value;
  const capacitySelect = document.querySelector('#capacity');
  const capacityOption = capacitySelect.querySelectorAll('option');
  capacityOption.disabled = true;
  if (roomValue === 1) {
    capacityOption.value = 1;
    capacityOption.disabled = false;
    roomsSelect.setCustomValidity('Для 1 гостя');
  } else if (roomValue === 2) {
    capacityOption.value = 1 + 2;
    capacityOption.disabled = false;
    roomsSelect.setCustomValidity('Для 2 гостей или для 1 гостя');
  } else if (roomValue === 3) {
    capacityOption.value = 1 + 2 + 3;
    capacityOption.disabled = false;
    roomsSelect.setCustomValidity('Для 3 гостей», «для 2 гостей» или «для 1 гостя');
  } else if (roomValue === 100) {
    capacityOption.value = 0;
    capacityOption.disabled = false;
    roomsSelect.setCustomValidity('Не для гостей');
  } else {
    offerPrice.setCustomValidity('');
  }
  roomsSelect.reportValidity();
});

