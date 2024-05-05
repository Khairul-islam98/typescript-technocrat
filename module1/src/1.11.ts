{

// ternary operator || optional chaining || nullish coalescing operator

const age: number = 18;
if(age >= 18){
    console.log('adult');
}else{
    console.log('not adult');
}


const isAdult = age >= 18 ? 'adult' : 'notAdult';

console.log({isAdult});

// nullish coalescing operator
// null / undefined --> decision making 

 const isAuthenticated = ''

 const result1 = isAuthenticated ?? 'Guest'
 const result2 = isAuthenticated ? isAuthenticated : 'Guest'

 console.log({result1}, {result2});


 type User = {
    name: string,
    address: {
        city: string,
        road: string,
        presentAddress: string,
        permenentAddress?: string,
    }
 }

 const user: User = {
    name: 'khairul',
    address: {
        city: 'Noakhali',
        road: 'awesome Road',
        presentAddress: 'musapur'
    }
 }

 const permenentAddress = user?.address?.permenentAddress ?? 'No Permenent Address'
 
 console.log({permenentAddress});


}