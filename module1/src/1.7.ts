// spread operator
// rest operator
// destructuring 

// learn spread operator

const bros1: string[] = ['janey', 'jacky', 'tanin']
const bros2: string[] = ['imroj', 'rigan', 'shipon']

bros1.push(...bros2)

const mentors1 = {
    typeScript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid',
}

const mentorList = {
    ...mentors1,
    ...mentors2,
}

// learn rest opeartor

const greatFriends = (...friends: string[]) => {
    // console.log(`Hi ${friends1} ${friends2} ${friends3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`))

}
greatFriends('khairul', 'janey', 'potter')