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
let firstNum = "";
let secondNum = "";
let arr = [];

cancle.addEventListener("click", function() {
    result = 0;
    input.value = "";
    temp = 0;
    firstNum = "";
    secondNum = "";
    state = "";
    arr = [];
})

zero.addEventListener("click", function() {
    input.value = input.value + "0";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

one.addEventListener("click", function() {
    input.value = input.value + "1";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

two.addEventListener("click", function() {
    input.value = input.value + "2";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

three.addEventListener("click", function() {
    input.value = input.value + "3";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

four.addEventListener("click", function() {
    input.value = input.value + "4";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

five.addEventListener("click", function() {
    input.value = input.value + "5";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

six.addEventListener("click", function() {
    input.value = input.value + "6";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

seven.addEventListener("click", function() {
    input.value = input.value + "7";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

eight.addEventListener("click", function() {
    input.value = input.value + "8";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

nine.addEventListener("click", function() {
    input.value = input.value + "9";
    temp = Number.parseInt(input.value);
    firstNum += temp;
    input.value = temp;
});

add.addEventListener("click", function() {
    numberRememberAndCaculation();
    console.log("print state");
    state = states[0];
    console.log("state: ", state);
});


equal.addEventListener("click", function() {
    numberRememberAndCaculation();
    caculationMechanism(state);
});

function caculationMechanism(state) {
    if (state == states[0]) {
        result = arr[0] + arr[1];
    }
    else if (state = states[1]) {
        result = arr[0] - arr[1];
    }
    else if (state = states[2]) {
        result = arr[0] * arr[1];
    }
    else {
        result = arr[0] / arr[1];
    }
    arr.pop();
    arr[0] = result;
    input.value = result;
    console.log("arr: ", arr);
    console.log("result: ", result);
    console.log("state: ", state);
    console.log("input.value: ", input.value);
    console.log("end caculationMechanism");
};

function numberRememberAndCaculation() {
//add number to the array    
    if (arr.length < 2) {
        let secondNum = Number.parseInt(firstNum);
        console.log("secondNum before push: ", secondNum, typeof(secondNum));
        if (secondNum == "") {
            console.log(`secondNum is ""`)
            arr.push(secondNum);
        }
        firstNum = "";
        input.value = 0;
        console.log("array length is either 0 or 1: ");
        console.log("arr: ", arr);
        console.log("firstNum: ", firstNum);
        console.log("secondNum: ", secondNum);
        console.log("input.value: ", input.value);
        console.log("state: ", state);
        console.log("result: ", result);
        console.log("end numberRememberAndCaculation");
            
    }
    else if (arr.length == 2) {
        //caculate if array size have at least 2 numbers
        caculationMechanism(state); 
    }
}

