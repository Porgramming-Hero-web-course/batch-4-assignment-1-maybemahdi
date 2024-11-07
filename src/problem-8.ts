{
  // 8 - function for validateKeys

  const validateKeys = <T extends object>(
    person: T,
    keys: (keyof T)[]
  ): boolean => {
    return keys.every((key) => key in person);
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  console.log(validateKeys(person, ["name", "age"])); // true
  console.log(validateKeys(person, ["name", "height"])); // false bcz person obj doesn't include height

  //
}
