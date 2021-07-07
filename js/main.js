import {showPopup} from './popup.js';
import {generateOffer} from './mocks.js';
import {setAdFormEnabled} from './form.js';
import {markerGroup, setMapFilterEnabled} from'./map.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill(null).map(generateOffer);
const createMarker = (offer) => {
  const {lat, lng} = offer;

  const icon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
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
      showPopup(offers[0]),
      {
        keepInView: true,
      },
    );
};

offers.slice(0, offers.length / 2).forEach((offer) => {
  createMarker(offer);
});

setAdFormEnabled(false);
setMapFilterEnabled(false);
