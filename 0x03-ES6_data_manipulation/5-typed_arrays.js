const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view on the ArrayBuffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  // Create and return a DataView on the ArrayBuffer
  const dataView = new DataView(buffer);

  return dataView;
};

export default createInt8TypedArray;
