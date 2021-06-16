function Records() {
  this.record = {};
  this.currentId = 0;
}

Records.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.record[account.id] = account;
}

Records.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// Records.prototype.addMoneyToAccount = function(money) {
//   account.id = this.deposit();
// }

Records.prototype.deposit = function(id, money) {
  this.record[id].accountTotal = parseInt(this.record[id].accountTotal) + parseInt(money);
    console.log(this.record[id].accountTotal);
    return this.record[id].accountTotal
}

Records.prototype.withdrawal = function(id, money) {
  this.record[id].accountTotal = parseInt(this.record[id].accountTotal) - parseInt(money);
    console.log(this.record[id].accountTotal);
    return this.record[id].accountTotal;
}

function BankAccount(name, initialDeposit) {
  this.name = name;
  this.accountTotal = initialDeposit;
}


//UI Logic
let bankRecords = new Records();

$(document).ready(function() {
  $("form#add-account").submit(function(event)  {
    event.preventDefault();
    const inputtedName = $("input#new-account-name").val();
    const inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    const inputtedDeposit = parseInt($("input#deposit-funds").val());
    const inputtedWithdrawal = parseInt($("input#withdraw-funds").val());
    let newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
    bankRecords.deposit(id, inputtedDeposit);
    bankRecords.withdrawal(id, inputtedWithdrawal);
    bankRecords.addAccount(newAccount);
    console.log(newAccount);
  })
  
});

