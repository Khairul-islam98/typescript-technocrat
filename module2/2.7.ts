{
// generic constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = 'bike' | 'car' | 'ship';

type Owner2 = keyof Vehicle


const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]
}

const user ={
    name: 'Khairul',
    age: 24,
    address: 'Noakhali'
}

const result1 = getPropertyValue(user, 'address')






}