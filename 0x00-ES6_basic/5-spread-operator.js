export default function concatArrays(array1, array2, string) {
    const resultArray = [...array1, ...array2, ...string];
    return resultArray;
}