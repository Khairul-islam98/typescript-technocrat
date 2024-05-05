{
// abstraction  : 1. interface 2. abstract

// idea

interface  Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move() : void;
}


// real implementation

class Car1 implements Vehicle{
    startEngine(): void {
        console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the car engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
    test(): void {
        console.log(`I am Just testing`);
    }
}

const toyotaCar = new Car1();
toyotaCar.startEngine();


// abstract class

// idea 

abstract class Car2{
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void{
        console.log(`I am just testing`);
    }
}

class ToyotaCar extends Car2{
    startEngine(): void {
        console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the car engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
}

const hondaCar = new ToyotaCar();
hondaCar.stopEngine()




}