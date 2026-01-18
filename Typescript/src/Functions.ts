const makeChai = (type: string, cups: number) => {
  console.log(`making ${cups} cups of ${type}`);
};

makeChai("masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrde(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is ready");
}

// optianl parameter

function orderChai(type?: string) {}

// default parameter
function orderChai1(type: string = "Masala") {}

// usually the optional & default parameter shld added at last it's the best practice

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
    
    return 4
}
