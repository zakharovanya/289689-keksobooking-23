import { similarOffers } from './main.js';

const similarListElement = document.querySelector('#map__canvas');
const similarOffersTemplate = document.querySelector('#card').content.querySelector('.popup');

const createOffers = similarOffers();

const similarListFragment = document.createDocumentFragment();

createOffers.forEach((author, offer) => {
  const offerElement = similarOffersTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price  } ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = offer.type;
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms  } комнаты для ${  offer.guests  } гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после${  offer.checkin  }, выезд до ${  offer.checkout}`;
  const featureListElements = offerElement.querySelector('.popup__features');
  const modifiers = (offer.features).map((feature) => `popup__feature--${feature}`);
  featureListElements.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  const offerDescription = offerElement.querySelector('.popup__title').textContent = offer.description;
  if (offerDescription.length <= 0) {
    offerDescription.classList.add('hidden');
  }
  offerElement.querySelector('.popup__photos').src = (offer.photos).imgUrl;
  offerElement.querySelector('.popup__avatar').src = (author.avatar).imgUrl;

  similarListElement.appendChild(offerElement);
});

similarListElement.appendChild(similarListFragment);
