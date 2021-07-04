import {showPopup} from './popup.js';
import {generateOffer} from './mocks.js';
import {getActiveForm, getActiveFilter} from './form.js';

const OFFERS_COUNT = 10;

const offers = new Array(OFFERS_COUNT).fill(null).map(generateOffer);
showPopup(offers[0]);

getActiveForm();
getActiveFilter();
