import { generateOffers } from './mocks.js';

const similarListElement = document.querySelector('#map__canvas');
const similarOffersTemplate = document.querySelector('#card').content.querySelector('.popup');

const showPopup = generateOffers();

const similarListFragment = document.createDocumentFragment();

showPopup.forEach((author, offer) => {
  const offerElementSelectors = similarOffersTemplate.cloneNode(true);
  offerElementSelectors.querySelector('.popup__title').textContent = offer.title;
  offerElementSelectors.querySelector('.popup__text--address').textContent = offer.address;
  offerElementSelectors.querySelector('.popup__text--price').textContent = `${offer.price  } ₽/ночь`;
  offerElementSelectors.querySelector('.popup__type').textContent = offer.type;
  offerElementSelectors.querySelector('.popup__text--capacity').textContent = `${offer.rooms  } комнаты для ${  offer.guests  } гостей`;
  offerElementSelectors.querySelector('.popup__text--time').textContent = `Заезд после${  offer.checkin  }, выезд до ${  offer.checkout}`;
  const featureListElements = offerElementSelectors.querySelector('.popup__features');
  const modifiersClassElement = offer.features.map((feature) => `popup__feature--${feature}`);
  featureListElements.querySelectorAll('.popup__feature').forEach((featureElement) => {
    const modifierElement = featureElement.classList[1];
    if (!modifiersClassElement.includes(modifierElement)) {
      featureElement.remove();
    }
  });
  const offerDescription = offerElementSelectors.querySelector('.popup__title').textContent = offer.description;
  if (offerDescription.length <= 0) {
    offerDescription.classList.add('hidden');
  }

  const photoList = offerElementSelectors.querySelector('.popup__photos');
  const photoItem = photoList.querySelectorAll('.popup__photo');
  photoItem.src = offer.photos.imgUrl;
  if (photoItem.length <= 0) {
    photoItem.classList.add('hidden');
  }
  offerElementSelectors.querySelector('.popup__avatar').src = (author.avatar).imgUrl;

  similarListElement.appendChild(offerElementSelectors);
});

similarListElement.appendChild(similarListFragment);
