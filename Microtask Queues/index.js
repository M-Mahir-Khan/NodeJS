// Experiment 1st

// console.log("Console.log 1");
// process.nextTick(()=> console.log("this is process.next 1"))
// console.log("console.log 2");


// Output: 
// Console.log 1
// console.log 2
// this is process.next 1


// =====================================

// Experiment 2nd

Promise.resolve().then(()=> console.log("this is Promise.resolve 1"))
process.nextTick(()=> console.log("this is process.nextTick 1"))


// Output
// this is process.nextTick 1
// this is Promise.resolve 1