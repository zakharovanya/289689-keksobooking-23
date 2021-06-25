const similarListElement = document.querySelector('.map__canvas');
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const updateFeatures = (offerFeatures, popupFeaturesList) => {
  if (offerFeatures.length === 0) {
    popupFeaturesList.classList.add('hidden');
    return;
  }
  popupFeaturesList.querySelectorAll('.popup__feature').forEach((featureElement) => {
    for (const feature of offerFeatures) {
      const featureSelector = `popup__feature--${feature}`;
      if (!featureElement.classList.contains(featureSelector)) {
        featureElement.remove();
      }
    }
  });
};

const updatePhotos = (offerPhotos, popupPhotosList) => {
  if (offerPhotos.length === 0) {
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

export const showPopup = ({author, offer}) => {
  const popup = popupTemplate.cloneNode(true);

  popup.querySelector('.popup__title').textContent = offer.title;
  popup.querySelector('.popup__text--address').textContent = offer.address;
  popup.querySelector('.popup__text--price').textContent = `${offer.price  } ₽/ночь`;
  popup.querySelector('.popup__type').textContent = offer.type;
  popup.querySelector('.popup__text--capacity').textContent = `${offer.rooms  } комнаты для ${  offer.guests  } гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после${  offer.checkin  }, выезд до ${  offer.checkout}`;
  popup.querySelector('.popup__avatar').src = author.avatar;
  updateFeatures(offer.features, popup.querySelector('.popup__features'));
  const offerDescription = popup.querySelector('.popup__title').textContent = offer.description;
  if (offerDescription.length === 0) {
    offerDescription.classList.add('hidden');
  }
  updatePhotos(offer.photos, popup.querySelector('.popup__photos'));

  similarListElement.appendChild(popup);
};
