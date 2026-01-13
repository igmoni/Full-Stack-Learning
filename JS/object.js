// objects

// single ton
Object.create({
  name: "Mohan",
  age: 20,
  isActive: true,
});

// object literals

const mySym = Symbol("key1");

const user = {
  name: "Mohan",
  age: 20,
  location: "Bangalore",
  isLoggedIn: false,
  email: "mohan@google.com",
  lastLoginDays: ["Monday", "Tuesday"],
  [mySym]: "key1",
};

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["location"]);
// console.log(user[mySym]);

user.email = "mohan@tcs.com"
// Object.freeze(user)
user.email = "mohan@infosys.com"
// console.log(user)

user.greeting = () => {
    console.log(`Hello ${this.name} user`) // this is called string inerpolition
}

console.log(user.greeting)


