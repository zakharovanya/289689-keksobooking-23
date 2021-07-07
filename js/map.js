const map = L.map('map-canvas')
  .setView({
    lat: 35.6894,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

export const markerGroup = L.layerGroup().addTo(map);
export const setMapFilterEnabled = (enabled) => {
  const mapFilterDisabled = document.querySelector('.map__filters');
  if (enabled) {
    L.map('map-canvas').on('load', () => {
      mapFilterDisabled.classList.remove('map__filters--disabled');
      mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
        selectFilter.classList.remove('disabled');
      });
    });
  } else {
    mapFilterDisabled.classList.add('map__filters--disabled');
    mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
      selectFilter.classList.add('disabled');
    });
  }
};
