function secondLargest(arr) {
  let largestNumber = 0,
    secondLargestNumber = 0;

  for (let i of arr) {
    if (i > largestNumber) {
      largestNumber = i;
    }
  }

  for (let j of arr) {
    if (j > secondLargestNumber && j < largestNumber) {
      secondLargestNumber = j;
    }
  }

  return secondLargestNumber;
}
module.exports = secondLargest;
