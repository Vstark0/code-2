// Write your code below
//return true if word is palindrome and false if not

//for loop

//.reverse array method

const isPalindrome = (str) => {
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;

}
console.log(isPalindrome("Racecar"))