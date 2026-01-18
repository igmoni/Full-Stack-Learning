// when we narrow down the type we get the suggestions based on what data type variable it is, which in JS isn't possible

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala Chai`;
}

// exhaustive check
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `chai order size #${size}`;
}

class KulhadChai {
  serve() {
    return `Serving kulhad chai`;
  }
}

class Cutting {
  serve() {
    return `Serving cutting chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
  return chai.serve();
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }

  return `Serving custom chai ${item}`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return "masala Chai";
      break;
    case "elaichi":
      return "elaichi chai";
      break;
    case "ginger":
      return "giner chai";
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    //
  }
}

function isStringArray(arr: unknown): string {
  //
  return "";
}
