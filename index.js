const input = document.querySelector(".display-screen");
const cancle = document.querySelector(".cancle-button");
const zero = document.querySelector(".button-0");
const one = document.querySelector(".button-1");
const two = document.querySelector(".button-2");
const three = document.querySelector(".button-3");
const four = document.querySelector(".button-4");
const five = document.querySelector(".button-5");
const six = document.querySelector(".button-6");
const seven = document.querySelector(".button-7");
const eight = document.querySelector(".button-8");
const nine = document.querySelector(".button-9");
const ten = document.querySelector(".button-10");
const add = document.querySelector(".add-button");
const equal = document.querySelector(".equal-button");
let result = 0;
let temp = 0;
let states = ["+", "-", "*", "/"];
let state = "";

cancle.addEventListener("click", function() {
    result = 0;
    input.value = "";
    temp = 0;
})

zero.addEventListener("click", function() {
    input.value = input.value + "0";
});

one.addEventListener("click", function() {
    input.value = input.value + "1";
});

two.addEventListener("click", function() {
    input.value = input.value + "2";
});

three.addEventListener("click", function() {
    input.value = input.value + "3";
});

four.addEventListener("click", function() {
    input.value = input.value + "4";
});

five.addEventListener("click", function() {
    input.value = input.value + "5";
});

six.addEventListener("click", function() {
    input.value = input.value + "6";
});

seven.addEventListener("click", function() {
    input.value = input.value + "7";
});

eight.addEventListener("click", function() {
    input.value = input.value + "8";
});

nine.addEventListener("click", function() {
    input.value = input.value + "9";
});

add.addEventListener("click", function() {
    state = states[0];
    result = result + Number.parseInt(input.value);
    console.log("result: ", result);
    console.log("input.value: ", input.value);
    input.value = "0";
});

function Addition() {
    result = result + Number.parseInt(input.value);
    input.value = "0";
    console.log("result: ", result);
    console.log("input.value: ", input.value);
}

equal.addEventListener("click", function() {
    if (state == states[0]) {
        Addition();
        input.value = result;
    }
});

