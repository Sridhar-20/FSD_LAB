class BankAccount {
    constructor(acc, bal = 0) {
        this.acc = acc;
        this.bal = bal;
    }
    deposit(amount) {
        this.bal += amount;
    }

    withdraw(amount) {
        if (amount <= this.bal) {
            this.bal -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
}

function transfer(sender, reciever, amount) {
    if (sender.bal >= amount) {
        sender.withdraw(amount);
        reciever.deposit(amount);
    } else {
        console.log("Transfer failed: Insufficient balance");
    }
}

const acc1 = new BankAccount("John", 1000);
const acc2 = new BankAccount("Jane", 500);

transfer(acc1, acc2, 300);

console.log(acc1.bal);
console.log(acc2.bal);
