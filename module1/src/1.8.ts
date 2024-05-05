
// object destructuring

const users = {
    id: 345,
    name: {
        firstName: 'John',
        middleName: 'Potter',
        lastName: 'wick'
    },
    contactNum: '0288928302',
    address: 'uganda'
}

const {contactNum, name: {middleName: midName}} = users;


// array distructuring

const allFriends = ['John', 'Potter', 'rifa', 'lali', 'ross']

const [,, bestFriend, ...rest]  =  allFriends