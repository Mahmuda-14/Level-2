{


    // Inheritance in OOP

    class parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name,
                this.age = age,
                this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    const student1 = new Student("alim", 30, "ctg")
    // student1.



    class Teacher extends parent {
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }

    const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");
    // teacher.















}