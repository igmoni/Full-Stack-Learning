// Date Constructor
const dateSnap = new Date();

console.log(`Copyright ${dateSnap.getFullYear()} all rights reserved.`);

// Error Constructor
function checkUsername(userName) {
  if (userName) {
    console.log(userName);
  } else {
    throw new Error("No userName provided");
  }
}

checkUsername("Mohan");

// Different Constructor's

// String()
// Number()
// Array()
// Object()
// Boolean()

const person = new Object();
person.name = "Mohan";
console.log(person.name);

// Pre-increment

let current = 0;

function getNextTicket() {
  return ++current;
}

console.log(`Guest 1, your ticket no. is: ${getNextTicket()}`);
console.log(`Guest 2, your ticket no. is: ${getNextTicket()}`);
console.log(`Guest 3, your ticket no. is: ${getNextTicket()}`);


// Challenge : Numeric Operators (_)

const tomsBankBalance = 9_000_719_254_740_991_345

console.log(typeof tomsBankBalance)


// Hoisting

// Challenge:

 
 