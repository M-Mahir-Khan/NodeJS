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

// Promise.resolve().then(()=> console.log("this is Promise.resolve 1"))
// process.nextTick(()=> console.log("this is process.nextTick 1"))


// Output
// this is process.nextTick 1
// this is Promise.resolve 1


// =====================================


// Experiment 3rd
const fs = require("fs")

fs.readFile(__filename,()=> {
    console.log("this is readfile 1");
    
})

process.nextTick(()=> console.log("This is process.nextTick 1"))
Promise.resolve().then(()=> console.log("this is promise.resolve 1"))
setTimeout(()=>{console.log("This is setTimeout 1")}, 0)

for(let i = 0;i < 20000000; i++){}

// Output : 
// This is process.nextTick 1
// this is promise.resolve 1
// This is setTimeout 1
// this is readfile 1
