interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "masala",
  price: 30,
};

interface Shop {
  readonly _id: number;
  name: string;
}

const s: Shop = { _id: 1, name: "ChaiCode Cafe" };
// s.id =2

// how to handke functions in interfaces
interface Calculator {
  (pirce: number): number;
}

const apply50: Calculator = (p) => p * 0.5;

interface TeaMachine {
  start(price?: number): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

// index signatures
interface ChaiRatings {
  [flavour: string]: number;
}
// rarely used
const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Mohan",
  age: 43,
};

interface A {
  a: string;

  
}
interface B {
  b: string;
}

interface C extends A, B {}


