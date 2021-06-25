import {getRandomNumber, getRandomInteger, getRandomArray, getRandomArrayElement, addLeadingZeroIfNeeded} from './util.js';

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

export const generateOffer = () => {
  const offerlocation = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5),
  };
  const rooms = getRandomInteger(1, 4);
  const ckeckin = getRandomArrayElement(CHECKINS);
  return {
    author: {
      avatar: `img/avatars/user${addLeadingZeroIfNeeded(getRandomInteger(1, 10))}.png`,
    },
    offer: {
      title: 'Супер-пупер объявление',
      description: 'Приезжайте покупайте отдыхайте',
      address: `${offerlocation.lat}, ${offerlocation.lng}`,
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
