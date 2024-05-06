{

    // generic type

    const rollNumbers: number[] = [1, 2, 3, 4];
    // another way to write array which is called general array type
    const rollNumbers2: Array<number> = [1, 2, 3, 4];

    // const mentors: string[] = ['l','m','h']   //string array
    const mentors: Array<string> = ['l', 'm', 'h']   //string array using Array

    // const boolArray : boolean[] = [true, false,true]  //boolean type array

    const boolArray: Array<boolean> = [true, false, true]  //boolean type array


    // Generic in Dynamic way

    type genericArray<T> = Array<T>

    const user: genericArray<number> = [1, 2, 3, 4]


    // generic in array of object
    const user23: genericArray<{ name: string; age: number }> = [
        {
            name: 'mahmuda',
            age: 255,

        },
        {
            name: 'mahmuda456',
            age: 25565,
        }
    ]
// generic in tuple

type genericTuple<X,Y> =[X,Y]

const man :genericTuple<string, string> = ['musu','khushu']


















}