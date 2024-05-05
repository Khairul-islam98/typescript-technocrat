{

// Function -> Generic

const createArray = (param: string) : string[] => {
    return [param]
}

const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param]
}




const res1 = createArray('Bangladesh')

const resGeneric = createArrayWithGeneric<string>('Bangladesh')

type User = {id: number, name: string};


const resGenericObj = createArrayWithGeneric<User>({id: 242, name: 'Khairul'})

// tuple

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] =>{
    return [param1, param2]
}

const resTuple = createArrayWithTuple<string, number>('Bangladesh', 2222)

const resTupleObj = createArrayWithTuple<string, {name: string}>('Bangladesh', {name: 'khairul'})


const addCourseToStudent = <T>(student: T)=> {
    const course = 'Next Level Web Developer'

    return{
        ...student,
        course
    }
}

const student1 = addCourseToStudent({name: 'Mr. X', emali: 'x@gmail.com', devType: 'NLWD'})
const student2 = addCourseToStudent({name: 'Mr. Y', emali: 'y@gmail.com', hasWatch: 'Apple Watch'})









}