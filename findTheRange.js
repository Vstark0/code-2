// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let smallestNumber = []
let largestNumber = []

for(let i = 0; i < array.length; i++){
    if(array[i] > largestNumber){
        largestNumber = array[i]
    }else{
        if(array[i] < smallestNumber){
            smallestNumber = array[i]
        }

    }
    }
    console.log(smallestNumber, "to" ,largestNumber)
