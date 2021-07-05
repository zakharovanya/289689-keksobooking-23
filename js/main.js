import {showPopup} from './popup.js';
import {generateOffer} from './mocks.js';
import {setAdFormEnabled} from './form.js';
import {setMapFilterEnabled} from'./map.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill(null).map(generateOffer);
showPopup(offers[0]);
setAdFormEnabled(false);
setMapFilterEnabled(false);
