import {showPopup} from './popup.js';

const DISABLED_CLASS = 'map__filters--disabled';

const MARKER_ICON = {
  iconUrl: '../img/main-pin.svg',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
};

const DEFAULT_MAP_LOCATION = {
  lat: 35.6894,
  lng: 139.692,
};

const MAP_SCALE = 10;

const MapFilter = {
  HOUSE_TYPE: [
    'any',
    'bungalow',
    'flat',
    'hotel',
    'house',
    'palace',
  ],
  HOUSE_PRICE: [
    'any',
    'middle',
    'low',
    'high',
  ],
  HOUSE_ROOMS: [
    'any',
    '1',
    '2',
    '3',
  ],
  HOUSE_GUESTS: [
    'any',
    '2',
    '1',
    '0',
  ],
  HOUSE_FEATURES: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
};

const map = L.map('map-canvas')
  .setView(DEFAULT_MAP_LOCATION, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

export const renderMarkers = (offer) => {
  const {lat, lng} = offer;

  const icon = L.icon(MARKER_ICON);

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      showPopup(offer),
      {
        keepInView: true,
      },
    );
};

const mapFilter = document.querySelector('.map__filters');

const housingType = mapFilter.querySelector('#housing-type');
const housingTypeOption = mapFilter.querySelector('[name="housing-type"]');

const pricesValue = mapFilter.querySelector('#housing-price');
const priceValueOption = mapFilter.querySelector('[name="housing-price"]');

const roomsNumbers = mapFilter.querySelector('#housing-rooms');
const roomsNumbersOption = mapFilter.querySelector('[name="housing-rooms"]');

const guestsNumbers = mapFilter.querySelector('#housing-guests');
const guestsNumbersOption = mapFilter.querySelector('[name="housing-guests"]');

const housingFeatures = mapFilter.querySelector('#housing-features');
const housingFeaturesInput = mapFilter.querySelector('[name="housing-guests"]');

export const setTypeChange = () => {
  housingType.addEventListener('change', (evt) => {
    const selectHouseType = MapFilter.HOUSE_TYPE;
    evt.target.value = selectHouseType;
    housingTypeOption.value = selectHouseType;
  });
};

export const setPriceChange = () => {
  pricesValue.addEventListener('change', (evt) => {
    const selectHousePrice = MapFilter.HOUSE_PRICE;
    evt.target.value = selectHousePrice;
    priceValueOption.value = selectHousePrice;
  });
};

export const setRoomsChange = () => {
  roomsNumbers.addEventListener('change', (evt) => {
    const selectHouseRoom = MapFilter.HOUSE_ROOMS;
    evt.target.value = selectHouseRoom;
    roomsNumbersOption.value = selectHouseRoom;
  });
};

export const setGuestsChange = () => {
  guestsNumbers.addEventListener('change', (evt) => {
    const selectHouseGuests = MapFilter.HOUSE_GUESTS;
    evt.target.value = selectHouseGuests;
    guestsNumbersOption.value = selectHouseGuests;
  });
};

export const setFeaturesChange = () => {
  housingFeatures.addEventListener('change', (evt) => {
    const selectHouseFeatures = MapFilter.HOUSE_GUESTS;
    evt.target.value = selectHouseFeatures;
    housingFeaturesInput.value = selectHouseFeatures;
  });
};

export const setMapFilterEnabled = () => {
  const mapFilterDisabled = document.querySelector('.map__filters');
  if (!(L.map('map-canvas').on('load'))) {
    mapFilterDisabled.classList.add(DISABLED_CLASS);
    mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
      selectFilter.classList.add('disabled');
    });
  } else {
    mapFilterDisabled.classList.remove(DISABLED_CLASS);
    mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
      selectFilter.classList.remove('disabled');
    });
  }
};
