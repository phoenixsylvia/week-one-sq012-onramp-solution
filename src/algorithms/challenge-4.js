function sumTwoSmallestNums(arr) {
  let newArray = [];
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArray.push(arr[i]);
      newArray.sort((a, b) => a - b);
      result = newArray[0] + newArray[1];
    }
  }
  return result;
}
module.exports = sumTwoSmallestNums;
