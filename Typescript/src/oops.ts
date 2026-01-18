// class Chai {
//   flavour: string;
//   price: number;
//   constructor(flavour: string, price: number) {
//     ((this.flavour = flavour), (this.price = price));
//     console.log(this);
//   }
// }

// const masalaChai = new Chai("ginger", 20);
// masalaChai.flavour = "masala";

class Chai {
  public flavour: string = "Masala";
  private secretIngri: string = "caradom";

  reveal() {
    return this.secretIngri;
  }
}
const c = new Chai();

class Shop {
  protected shopName = "Chai Corner";
}
class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

new Branch().getName();

// # is same as private but using private makes code better readable
class Wallet {
  #balance = 100; // private variable
  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
w.getBalance();

class Cup {
  readonly capacity: number = 250;

  constructor(capcity: number) {
    this.capacity = capcity;
  }
}

new Cup(100);

class ModernChai {
  private _sugar = 2;

  public get sugar() {
    return this._sugar;
  }

  public set sugar(v: number) {
    if (v > 5) throw new Error("Too sweet");
    this._sugar = v;
  }
}

new ModernChai().sugar = 3;

class EkChai {
  static shopName = "Chai code cafe";
  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class DrinkChai extends Drink {
  make() {
    console.log("Drink");
  }
}

