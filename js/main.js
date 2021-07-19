import {renderMarkers, setMapFilterEnabled, setTypeChange, setPriceChange, setRoomsChange, setGuestsChange, setFeaturesChange} from'./map.js';
import {showPopup} from './popup.js';
import {getData} from './api.js';
import {setOfferFormSubmit, clearForm, setAdFormEnabled} from './form.js';

const OFFERS_COUNT = 10;
const RERENDER_DELAY = 500;

const offers = new Array(OFFERS_COUNT).fill(null).map();

getData(() => {
  showPopup(offers);
  setTypeChange(_.debounce(() => showPopup(offers), RERENDER_DELAY));
  setPriceChange(_.debounce(() => showPopup(offers), RERENDER_DELAY));
  setRoomsChange(_.debounce(() => showPopup(offers), RERENDER_DELAY));
  setGuestsChange(_.debounce(() => showPopup(offers), RERENDER_DELAY));
  setFeaturesChange(_.debounce(() => showPopup(offers), RERENDER_DELAY));
});

offers.slice(0, 11).forEach((offer) => {
  renderMarkers(offer);
});

setOfferFormSubmit(clearForm);
setAdFormEnabled(false);
setMapFilterEnabled(false);
