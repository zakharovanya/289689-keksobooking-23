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

const map = L.map('map-canvas')
  .setView(DEFAULT_MAP_LOCATION, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mapLoad = L.map('map-canvas').on('load');

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

export const setMapFilterEnabled = () => {
  const mapFilterDisabled = document.querySelector('.map__filters');
  if (mapLoad) {
    mapFilterDisabled.classList.remove(DISABLED_CLASS);
    mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
      selectFilter.classList.remove('disabled');
    });
  } else {
    mapFilterDisabled.classList.add(DISABLED_CLASS);
    mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
      selectFilter.classList.add('disabled');
    });
  }
};
