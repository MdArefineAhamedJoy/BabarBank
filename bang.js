document
  .querySelector("#submitBtnDeposit")
  .addEventListener("click", function () {
    // get deposit filed input
    const depositFiled = document.querySelector("#depositFiled");
    const depositFiledValueStr = depositFiled.value;
    const depositFiledValue = parseFloat(depositFiledValueStr);

    // clear the input deposit filed
    depositFiled.value = " ";

    // check valid input
    if (isNaN(depositFiledValue) === true) {
      alert("Is Not A Number");
      return;
    }
    // get deposit amount
    const depositAmount = document.getElementById("depositAmount");
    const depositAmountStr = depositAmount.innerText;
    const depositAmountProviso = parseFloat(depositAmountStr);

    // add Currant value and show the value in browser
    const currantDepositValue = depositFiledValue + depositAmountProviso;
    depositAmount.innerText = currantDepositValue;

    //  get the total balance
    const totalBalance = document.querySelector("#totalBalance");
    const totalBalanceStr = totalBalance.innerText;
    const totalBalancePrevious = parseFloat(totalBalanceStr);

    // current total balance and display the balance
    const currentTotalBalance = depositFiledValue + totalBalancePrevious;
    totalBalance.innerText = currentTotalBalance;
  });

document
  .getElementById("submitBtnWindrow")
  .addEventListener("click", function () {
    // get the value windrow filed
    const windrowFiled = document.querySelector("#windrowFiled");
    const windrowFiledStr = windrowFiled.value;
    const windrowFiledValue = parseFloat(windrowFiledStr);

    // clear windrow input filed
    windrowFiled.value = " ";

    // check valid input
    if (isNaN(windrowFiledValue) === true) {
      alert("Is Not A Number");
      return;
    }

    // get the value windrow amount
    const windrowAmount = document.getElementById("windrowAmount");
    const windrowAmountStr = windrowAmount.innerText;
    const windrowAmountPrevious = parseFloat(windrowAmountStr);

    //  get the total balance
    const totalBalance = document.querySelector("#totalBalance");
    const totalBalanceStr = totalBalance.innerText;
    const totalBalancePrevious = parseFloat(totalBalanceStr);

    // you not over balance windrow
    if (windrowFiledValue > totalBalancePrevious) {
      alert("Your Blanca is limited");
      return;
    }

    // current windrow amount and set current total windrow amount
    const currentWindrowAmount = windrowFiledValue + windrowAmountPrevious;
    windrowAmount.innerText = currentWindrowAmount;

    // set the current total balance
    const currantTotalBalance = totalBalancePrevious - windrowFiledValue;
    totalBalance.innerText = currantTotalBalance;
  });
