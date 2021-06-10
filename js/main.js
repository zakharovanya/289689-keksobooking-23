const getRandomNumber = (min = 0, max = 10, precision = 3) => (Math.random() * (max - min + 1) + min).toFixed(Math.abs(precision));

const getRandomInteger = (min = 0, max = 10) => getRandomNumber(min, max, 0);

getRandomInteger();
getRandomNumber();

const createAvatar = () => {
  const avatarArray = [];
  for (let i = 1; i <= 10; i++) {
    avatarArray.push(`img/avatars/user0${[i]}.png`);
  }
  return avatarArray;
};

const AVATAR = createAvatar();

const createTitle = () => {
  const titleArray = [];
  for (let i = 1; i <= 10; i++) {
    titleArray.push(`Заголовок ${[i]}`);
  }
  return titleArray;
};

const TITLE = createTitle();

const getAddress = () => {
  const horizontal = getRandomNumber();
  const vertical = getRandomNumber();
  return `${horizontal}, ${vertical}`;
};

const ADDRESS = new Array(10).fill(null).map(() => getAddress());

const PRICE = new Array(10).fill(null).map(() => getRandomInteger());

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS = new Array(10).fill(null).map(() => getRandomInteger());

const GUESTS = new Array(10).fill(null).map(() => getRandomInteger());

const CHEKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHEKOUT = CHEKIN;

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const createDescription = () => {
  const descriptionArray = [];
  for (let i = 1; i <= 10; i++) {
    descriptionArray.push(`Заголовок ${[i]}`);
  }
  return descriptionArray;
};

const DESCRIPTION = createDescription();

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getLocation = () => {
  const lat = getRandomNumber(35.65, 35.7, 5);
  const lng = getRandomNumber(139.7, 139.8, 5);
  return `${lat  }, ${  lng}`;
};

const LOCATION = new Array(10).fill(null).map(() => getLocation());

const SIMILAR_OFFERS_COUNT = 10;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createOffers = function () {
  return {
    author: getRandomArrayElement(AVATAR),
    offer: getRandomArrayElement(TITLE) + getRandomArrayElement(ADDRESS) + getRandomArrayElement(PRICE) + getRandomArrayElement(TYPE) + getRandomArrayElement(ROOMS) +  getRandomArrayElement(GUESTS) + getRandomArrayElement(CHEKIN) + getRandomArrayElement(CHEKOUT)+ getRandomArrayElement(FEATURES) + getRandomArrayElement(DESCRIPTION) + getRandomArrayElement(PHOTOS),
    location: getRandomArrayElement(LOCATION),
  };
};

const similarOffers = new Array(SIMILAR_OFFERS_COUNT).fill(null).map(() => createOffers());

similarOffers ();
