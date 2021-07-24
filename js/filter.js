const DEFAULT_VALUE = 'any';

const getOfferRank = (offers) => {
  const housingTypeOption = document.getElementById('housing-type');
  const priceValueOption = document.getElementById('housing-price');
  const roomsNumbersOption = document.getElementById('housing-rooms');
  const guestsNumbersOption = document.getElementById('housing-guests');
  const housingFeaturesInput = document.querySelector('.map__checkbox');
  let rank = 0;
  if ((housingTypeOption.value || DEFAULT_VALUE) === offers.offer.type) {
    rank += 4;
  }
  if (offers.offer.price === (priceValueOption.value || DEFAULT_VALUE)) {
    rank += 3;
  }
  if (offers.offer.rooms === (Number(roomsNumbersOption.value) || DEFAULT_VALUE)) {
    rank += 2;
  }
  if (offers.offer.guests === (Number(guestsNumbersOption.value) || DEFAULT_VALUE)) {
    rank += 2;
  }
  if (offers.offer.features === housingFeaturesInput.value) {
    rank += 1;
  }
  return rank;
};

export const compareOffers = (offerA, offerB) => {
  const rankA = getOfferRank(offerA);
  const rankB = getOfferRank(offerB);

  return rankB - rankA;
};
