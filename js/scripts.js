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

$(document).ready(function() {
  
});

