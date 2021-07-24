import {showPopup} from './popup.js';
import {compareOffers} from './filter.js';

'use strict';

const DISABLED_CLASS = 'map__filters--disabled';
const OFFERS_COUNT = 10;
const MAIN_ICON_URL = './img/main-pin.svg';
const MAIN_ICON_SIZES = [25, 41];
const MAIN_ANCHOR_SIZES = [12.5, 41];
const MAP_SCALE = 12;

const DefaultMapLocation = {
  LAT: 35.6894,
  LNG: 139.692,
};

const housingType = document.getElementById('housing-type');
const pricesValue = document.getElementById('housing-price');
const roomsNumbers = document.getElementById('housing-rooms');
const guestsNumbers = document.getElementById('housing-guests');
const housingFeatures = document.getElementById('housing-features');

const map = L.map('map-canvas')
  .setView({
    lat: DefaultMapLocation.LAT,
    lng: DefaultMapLocation.LNG,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

export const createMarkers = (offers) => {
  offers
    .slice()
    .sort(compareOffers)
    .slice(0, OFFERS_COUNT)
    .forEach((offer) => {
      const {lat, lng} = offer.location;
      const icon = L.icon({
        iconUrl: MAIN_ICON_URL,
        iconSize: MAIN_ICON_SIZES,
        iconAnchor: MAIN_ANCHOR_SIZES,
      });
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
    });
};

export const setTypeChange = (callback) => {
  housingType.onchange = function (evt) {
    markerGroup.clearLayers();
    const selectHouseType = housingType.value;
    evt.target.value = selectHouseType;
    callback();
  };
};

export const setPriceChange = (callback) => {
  pricesValue.onchange = function (evt) {
    markerGroup.clearLayers();
    const selectHousePrice = pricesValue.value;
    evt.target.value = selectHousePrice;
    callback();
  };
};

export const setRoomsChange = (callback) => {
  roomsNumbers.onchange = function (evt) {
    markerGroup.clearLayers();
    const selectHouseRoom = roomsNumbers.value;
    evt.target.value = selectHouseRoom;
    callback();
  };
};

export const setGuestsChange = (callback) => {
  guestsNumbers.onchange = function (evt) {
    markerGroup.clearLayers();
    const selectHouseGuests = guestsNumbers.value;
    evt.target.value = selectHouseGuests;
    callback();
  };
};

export const setFeaturesChange = (callback) => {
  housingFeatures.onchange = function (evt) {
    markerGroup.clearLayers();
    const selectHouseFeatures = housingFeatures.value;
    evt.target.value = selectHouseFeatures;
    callback();
  };
};

const enabled = map.on('load');

export const setMapFilterEnabled = () => {
  const mapFilterDisabled = document.querySelector('.map__filters');
  if (!enabled) {
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

export const setAdFormEnabled = () => {
  const adFormDisabled = document.querySelector('.ad-form');
  if (!enabled) {
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
