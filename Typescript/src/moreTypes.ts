// Type assertion
// forcing a variable that type is specific data type
let res: any = "42";

let numericLen: number = (res as string).length;

type Book = {
  name: string;
};

let bookString = `{"name":"who moved my cheese" }`;
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;

// any vs unkown
let value: any;
value = "string";
value = [1, 23, 4, 5];
value = value.topperCase(); // any allows to apply any kind of method but throws error in the output

let newVal: unknown;
newVal = "Chai";
newVal = [1, 2, 3, 4];
newVal = 2.5;
// newVal.toUpperCase() // in unkown it throws error
if (typeof newVal === "string") {
  newVal.toUpperCase();
}

try {
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
  console.log("Error:", err);
}

const data: unknown = "Chai aur code"; // this is unkown
const strData: string = data as string; // so we make type assertion focefully to make it a specific variable

type Role = "admin" | "user";

function redirectBasedonRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashbaord");
    return;
  }
  if (role === "user") {
    console.log("Redirecitng to user dashboard");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
