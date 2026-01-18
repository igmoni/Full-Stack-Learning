function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 5);
pair("masala", {});

interface Box<T> {
  content: T;
}

const numBox: Box<string> = { content: "mohan" };
const numBoxCup: Box<number> = { content: 10 };

// most used in api repsonses, form states in react

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};


