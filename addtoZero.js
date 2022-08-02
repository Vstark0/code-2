// Starting array

// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:


let value = false
for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if(i !== j){
            if(array[i] + array[j] === 0){
                value = true
            }
        }
    }
}
console.log(value)

