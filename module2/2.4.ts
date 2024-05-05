{

// Interface -> Generic 

interface Developer<T, X = null>{
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    },
    smartWatch: T;
}
type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
}

const poorDeveloper: Developer<EmilabWatch> = {
    name: 'Khairul',
    computer: {
        brand: 'Asus',
        model: 'X-255UR',
        releaseYear: 2019
    },
    smartWatch: {
        brand: 'Emilab',
        model: 'kw66',
        display: 'Oled'
    }
}









}