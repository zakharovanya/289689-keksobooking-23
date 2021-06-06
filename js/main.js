const getRandomNumber = function (min = 0, max = 10, precision = 3) {
  return (Math.random() * (max - min + 1) + min).toFixed(Math.abs(precision));
};

const getRandomInteger = function (min = 0, max = 10) {
  return getRandomNumber(min, max, 0);
};

getRandomInteger();
getRandomNumber();

const createAvatarLink = function () {
  const avatarLink = (number) => {
    return this.url + number + this.filetype;
  };

  this.number.forEach(avatarLink);
};

const avatar = {
  url: 'img/avatars/user0',
  number: getRandomInteger(1, 8),
  filetype: '.png',
  createAvatarLink,
};

const title = [
  'Заголовок 1',
  'Заголовок 2',
  'Заголовок 3',
  'Заголовок 4',
];

const address = {
  horizontal: getRandomNumber(),
  vertical: getRandomNumber(),
};

const price = getRandomInteger();

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const rooms = getRandomInteger();

const guests = getRandomInteger();

const checkin = [
  '12:00',
  '13:00',
  '14:00',
];

const checkout = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const description = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const location = {
  lat: getRandomNumber(35.65, 35.7, 5),
  lng: getRandomNumber(139.7, 139.8, 5),
};

const SIMILAR_OBJECT_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createObject = () => {
  return {
    author: getRandomArrayElement(avatar.createAvatarLink()),
    offer: getRandomArrayElement(title) + getRandomArrayElement(address) + getRandomArrayElement(type) + getRandomArrayElement(rooms) +  getRandomArrayElement(guests) + getRandomArrayElement(checkin) + getRandomArrayElement(checkout)+ getRandomArrayElement(features) + getRandomArrayElement(description) + getRandomArrayElement(photos),
    location: getRandomArrayElement(location),
  },
};

const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(() => createObject());
