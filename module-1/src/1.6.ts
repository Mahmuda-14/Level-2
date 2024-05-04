// Function -->Normal Function 
// --> Arrow function 
            
            
// Normal Function
{
function add1( num1 : number, num2: number) : number{
    return num1+num2;

}
add1(2, 3) 

// Mention value 
function add2( num1 : number, num2: number = 23) : number{
    return num1+num2;

}
add2(2, 3)

// Arrow Function
 const addArrow = (num1 : number, num2 : number): number => num1+num2


//   Function in Object

const user3 = {
    name : 'mahmuda',
    balance : 0,
    addBalance (balance : number): number //annonymas function
    {
        return this.balance+ balance;

    }
}
const user4 = {
    name : 'mahmuda',
    balance : 0,
    addBalance (balance : number): string //annonymas function
    {
        return `My new balance is ${this.balance+ balance}`;

    }
}


//Mapping in array using callback function

const arr: number[] = [1,2,3,4];
const newArr: number[]= arr.map((element: number) :number => element*element);

}
