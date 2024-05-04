{
// Type alias

const student1:{
    name: string;
    age: number;
    gender : string;
    contact: string;
} = {
    name: 'mahmuda',
    age: 32,
    gender : 'female',
    contact: '028377',
}
const student2:{
    name: string;
    age: number;
    gender : string;
    contact: string;
} = {
    name: 'mahmuda',
    age: 32,
    gender : 'female',
    contact: '028377',
}

//This the longest way to decale same type so this we use type alias

type Student ={
    name: string;
    age: number;
    gender : string;
    contact?: string; //optional thakteo pare nao pare
}

const student3: Student = {
    name: 'mahmuda',
    age: 32,
    gender : 'female',
    contact: '028377',
}
// Type alias == Reusable code 

type UserName = string
type IsAdmin = boolean

const username:UserName = 'Mahmuda'
const isAdmin : IsAdmin = true


// Type alias in Function

type Add = (num1: number, num2: number) =>number

const add:Add =(num1,num2) =>num1+num2;

}