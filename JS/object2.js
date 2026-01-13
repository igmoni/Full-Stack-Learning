// const tinderUser = new Object() // singleton
const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "Mohan";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Mohan",
      lastName: "S P",
    },
  },
};

// console.log(regUser.fullname?.userFullName?.firstName) // optional chaining

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3= { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // used to merge 2 or more objects
const obj3 = { ...obj1, ...obj2 }; // most used is ... spread operator
// console.log(obj3);

const users = [
  { id: 1, name: "Mohan" },
  { id: 1, name: "Mohan" },
  { id: 1, name: "Mohan" },
  { id: 1, name: "Mohan" },
  { id: 1, name: "Mohan" },
];

users[1].name

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 

// Object Destructing

const course = {
  courseName: "HTML",
  price: "999",
  courseInstructor: "Mohan"
}

const  { courseName, price, courseInstructor: instrcutor } = course // can rename the variables too while destructuring
console.log(instrcutor)

