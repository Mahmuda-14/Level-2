// Destructuring --> Object destructuring -->Array destructuring

{
    const user = {
        id: 234,
        name: {
            fName: "Mahmuda",
            mName: "sultana",
            lName: "Subarna",

        },
        contact : "01712222",
        address : "gacher niche",
    }

    // const {contact, name:{mName }} = user;  //object destructure

    const {contact,name:{mName : midName }} = user;  //name alias


    const friends =['abul','kabul','babul']
    const [a, b, c] =friends; //array destructuring
    const [,, bestfriend] =friends; //array destructuring with one specific value
   
   
    const friends2 =['abul','kabul','babul','mita','sita']
    const [aa, bb, cc] =friends2; //array destructuring
    const [,, bestfriend2,...rest] =friends2; //array destructuring with one specific value

}