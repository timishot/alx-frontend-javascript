export default function cleanSet(set, startString) {
  const list = [];

  // Check if set is an object and startString is a non-empty string
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  // Iterate over each element in the set
  set.forEach((setItem) => {
    // Check if setItem starts with startString
    if (setItem.startsWith(startString)) {
      // Push the substring after startString into the list
      list.push(setItem.slice(startString.length));
    }
  });

  // Join the list elements with hyphens and return the result
  return list.join('-');
}

// const cleanSet = (set, startString) => {
//   const filteredValues = [...set].filter((value) => value.startsWith(startString));

//   const modifiedValues = filteredValues.map((value) => value.slice(startString.length));

//   const resultString = modifiedValues.join('-');

//   return resultString;
// };

// export default cleanSet;
