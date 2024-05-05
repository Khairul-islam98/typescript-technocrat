{

// union types

// type FrontendDeveloper = 'FakibazDeveloper' | 'JuniorDeveloper'
// type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

// type Developer = FrontendDeveloper | FullstackDeveloper

// const newDeveloper : FrontendDeveloper = 'FakibazDeveloper'


// type User ={
//     name : string,
//     email? : string,
//     gender : 'male' | 'female',
//     bloodGroup : 'O+' | 'A+' | 'AB+',
// }

// const uniqueUser : User = {
//     name : 'janey',
//     gender : 'male',
//     bloodGroup : 'O+'
// }

type FrontendDeveloper = {
    skills: string[],
    designation1:  'Frontend Developer'
}
type BackendDeveloper = {
    skills: string[],
    designation2:  'Backend Developer'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

const fullstackDeveloper : FullstackDeveloper ={
    skills: ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}




}