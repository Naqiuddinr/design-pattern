
class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public get balance(): number {
        return this._balance;
    }

    public deposit(amount: number) : void {
        if (amount < 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this._balance += amount;
    }

    public withdraw(amount: number) : void {
        if (amount < 0) {
            console.log("Invalid withdraw amount");
            return;
        } if (amount > this._balance) {
            console.log("Insufficient balance");
            return;
        }

        this._balance -= amount;
    }
}


// client side

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);

console.log("Current balance:", myAccount.balance);