export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    // Use the setters to perform type checking and set values
    this.name = name;
    this.length = length;
    this.students = students;
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

  get length() {
    return this._length;
  }

  set length(newValue) {
    const number = parseInt(newValue, 10);
    if (!Number.isNaN(number)) {
      this._length = number;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newValue) {
    if (Array.isArray(newValue) && newValue.every((student) => typeof student === 'string')) {
      this._students = newValue;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
