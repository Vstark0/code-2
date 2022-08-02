let person = {
    firstname: "Gabi",
    lastname: "Wilkison",
    age: 18,
    favorites: {
        movies: ['harry potter', 'iron man', 'LOTR'],
        artists: ["beyonce", "jack johnson", "queen", 'the strokes'],
        
    },
    greeting: () => {
        // console.log("Hello World")
    }
}
// console.log(person.firstname);
// console.log(person["firstname"]);

// console.log(person.favorites.movies[2]);

// person.greeting()

// let {lastname} = person;
// console.log(person.lastname);

// let {greeting} = person;
// greeting();


//destructuring
// let {firstname, lastname, age} = person;
// // console.log(firstname, lastname, age)
// firstname = 'Nicole'
// console.log(firstname, person.firstname);

let {firstname, lastname, age: yearsOfWisdom} = person;


//review of looping objects using for...in
// for(let property in person){
//     console.log(`The property of ${property} has a value of: ${person[property]}`);
// }

//adding and deleting properties

person.job = "student";
console.log(person);

delete person.job
console.log(person)

//classes
class Dog{
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isCute = true;
    }
    // greeting(){
    //     console.log('Hello, my name is ${this.name} and I am ${this.age} years old. My breed is ${this.breed}.')
    }

const Pippin = new Dog("Pippin", "Pitoodle", 2);
console.log(Pippin);
// Pippin.greeting();

//this command is a placeholder that lets know you are referring to the object

//class extension
class Puppy extends Dog{
    constructor(name,color, isTeething){
        super(name,color);
        this.isTeething = isTeething;

    }
    
}
const Rosie = new Puppy("Rosie", "Poodle", 12, true )
console.log(Rosie);

//why is it not listing correctly