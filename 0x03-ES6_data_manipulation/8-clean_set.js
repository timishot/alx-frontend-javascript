const cleanSet = (set, startString) => {
  const filteredValues = [...set].filter((value) => value.startsWith(startString));

  const modifiedValues = filteredValues.map((value) => value.slice(startString.length));

  const resultString = modifiedValues.join('-');

  return resultString;
};

export default cleanSet;
