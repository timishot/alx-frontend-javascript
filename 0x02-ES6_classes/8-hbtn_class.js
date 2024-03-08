export default class HolbertonClass {
  constructor(size, location) {
    this._size = 0;
    this._location = '';

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(newValue) {
    const parsedSize = parseInt(newValue, 10);
    if (!Number.isNaN(parsedSize)) {
      this._size = newValue;
    } else {
      throw new TypeError('size must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(newValue) {
    if (typeof newValue === 'string') {
      this._location = newValue;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}
