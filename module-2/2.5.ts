{
    // Function with generics

    const createArray =(param : string): string[] =>{
        return [param]

    }

    const createArrayWithGeneric =<T>(param : T): T[] =>{
        return [param];
    }



    const res1 = createArray('Bangladesh');

    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    type User = {
        id: number;
        name: string;
    }

    const resGenObj = createArrayWithGeneric<User>({
        id:33,
        name: 'Mahmuda'
    })






    // Generic With Tuple

    const createArrayWithTuple =<T,Q>(param1 : T, param2: Q): [T,Q] =>{
        return [param1,param2];
    }


// using tuple
    const res10 = createArrayWithTuple<string, number>('Bangladesh',222);

    const res11 = createArrayWithTuple<string, {name:string}>('Bangladesh',{name:'asia'});

    
// <T> type k parameter hisebe recieve kortece

const addCourseToStudent =<T>(student : T) =>{

    const course ='Next level'
    return {
        ...student,
        course
    }
};


    const student1 = addCourseToStudent({name: 'alima', email: 'mmjj@gamail.com' , dev: 'web developer'})


    const student2 = addCourseToStudent({name: 'alima', email: 'mmjj@gamail.com' , watch: 'apple'})



}