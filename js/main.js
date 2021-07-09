import {generateOffer} from './mocks.js';
import {setAdFormEnabled} from './form.js';
import {createMarker, markerGroup, setMapFilterEnabled} from'./map.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill(null).map(generateOffer);

offers.forEach((offer) => {
  if (offers.length <= 10) {
    createMarker(offer);
  }
});

markerGroup.clearLayers();

setAdFormEnabled(false);
setMapFilterEnabled(false);
