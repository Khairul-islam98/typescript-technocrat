{
// constrants

const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
    const course  =  'Next Level Web Developer';
    return{
        ...student,
        course
    }
}

const student1 = addCourseToStudent({id: 222, name: 'Mr. X', email: 'mr.x@gmail.com', devType: 'NLWD'})
const student2 = addCourseToStudent({id: 333, name: 'Mr. Y', email: 'mr.y@gmail.com', hasWatch: 'Apple Watch'})
















}