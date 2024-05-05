{
// getter and setter

class BankAccount {
    id: number;
    name: string;
    _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    set deposit(amount: number) {
        this._balance = this.balance + amount;
    }

    get balance(){
        return this._balance;
    }
}

const goribManuserAccount = new BankAccount(111, "Mr. gorib", 50)

goribManuserAccount.deposit = 50 
const myBalance = goribManuserAccount.balance

console.log(myBalance);








}