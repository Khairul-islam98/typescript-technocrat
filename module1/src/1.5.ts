 // Reference Type  --> Object

 const user: {
    readonly company: string; // type --> literal type
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
 } = {
    company: 'Programming Hero',
    firstName: 'Khairul',
    lastName: 'Islam',
    isMarried: false,
 };

//  user.company = 'Ph'