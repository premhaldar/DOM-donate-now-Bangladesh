// *******--------->noakhali part start<-----------********

document
  .getElementById("btn-donate-now-noakhali")
  .addEventListener("click", function () {
    // main balance nilam
    const mainBalance = handelDonation("main-balance");

    // nohakhali amount nilam
    const noakhaliDonation = handelDonation("noakhali-donation");

    // input field er value nilam
    const inputAmount = inputFieldValue("input-amount-noakhali");

    if (isNaN(inputAmount) || inputAmount > mainBalance) {
      alert(
        "input amount not valid or You do not have enough Balance,please try again !"
      );
      return;
    }
    const totalBalance = noakhaliDonation + inputAmount;
    document.getElementById(
      "noakhali-donation"
    ).innerText = `${totalBalance} BDT`;
    // history content
      addToHistory(inputAmount, "famine-2024", "Nohakhali", "history");
    // history end

    const mainAccountBalance = mainBalance - inputAmount;
    document.getElementById(
      "main-balance"
    ).innerText = `${mainAccountBalance} BDT`;

    document.getElementById("input-amount-noakhali").value = "";
    document.getElementById(
      "msg"
    ).innerText = `You Have Donated for Humankind tk '${inputAmount}' BDT`;

    document.getElementById("success-msg").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("success-msg").classList.add("hidden");
      });
  });
//*******--------->noakhali part end<-----------********

// *******--------->Feni part start<-----------********
document
  .getElementById("btn-donate-now-feni")
  .addEventListener("click", function () {
    const mainBalance = handelDonation("main-balance");
    const feniDonation = handelDonation("feni-donate-amount");
    const inputAmount = inputFieldValue("input-amount-feni");
    if (isNaN(inputAmount) || inputAmount > mainBalance) {
      alert(
        "input amount not valid or You do not have enough Balance,please try again !"
      );
      return;
    }
    const totalBalance = feniDonation + inputAmount;
    document.getElementById("feni-donate-amount").innerText = `${totalBalance} BDT`;


    // history content
   addToHistory(inputAmount, "flood-2024", "Fani", "history");
    // history end


    const mainAccountBalance = mainBalance - inputAmount;
    document.getElementById(
      "main-balance"
    ).innerText = `${mainAccountBalance} BDT`;
    document.getElementById("input-amount-feni").value = "";
    document.getElementById("msg").innerText = `You Have Donated for Humankind tk '${inputAmount}' BDT`;

    document.getElementById("success-msg").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("success-msg").classList.add("hidden");
      });
  });

// *******--------->Feni part end<-----------********

// *******--------->Quota Movement part start<-----------********
document
  .getElementById("btn-donate-now-quota")
  .addEventListener("click", function () {
    const mainBalance = handelDonation("main-balance");
    const quotaDonation = handelDonation("quota-donate-amount");
    const inputAmount = inputFieldValue("input-amount-quota");
    if (isNaN(inputAmount) || inputAmount > mainBalance) {
      alert(
        "input amount not valid or You do not have enough Balance,please try again !"
      );
      document.getElementById("input-amount-quota").value = "";
      return;
    }
    const totalBalance = inputAmount + quotaDonation;
    document.getElementById(
      "quota-donate-amount"
    ).innerText = `${totalBalance} BDT`;

    // history
    addToHistory(inputAmount, 'Aid for Injured', 'Quota Movement', 'history');
    // history end

    const mainAccountBalance = mainBalance - inputAmount;
    document.getElementById(
      "main-balance"
    ).innerText = `${mainAccountBalance} BDT`;
    document.getElementById("input-amount-quota").value = "";
    document.getElementById(
      "msg"
    ).innerText = `You Have Donated for Humankind tk '${inputAmount}' BDT`;

    document.getElementById("success-msg").classList.remove("hidden");
    document
      .getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("success-msg").classList.add("hidden");
      });
  });
// *******--------->Quota Movement part end<-----------********
