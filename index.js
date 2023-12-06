let x = prompt("Enter a number: ")
x = parseInt(x)
// Using for loops

let factorial_for = 1;

for (let i = 1; i<=x; i++){
    factorial_for = factorial_for * i; 
}

console.log(`Factorial using for loops is ${factorial_for}`)

// using reduce
let nums = []
for(let i = 1; i<=x; i++){
    nums.push(i)
}
nums = nums.reverse()

let factorial_reduce = nums.reduce((a,b)=>{
    return a*b;
})

console.log(`Factorial using for loops is ${factorial_reduce}`)