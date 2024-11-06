// 5 - getProperty value of given object (generic function)

const getProperty = <
  T extends { name: string; age: number },
  K extends keyof T
>(
  person: T,
  name: K
): T[K] => {
  return person[name];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
