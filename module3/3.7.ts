{
// static
 
class Counter {
    static count : number = 0;


    static increment() {
        return (Counter.count = Counter.count + 1);
    }
    static decrement() {
        return (Counter.count = Counter.count - 1);
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());











}