const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const updateFeature = (features) => {
  const item = document.createDocumentFragment();
  features.forEach((offerFeatureItem) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${offerFeatureItem}`);
    item.appendChild(featureItem);
  });
  return item;
};

const updatePhotos = (offerPhotos, popupPhotosList) => {
  if (!offerPhotos) {
    popupPhotosList.classList.add('hidden');
    return;
  }

  const photoItem = popupPhotosList.querySelector('.popup__photo');
  const photoTemplate = photoItem.cloneNode(true);
  photoItem.remove();

  offerPhotos.forEach((photo) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.src = photo;
    popupPhotosList.appendChild(photoElement);
  });
};

export const showPopup = (offer) => {
  const popup = popupTemplate.cloneNode(true);

  popup.querySelector('.popup__title').textContent = offer.offer.title;
  popup.querySelector('.popup__text--address').textContent = offer.offer.address;
  popup.querySelector('.popup__text--price').textContent = `${offer.offer.price  } ₽/ночь`;
  popup.querySelector('.popup__type').textContent = offer.offer.type;
  popup.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms  } комнаты для ${  offer.offer.guests  } гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.offer.checkin  }, выезд до ${  offer.offer.checkout}`;
  popup.querySelector('.popup__avatar').src = offer.author.avatar;
  const offerFeatureList = popup.querySelector('.popup__features');
  offerFeatureList.innerHTML = '';
  if (offer.offer.features) {
    const offerFeatureItem = updateFeature(offer.offer.features);
    offerFeatureList.appendChild(offerFeatureItem);
  }
  popup.querySelector('.popup__description').textContent = offer.offer.description;
  updatePhotos(offer.offer.photos, popup.querySelector('.popup__photos'));

  return popup;
};
