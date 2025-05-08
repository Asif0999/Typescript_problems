{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper) return input.toUpperCase();
    else return input.toLowerCase();
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const res: T[] = [];
    arrays.forEach((array) => {
      for (let j = 0; j < array.length; j++) {
        res.push(array[j]);
      }
    });
    return res;
  }

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");

  function processValue(value: string | number): number {
    if (typeof value === "string") return value.length;
    else return value * 2;
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    let highest = products[0];
    for (const product of products) {
      if (product.price > highest.price) {
        highest = product;
      }
    }
    return highest;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) return "Weekend";
    else return "Weekday";
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else resolve(n * n);
      }, 1000);
    });
  }
}
