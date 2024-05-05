{
// access modifiers
class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // protected

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    public addDeposit(amount: number){
        this._balance = this._balance + amount;
    }
    public getbalance(){
        return this._balance;
    }
}
class studentAccount extends BankAccount {
    test(){
        this
    }
}

const goribManuserAccount = new BankAccount(222, "gorib", 20)
// goribManuserAccount._balance = 0;
goribManuserAccount.addDeposit(20)

const myBalance = goribManuserAccount.getbalance();
console.log(myBalance);









}