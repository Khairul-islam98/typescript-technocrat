{

 // Type Alias 
 
 type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
    address: string;
 }

 const studentList1 : Student = {
    name: 'tanvir',
    age: 12,
    gender: 'male',
    contact: '28482080',
    address: 'musapur'
 }
 const studentList2 : Student = {
    name: 'tanisha',
    age: 22,
    gender: 'female',
    address: 'musapur'
 }
 const studentList3 : Student = {
    name: 'alisha',
    age: 32,
    gender: 'female',
    contact: '28482080',
    address: 'musapur'
 }

 type UserName = string;
 type IsAdmin = boolean;

 const userName : UserName = 'khairul';
 const isAdmin : IsAdmin = false;


 type Add = (num1 : number, num2 : number) => number;


 const add: Add =(num1, num2) => num1 + num2;


}