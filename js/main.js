import {OFFER_TYPES, CHECKINS, FEATURES, PHOTOS, SIMILAR_OFFERS_COUNT} from './mocks.js';
import {getRandomNumber, getRandomInteger, getRandomArray, getRandomArrayElement, addLeadingZeroIfNeeded} from './util.js';
import './map.js';
import './popup.js';

const generateOffer = () => {
  const offerlocation = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5),
  };
  const rooms = getRandomInteger(1, 4);
  const ckeckin = getRandomArrayElement(CHECKINS);
  return {
    author: {
      avatar: `img/avatars/user0${addLeadingZeroIfNeeded(getRandomInteger(1, 10))}.png`,
    },
    offer: {
      title: 'Супер-пупер объявление',
      description: 'Приезжайте покупайте отдыхайте',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(1, 10000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: rooms,
      guests: getRandomInteger(1, rooms),
      checkin: ckeckin,
      checkout: ckeckin,
      features: getRandomArray(FEATURES),
      photos: getRandomArray(PHOTOS),
    },
    location: offerlocation,
  };
};

const generateOffers = (amount) => new Array(amount).fill(null).map(generateOffer);

const similarOffers = generateOffers(SIMILAR_OFFERS_COUNT);

similarOffers;
