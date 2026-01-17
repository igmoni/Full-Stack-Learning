// Promise -1
const promise1 = new Promise((resolve, reject) => {
  // DO an async task
  // DB Calls, crytopgraphy, network

  setTimeout(() => {
    console.log("Async Task Complete");
    resolve();
  }, 1000);
});

promise1.then(() => {
  console.log("Promise consumed");
});

// Promise - 2
new Promise((res, rej) => {
  setTimeout(() => console.log("Async task 2"), 1000);
  res();
}).then(() => {
  console.log("Promise 2 consumed");
});

// promise - 3
const proimse3 = new Promise((res, rej) => {
  setTimeout(() => {
    res({ userName: "Chai", email: "chai@example.com" }); // we pass data here
  }, 1000);
});

proimse3.then((user) => console.log(user));

// promise - 4
const promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ username: "mohan", password: "123456" });
    } else {
      rej("ERROR: SOMETJING WENT WORNG");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("The promise is resolved or rejected"));

// promise - 5
const promisee5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123456" });
    } else {
      reject("ERROR: JS WENT WORNG");
    }
  }, 2000);
});

// can't handle the error directly while you use this
// so you shld use try catch block to handle the error gracefully
const consumePromise5 = async () => {
  try {
    const response = await promisee5;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

consumePromise5();

const getAllUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(res)
    const data = await res.json();
    console.log(data);
  } catch (er) {
    console.log(er);
  }
};

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((er) => console.log(er))
  .finally(() => console.log("Got executed"));


  