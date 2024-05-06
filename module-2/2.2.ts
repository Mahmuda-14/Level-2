{
    // Interface


    // using type
    type User1 ={   //this is called type alias
        name: string;   
        age: number;

    }

    //Using Interface 
    interface User2 {
        name: string;
        age:number;
    } 

    const user1: User1 = {
        name: 'mahmuda',
        age: 40,
    };
    const user2: User2 = {
        name: 'mahmuda',
        age: 40,
    };



// Using type alias we can declare primitive data but using interface we cannot do it
// In declare object we can use both type alias and interface

type roll = number;


// If we want to add value in object what we called also we can extend the value we can do it by using interface and type alias


// 1. Type alias and interface in objects

type User11 = User1 & { role : string}


const user11: User11 = {
    name: 'mahmuda',
    age: 40,
    role : 'student',
};


interface User22 extends User1{
    role: string
}

const user22: User11 = {
    name: 'mahmuda',
    age: 40,
    role : 'student',
};


// 2. Type alias and interface in Arrays

 type roll1 = number[];

 const rollN : roll1 =[1,2,3,4]


 interface roll2{
    [index: number] : number
 }

const rollI : roll2 = [1,2,3,4]


// 3. Type alias and interface in Functions

type Add = (num1: number, num2: number) => number

const add: Add = (num1,num2) =>num1+num2


interface Add2 {
    (num1:number, num2: number) : number
}


const add2: Add2 = (num1,num2) =>num1+num2
















}