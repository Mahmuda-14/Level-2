{
    // ternary operator
    // optional chaining
    // nullish coaleacing

    const age : number =18;

    if(age>18){
        console.log('adult')
    }
    else{
        console.log('not adult')
    }

    // using ternery
    const isAdult =age>=18 ? 'adult' : 'not adult'
    console.log(isAdult)

    // nullish coslesing operator
    // null or undefiend diye decision making

    const isAuthenticated ="";
    const result1 = isAuthenticated ?? 'Guest';
   
    // const isAuthenticated2 =undefined;
    
    const result2 = isAuthenticated ? isAuthenticated : 'nGuest';
    console.log({result1},{result2})

    // nullihs ib object 

    type User ={
        name: string;
        city: string;
        address?: string;
    }

    const user3 : User ={
        name: 'mahmuda',
        city: 'Chittagong',
        
    }
    const addre = user3?.address??"no Address";
console.log({addre})



}