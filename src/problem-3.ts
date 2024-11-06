// 3 - count a specific word that how many time does it repeat

const countWordOccurrences = (sentence: string, query: string): number => {
  const freshSentence: string = sentence.toLowerCase();
  const freshQuery: string = query.toLowerCase();
  return freshSentence.split(freshQuery).length - 1;
};

console.log(
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
);
