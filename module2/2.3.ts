{

// Generics type

type GenericArray<T> = Array<T>

// const rollNumber : number[] = [1, 2, 3]
const rollNumber : GenericArray<number> = [1, 2, 3]

// const mentors : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z']
const mentors : GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']

// const boolArray : boolean[] = [true, false, true]
const boolArray : GenericArray<boolean> = [true, false, true]



const user1 : GenericArray<{name: string, age: number}> =[{
    name: 'John',
    age: 18,
},
{
    name: 'wick',
    age: 19,
}
]


// Generic Tuple

type GenericTuple<X, Y> = [X, Y]

const manush : GenericTuple<string, string>  = ['Mr. X', 'Mr. Y']


const userWithId : GenericTuple<number, {name : string, email: string}> = [1123, {name: 'John', email: 'john@example.com'}]
 








}