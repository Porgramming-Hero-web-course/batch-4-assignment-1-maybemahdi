{
  // 5 - getProperty value of given object (generic function)

  const getProperty = <
    T extends { name: string; age: number },
    K extends keyof T
  >(
    obj: T,
    key: K
  ): T[K] => {
    return obj[key];
  };

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

  //
}
