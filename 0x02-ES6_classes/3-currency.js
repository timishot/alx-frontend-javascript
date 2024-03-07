export default class Current {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue === 'string') {
      this._name = newValue;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code}) `;
  }
}
