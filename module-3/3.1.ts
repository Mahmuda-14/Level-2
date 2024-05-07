// {
//     // OOP-->Class
//     // Declaring class
//     class Animal {
//         // name: string;
//         // species: string;
//         // sound: string;

//         // Bydefault all the values are public we can write it also using public 
//         //    public name: string;
//         //    public species: string;
//         //    public sound: string;

//         // costructor for intializing value

//         // constructor( name: string, species: string, sound: string){
//         //     this.name = name;
//         //     this.species = species;
//         //     this.sound = sound;
//         // }

//         constructor Animal(public: name, public: species, public: sound) {
//         // this.name = name;
//         // this.species = species;
//         // this.sound = sound;
//     }
//     // Annonymous function
//     makeSound  (){
//         console.log(`The $(this.name) (this.sound, " ")`);
//     };
//     return Animal;
// } ());
// // Now Creating Instance for this class
// var dog = new Animal("german Shephard", "dog ", "ghew ghew");
// var cat = new Animal("bangla mew", "catt", "");
// cat.makeSound();
//     // 
// }


{
    // oop - class
  
    class Animal {
      constructor(
        public name: string,
        public species: string,
        public sound: string
      ) {}
  
      makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
      }
    }
  
    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");
  
    cat.makeSound();
  
    //
  }