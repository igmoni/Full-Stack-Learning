var c = 300;
let a = 300; // global scope

if (true) {
  let a = 10; // block scope
  const b = 20;
  c = 430;
  console.log("INNER:", a);
}

console.log(a);
// console.log(b);
console.log(c);

function one() {
    const username = "mohan"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

one()