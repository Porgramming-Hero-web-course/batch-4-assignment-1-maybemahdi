// sum of all array elements
const sumArray = (arrOfNumbers: number[]): number => {
  const sum: number = arrOfNumbers.reduce((total, value) => total + value, 0);
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
