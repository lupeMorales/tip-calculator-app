"use strict";

const bill = document.querySelector(".js-bill");
const nPerson = document.querySelector(".js-person");
const allButtons = document.querySelectorAll(".js-buttonPercent");
const btnCustom = document.querySelector("#custom");
const tipPerPerson = document.querySelector(".js-tipAmount");
const totalPerPerson = document.querySelector(".js-total");
const btnReset = document.querySelector(".js-btnReset");

const form = document.querySelector(".form");
let percentage = 0;
let isActive = false;

function reset() {
  const defaultAmount = "";
  const resetValue = "0.00€";
  const customDefault = "custom";

  btnCustom.innerHTML = customDefault;
  btnCustom.value = "";
  bill.value = defaultAmount;
  nPerson.value = defaultAmount;
  totalPerPerson.innerHTML = resetValue;
  tipPerPerson.innerHTML = resetValue;
  isActive = false;
}

function calculate() {
  const totalTip = Number(((percentage * bill.value) / 100).toFixed(2));
  const tip = Number((totalTip / nPerson.value).toFixed(2));
  const billPerPerson = Number(bill.value / nPerson.value);

  if (
    bill.value === "" ||
    nPerson.value === "" ||
    percentage === 0 ||
    !isActive
  ) {
    totalPerPerson.innerHTML = "0.00€";
    console.log("rellena");
    console.log(isActive);
  } else {
    tipPerPerson.innerHTML = `${tip.toFixed(2)}€`;
    totalPerPerson.innerHTML = `${(billPerPerson + tip).toFixed(2)}€`;
  }
}

function btnValue() {
  allButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      percentage = e.target.value;
      e.target.classList.add("active");
      isActive = true;
      console.log("percentage", percentage);
      console.log(isActive);
    });
  });
}

function getCustomValue() {
  percentage = btnCustom.value;
  calculate();
}

btnValue(allButtons);
allButtons.forEach((btn) => {
  btn.addEventListener("click", calculate);
});
btnCustom.addEventListener("change", getCustomValue);
form.addEventListener("change", calculate);
btnReset.addEventListener("click", reset);
