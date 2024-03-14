const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    //count 123
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
};

export { queryAPI, weakMap };
