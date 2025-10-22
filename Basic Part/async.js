// const getSuggestion = async () => {
//   const response = await fetch("https://apis.scrimba.com/bored/api/activity");

//   const data = await response.json();
//   console.log(data);
// };

// getSuggestion();

// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((e) => {
//     // update the DOM to warn the user
//     // access an alternative API
//     // throw an new error
//     console.log(e);
//   })
//   .finally(() => console.log("Operation completed"));

// const get = async () => {
//   try {
//     const response = await fetch(
//       "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"
//     );

//     if (!response.ok) {
//       throw new Error("There was something wrong");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("Operation completed");
//   }
// };

// get();

// fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: POST })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Posts not found"));

// fetch("https://jsonplaceholder.typicode.com/posts", 
//   {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Holiday Nightmares",
//     body: "When I was kidnapped in scotland",
//     userId: 101,
//   }),
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));


// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5
//   if(success) {
//     resolve("Operation successful")
//   } else {
//     reject("Operation failed")
//   }
// })

 // promise.then(res => console.log(res))

// try {
//   const res = await promise
// } catch(err) {
//   console.log(err)
// }

const uploadFile = async () => {
  return  new Promise(res, rej => {
    console.log('Step1; Uploading...')
    setTimeout(()=> {
      res()
    },1000)
  })
}
const processFile = async () => {
  return  new Promise(res, rej => {
    console.log('Step1; Processing...')
    setTimeout(()=> {
      res()
    },1000)
  })
}
const notifyUser = async () => {
  return  new Promise(res, rej => {
    console.log('Step1; notifying user...')
    setTimeout(()=> {
      res()
    },1000)
  })
}


try {
  await uploadFile()
  await processFile()
  await notifyUser()
} catch(e) {
  console.log(e)
} finally {
  console.log('All steps completed')
}