//handle deposit amount for check
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    depositInput.value = " ";

    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    /// handle total balance

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = parseFloat(newBalanceTotal);
  });

//handle withdraw amount for check
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const WithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(WithdrawAmountText);
    //set withdraw total
    withdrawInput.value = " ";
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //clear withdraw input

    /// total amount view
    //update balance view
    const balanceTotal = document.getElementById("balance-total");
    const PreviousBalanceText = balanceTotal.innerText;
    const PreviousBalance = parseFloat(PreviousBalanceText);
    const newBalanceTotal = PreviousBalance - newWithdrawTotal;
    balanceTotal.innerText = parseFloat(newBalanceTotal);
  });
