{


    // Type Guards

    // typeof --> type guard -- Type of as type guard

    // This is called off guard 
    type Alpha = number | string;
    const add = (param1: Alpha, param2: Alpha): Alpha => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }

    const result = add("2", "3");
    console.log(result);

    // This is called In-gaurd which is used in object

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {

        if ("role" in user) {
            console.log(`My name id ${user.name} and my role is ${user.role}`);

        }

        else {
            console.log(`My name id ${user.name}`);
        }
    }


    const normalUser : NormalUser ={
        name: "mkjj",
    }


    const adminUser : AdminUser ={
        name: "mkjj",
        role: "admin",
    }

    getUser(adminUser);







}