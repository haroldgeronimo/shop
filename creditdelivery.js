"use strict";
window.addEventListener("load", function(){
  document.getElementById("subButton").addEventListener("click", runSubmit);
  document.getElementById("cardHolder").addEventListener("input", validateName);
  document.getElementById("cardNumber").addEventListener("input", validateNumber);
  document.getElementById("expDate").addEventListener("input", validateDate);
  document.getElementById("cvc").addEventListener("input", validateCVC);
});
function runSubmit() {
  validateName();
  validateCredit();
  validateNumber();
  validateDate();
  validateCVC();
}

function validateDate() {
  var expDate = document.getElementById("expDate");
  if (expDate.value) {
    if (/^(0[1-9]|1[0-2])\/20[12]\d$/.test(expDate.value)) {
      expDate.setCustomValidity("");
    } else {
      expDate.setCustomValidity("Enter a valid expiration date");
    }
  } else {
    expDate.setCustomValidity("Enter the expiration date");
  }
}

function validateName() {
  var cardName = document.getElementById("cardHolder");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Enter the card holder");
  } else {
    cardName.setCustomValidity("");
  }
}


function validateCredit() {
    var creditCard = document.forms.deliverycredit.elements.company[0];
  if (creditCard.validity.valueMissing) {
    creditCard.setCustomValidity("Select your credit card");
  } else {
    creditCard.setCustomValidity("");
  }
}

function validateNumber() {
  var cardNumber = document.getElementById("cardNumber");
  if (cardNumber.validity.valueMissing) {
    cardNumber.setCustomValidity("Enter your card number");
  } else if (cardNumber.validity.patternMismatch) {
    cardNumber.setCustomValidity("Enter a valid card number");
  } else if (luhn(cardNumber.value) === false) {
    cardNumber.setCustomValidity("Enter a legitimate card number");
  } else {
    cardNumber.setCustomValidity("");
  }
}

function validateCVC() {
  var cardCVC = document.getElementById("cvc");
  var creditCard = document.querySelector('input[name="company"]:checked').value;

  if (cardCVC.validity.valueMissing) {
    cardCVC.setCustomValidity("Enter your code CVC number");
  } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
    cardCVC.setCustomValidity("Enter a 4-digit CVC number");
  } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
    cardCVC.setCustomValidity("Enter a 3-digit CVC number");
  } else {
    cardCVC.setCustomValidity("");
  }
}

function sumDigits(numStr) {
  var digitTotal = 0;
  for (var i = 0; i < numStr.length; i++) {
    digitTotal += parseInt(numStr.charAt(i));
  }
  return digitTotal;
}

function luhn(idNum) {
  var string1 = "";
  var string2 = "";

  // Retrieve the odd-numbered digits
  for (var i = idNum.length - 1; i >= 0; i -= 2) {
    string1 += idNum.charAt(i);
  }
  // Retrieve the even-numbered digits and double them
  for (var i = idNum.length - 2; i >= 0; i -= 2) {
    string2 += 2 * idNum.charAt(i);
  }

  // Return whether the sum of the digits is divisible by 10
  return sumDigits(string1 + string2) % 10 === 0;
}