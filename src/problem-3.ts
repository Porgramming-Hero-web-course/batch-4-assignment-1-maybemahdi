{
  // 3 - count a specific word that how many times does it repeat on given sentence

  const countWordOccurrences = (sentence: string, query: string): number => {
    const words: string[] = sentence.toLowerCase().split(/\s+/);
    const freshQuery: string = query.toLowerCase();
    return words.filter((word) => word === freshQuery).length;
  };

  console.log(countWordOccurrences("I love typescript", "typescript"));
  //
}
