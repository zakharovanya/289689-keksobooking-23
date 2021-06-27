import {showPopup} from './popup.js';
import {generateOffer} from './mocks.js';
import './form.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill(null).map(generateOffer);
showPopup(offers[0]);
