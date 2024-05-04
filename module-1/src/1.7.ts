// {}- using this bracket for block scope

{
    // spread operator
 
const pair1 : string[] = ['ami','timi','kami']
const pair2 : string[] = ['simi','chimi','fami']

pair2.push(...pair1)


// rest operator

const greetFrinds =(...friends : string[]) =>{
    friends.forEach((freind : string) => console.log(`Hi ${freind}`))
};

greetFrinds('abul','kabul','babul');

}

