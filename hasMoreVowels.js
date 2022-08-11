//Write a function called hasMoreVowels that takes in one argument, word. 
//When the function is called, return true if that word contains more 
//vowels than non-vowels; otherwise, return false. The word will always be
// a single word, without any punctuation or spaces. It will contain 
//only uppercase and/or lowercase letters.
//If the phrase is over half vowels, it should return true:


function vowelOrNo (word){
    let newWord = word.split("");
    console.log(newWord);
    let arr = []
    for(let i = 0; i < word.length, i++)
        if(word.includes("a", "e", "i", "o", "u")){
            arr.push(word)
            console.log(arr)
        }

    }
//if num.includes(list of vowels){
  //  add vowels to empty list then use .length to compare to other new list with the consonants and use .length to compare
  //console log true if vowels.length is bigger than consonants.length
//}
    

vowelOrNo("polar")