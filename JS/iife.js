// Immeditaly Invoked function expressions IIFE


(function chai() {
    // named iife
  console.log(`DB COnnected`);
})(); // shld add semicolon

((name) => { // can pass the parametes like this
    // unnamed iife
  console.log(`DB Connected 2 ${name} `);
})("Mohan"); 
