// 7 - get car age via Class (OOP)

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge() {
    const carAge = new Date().getFullYear() - this.year;
    console.log(carAge);
    return carAge;
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();