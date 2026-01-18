const user = {
  userName: "Mohan",
  loginCount: 20,
  signedIn: true,

  getUserDeatils: () => {
    // console.log('Got deatils')
    console.log(this);
  },
};

const date = new Date(); // new is used to create a new context of the class

console.log(user["userName"]);
user.getUserDeatils();

const User = (userName, loginCount, isLoggedIn) => {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = () => {
    console.log(
      `Welcome ${this.userName}, you have logged in ${this.loginCount}`,
    );
  };
  return this;
};

const userOne = User("Mohan", 20, true);
const userTwo = User("Deepu", 18, true);

console.log(userOne.constructor);
console.log(userTwo);

