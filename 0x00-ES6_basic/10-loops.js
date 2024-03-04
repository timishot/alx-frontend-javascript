export default function appendToEachArrayValue(array, appendString) {
    for (const value of array) {
      // No need for separate variable declaration; directly modify the array element
      array[array.indexOf(value)] = appendString + value;
    }
  
    return array;
}