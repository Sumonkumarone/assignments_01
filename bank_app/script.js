class BankAccount{
    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    
    deposit(depositAmount){
            this.balance += depositAmount;          
            console.log("Your deposit amount is " + depositAmount + " and your current balance is " + this.balance);
    }
    
    withdraw(withdrawAmount){
        if(this.balance < withdrawAmount){
            console.log("Insefecent funds!");
        } else {
            this.balance -= withdrawAmount;
            console.log("Withdraw Successfull!");
        }
    }

    getBalance(accountNumber){
        if(accountNumber == this.accountNumber){
            console.log("Your available balance is " + this.balance)
        }
    }

    displayAccountInfo(accountNumber){
        if(accountNumber == this.accountNumber){
            console.log(`Account Info: 
            Account title: ${this.ownerName}
            Your account Number: ${this.accountNumber}
            Avabile balance is: ${this.balance}`    
        )}else{
            console.log("Sorry! You have not any Account")
        }
        }
    }



const accountForSumon = new BankAccount(123456, 'Sumon Kumar', 10000);
const accountForAyon = new BankAccount(121212, 'Ayon Biswas', 12000);
accountForSumon.deposit(30000);
accountForSumon.withdraw(35000);
accountForSumon.getBalance(123456);
accountForSumon.displayAccountInfo(123456);

accountForAyon.deposit(30000);
accountForAyon.withdraw(35000);
accountForAyon.getBalance(121212);
accountForAyon.displayAccountInfo(121212);