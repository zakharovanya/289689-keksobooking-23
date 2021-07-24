import {createMarkers, setMapFilterEnabled, setAdFormEnabled, setTypeChange, setPriceChange, setRoomsChange, setGuestsChange, setFeaturesChange} from'./map.js';
import {getData} from './api.js';
import {debounce} from './util.js';
import {setOfferFormSubmit, clearForm} from './form.js';

'use strict';

const RERENDER_DELAY = 500;

setAdFormEnabled(true);
setMapFilterEnabled(true);

getData((offers) => {
  createMarkers(offers);
  setTypeChange(debounce(() => createMarkers(offers), RERENDER_DELAY));
  setPriceChange(debounce(() => createMarkers(offers), RERENDER_DELAY));
  setRoomsChange(debounce(() => createMarkers(offers), RERENDER_DELAY));
  setGuestsChange(debounce(() => createMarkers(offers), RERENDER_DELAY));
  setFeaturesChange(debounce(() => createMarkers(offers), RERENDER_DELAY));
});

setOfferFormSubmit(clearForm);
