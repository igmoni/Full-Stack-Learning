const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
// The above varaible types is below
// {
//     name: string
//     price: number
//     isHot: boolean
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: false,
};
// Structure typing
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

// Duck Typing
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steal" };
smallCup = bigCup;

type Brew = { brewTime: number };
const cffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = cffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaiaurcode",
  password: "123",
};

// this is used for code clarity
// make seperations as much as possible
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// partial type

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };

// we can update the values of the function partially too
// it's like optinal passing data
const updatedChai = (updates: Partial<Chai>) => {
  console.log("updating cha with", updates);
};

// updatedChai({ price: 25 });
// updatedChai({ isHot: false });

// required type
type ChaiOrder = {
  name?: string;
  quantity?: number;
};
// when using required we should pass both the params no matter if they're optional in the types
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "masala chai", quantity: 2 });

// pick type
type Chai = {
    name:string
    price: number
    isHot: boolean
}

// pick type is used when we only have work with specific variable types in the type
// in the example below we are picking name and price from chai type, 'cause we oly want to use 2 of 'em, & not the isHot 
type BasicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name: "lemon tea",
    price: 30
}

type ChaiNew = {
    name: string
    price: number
    isHot: boolean
    secretIngredients: string
}

type PublicChai = Omit<ChaiNew, "secretIngredients">