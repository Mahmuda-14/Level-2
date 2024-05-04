//Reference Type/Data type -->

const user:{
    readonly company: 'Programmer';  //readonly fie=xed the value not changable
    // company: 'Programmer';  //This is called literal type
    // company: string;
    fName : string;
    mName? : string; //optional type
    lName : string;
} = {
    company: 'Programmer',
    // company: 'Programmer enginner',
    fName : "Mahmuda",
    lName : "sultana"
}

// user.company ='ph' edit possible na