{
// oop - class

class Animal {
    constructor(
        public name: String,
        public species: String,
        public sound: String
    ){}
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
const cat = new Animal("Persian bhai", "cat", "meaw meaw");

dog.makeSound()
cat.makeSound()












}