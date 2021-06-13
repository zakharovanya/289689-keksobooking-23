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

const SIMILAR_OFFERS_COUNT = 10;

const getRandomNumber = (min = 0, max = 10, precision = 3) => (Math.random() * (max - min + 1) + min).toFixed(Math.abs(precision));

const getRandomInteger = (min = 0, max = 10) => getRandomNumber(min, max, 0);

const getRandomArray = (array) => array.slice(0, getRandomInteger(1, array.length - 1));

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const addLeadingZeroIfNeeded = (number) => number < 10 ? `0${number}` : `${number}`;

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

similarOffers();
