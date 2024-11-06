// 2 - Remove Duplicates
const removeDuplicates = (arrOfNumbers: number[]): number[] => {
  const newFreshArr: number[] = [...new Set(arrOfNumbers)];
  return newFreshArr;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
