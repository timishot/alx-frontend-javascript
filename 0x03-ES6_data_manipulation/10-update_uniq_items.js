const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((quanity, item) => {
    if (quanity === 1) {
      map.set(item, 100);
    }
  });
};

export default updateUniqueItems;
