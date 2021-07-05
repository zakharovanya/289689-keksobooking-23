const setmapFilterEnabled = (enabled) => {
  const mapFilterDisabled = document.querySelector('.map__filters');
  if (enabled) {
    mapFilterDisabled.classList.remove('map__filters--disabled');
    mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
      selectFilter.classList.remove('disabled');
    });
  } else {
    mapFilterDisabled.classList.add('map__filters--disabled');
    mapFilterDisabled.querySelectorAll('select').forEach((selectFilter) => {
      selectFilter.classList.add('disabled');
    });
  }
};

export {setmapFilterEnabled};
