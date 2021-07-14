import './api.js';
import {generateOffer} from './mocks.js';
import {setUserFormSubmit, setAdFormEnabled} from './form.js';
import {renderMarkers, setMapFilterEnabled} from'./map.js';
import {showPopup} from './popup.js';
import {getData} from './api.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill(null).map(generateOffer);

getData(() => {
  showPopup(offers.slice(0, OFFERS_COUNT));
});

offers.slice(0, 11).forEach((offer) => {
  renderMarkers(offer);
});

setUserFormSubmit();
setAdFormEnabled(false);
setMapFilterEnabled(false);
