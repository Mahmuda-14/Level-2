// Constarints

{
    const addCourseToStudent = <T extends {  // constraints --> extend kore constant kore dici
        id:number;
        name: string;
        email: string;
    }>(student: T) => {

        const course = 'Next level'
        return {
            ...student,
            course
        }
    }

    // const student1 = addCourseToStudent({ name: 'alima', email: 'mmjj@gamail.com', dev: 'web developer' })


    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        watch: string;
    }>
        ({
            id: 33,
            name: 'alima',
            email: 'mmjj@gamail.com',
            watch: 'apple'
        })


    const student3 = addCourseToStudent
}