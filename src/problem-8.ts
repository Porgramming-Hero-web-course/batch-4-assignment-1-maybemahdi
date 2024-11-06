{
  // 8 - function for validateKeys

  interface Person {
    name: string;
    age: number;
    email: string;
  }

  const validateKeys = <T extends Person>(
    person: T,
    keys: (keyof T)[]
  ): boolean => {
    return keys.every((key) => key in person);
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  console.log(validateKeys(person, ["name", "age"])); // true
  //   console.log(validateKeys(person, ["name", "age", "address"])); // false

  //
}
