
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");

function checkError(a){

    let  input5 = document.getElementById("inputNumber2");
    input5.style.border = "1px solid red";

    let error = document.querySelector("p.zero");
 error.textContent = a;
}

function removeBorder(){
    let  input5 = document.getElementById("inputNumber2");
    input5.style.border = "none";
}

// button1 5%
const inputOfBillAndNumberOfPeople1 = function (){

    // input field for bill 
    let  inputNum3 = document.getElementById("inputNumber1").value;
    let inputNum4 = document.getElementById("inputNumber2").value;
    let input3 = Number(inputNum3);
    let input4 = Number(inputNum4);
    let totalNumber = document.querySelector(".totalNumber");
    let personNumber = document.querySelector(".personNumber");
    let totalAmountTake;
    let amountInTake;
    let perPerson;
    
    if (isNaN(input3) || isNaN(input4)){
        checkError("Please enter number");
    } else if (!input3 || !input4 || input3 < 0 || input4 < 0){
        checkError("Can't be zero");   
    }else if(input3 > 0 && input4 > 0){
        checkError("");
        removeBorder();
        perPerson = (0.05 * input3)/input4;
        personNumber.textContent = perPerson.toFixed(2);
        amountInTake = input3 + (0.05 * input3);
        totalAmountTake = amountInTake/input4;
        totalNumber.textContent = totalAmountTake.toFixed(2);
    }   
};

button1.addEventListener("click", inputOfBillAndNumberOfPeople1);

// button2 15%
const inputOfBillAndNumberOfPeople2 = function (){

    // input field for bill 
    let  inputNum3 = document.getElementById("inputNumber1").value;
    // Number of person input field
    let inputNum4 = document.getElementById("inputNumber2").value;
    let input3 = Number(inputNum3);
    let input4 = Number(inputNum4);
    let totalNumber = document.querySelector(".totalNumber");
    let personNumber = document.querySelector(".personNumber");
    let totalAmountTake;
    let amountInTake;
    let perPerson;
    
    if (isNaN(input3) || isNaN(input4)){
        checkError("Please enter number")
    } else if (!input3 || !input4 || input3 < 0 || input4 < 0){
        checkError("Can't be zero")
        
    }else if(input3 > 0 && input4 > 0){
        checkError("");
        removeBorder();
        perPerson = (0.15 * input3)/input4;
        personNumber.textContent = perPerson.toFixed(2);
        amountInTake = input3 + (0.15 * input3);
        totalAmountTake = amountInTake/input4;
        totalNumber.textContent = totalAmountTake.toFixed(2);
    }  
};

button2.addEventListener("click", inputOfBillAndNumberOfPeople2);

// button3 50%

const inputOfBillAndNumberOfPeople3 = function (){

    // input field for bill 
    let  inputNum3 = document.getElementById("inputNumber1").value;
    // Number of person input field
    let inputNum4 = document.getElementById("inputNumber2").value;
    let input3 = Number(inputNum3);
    let input4 = Number(inputNum4);
    let totalNumber = document.querySelector(".totalNumber");
    let personNumber = document.querySelector(".personNumber");
    let totalAmountTake;
    let amountInTake;
    let perPerson;
   
    if (isNaN(input3) || isNaN(input4)){
        checkError("Please enter number");
    } else if (!input3 || !input4 || input3 < 0 || input4 < 0){
        
        checkError("Can't be zero");
        
    }else if(input3 > 0 && input4 > 0){
        checkError("");
        removeBorder();
        perPerson = (0.5 * input3)/input4;
        personNumber.textContent = perPerson.toFixed(2);
        amountInTake = input3 + (0.5 * input3);
        totalAmountTake = amountInTake/input4;
        totalNumber.textContent = totalAmountTake.toFixed(2);
    } 
};

button3.addEventListener("click", inputOfBillAndNumberOfPeople3);

// button4 10%
const inputOfBillAndNumberOfPeople4 = function (){

    // input field for bill 
    let  inputNum3 = document.getElementById("inputNumber1").value;
    // Number of person input field
    let inputNum4 = document.getElementById("inputNumber2").value;
    let input3 = Number(inputNum3);
    let input4 = Number(inputNum4);
    let totalNumber = document.querySelector(".totalNumber");
    let personNumber = document.querySelector(".personNumber");
    let totalAmountTake;
    let amountInTake;
    let perPerson;
    
    if (isNaN(input3) || isNaN(input4)){
        checkError("Please enter number");
    } else if (!input3 || !input4 || input3 < 0 || input4 < 0){
        checkError("Can't be zero");
      
    }else if(input3 > 0 && input4 > 0){
        checkError("");
        removeBorder();
        perPerson = (0.1 * input3)/input4;
        personNumber.textContent = perPerson.toFixed(2);
        amountInTake = input3 + (0.1 * input3);
        totalAmountTake = amountInTake/input4;
        totalNumber.textContent = totalAmountTake.toFixed(2);
    }  
};

button4.addEventListener("click", inputOfBillAndNumberOfPeople4);

// button5  25%
const inputOfBillAndNumberOfPeople5 = function (){

    // input field for bill 
    let  inputNum3 = document.getElementById("inputNumber1").value;
    // Number of person input field
    let inputNum4 = document.getElementById("inputNumber2").value;
    let input3 = Number(inputNum3);
    let input4 = Number(inputNum4);
    let totalNumber = document.querySelector(".totalNumber");
    let personNumber = document.querySelector(".personNumber");
    let totalAmountTake;
    let amountInTake;
    let perPerson;
   
    if (isNaN(input3) || isNaN(input4)){
        checkError("Please enter number");
    } else if (!input3 || !input4 || input3 < 0 || input4 < 0){
        checkError("Can't be zero");
    }else if(input3 > 0 && input4 > 0){
        checkError("");
        removeBorder();
        perPerson = (0.25 * input3)/input4;
        personNumber.textContent = perPerson.toFixed(2);
        amountInTake = input3 + (0.25 * input3);
        totalAmountTake = amountInTake/input4;
        totalNumber.textContent = totalAmountTake.toFixed(2);
    }


    
};

button5.addEventListener("click", inputOfBillAndNumberOfPeople5);

// customize button
let inputField = document.querySelector("#inputCustom");

inputField.addEventListener("input", function(){
    let inputGet =inputField.value;
    const inputValue = Number(inputGet)
    let  inputNum3 = document.getElementById("inputNumber1").value;
    // Number of person input field
    let inputNum4 = document.getElementById("inputNumber2").value;
    let input3 = Number(inputNum3);
    let input4 = Number(inputNum4);
    let totalNumber = document.querySelector(".totalNumber");
    let personNumber = document.querySelector(".personNumber");
    let totalAmountTake;
    let amountInTake;
    let perPerson;

    if (isNaN(input3) || isNaN(input4) || isNaN(inputValue)){
        checkError("Please enter number");
        totalNumber.textContent = "0.00";
        personNumber.textContent = "0.00";
    } else if (!input3 || !input4 || !inputValue || input3 < 0 || input4 < 0 || inputValue < 0){
        checkError("Can't be zero");
        totalNumber.textContent = "0.00";
        personNumber.textContent = "0.00";
        
    }else if(inputValue > 100 ){
        checkError("customize value is between 0 - 100")
        totalNumber.textContent = "0.00";
        personNumber.textContent = "0.00";
    }else if( inputValue > 0 || inputValue <= 100){
        if(input3 > 0 && input4 > 0){
            checkError("");
        removeBorder();
        perPerson = (0.01 *inputValue * input3)/input4;
        personNumber.textContent = perPerson.toFixed(2);
        amountInTake = input3 + (0.01*inputValue * input3);
        totalAmountTake = amountInTake/input4;
        totalNumber.textContent = totalAmountTake.toFixed(2);
        }
    }
});


// RESET button6

function clearInput(a){
    document.getElementById("inputNumber1").value = a;
   document.getElementById("inputNumber2").value =a;
    let error = document.querySelector("p.zero");
    error.textContent = a;
}

function reset(){
   let inputNum4 = document.getElementById("inputNumber2");
  inputNum4.style.border = "none";
    clearInput("");
    let totalNumber = document.querySelector(".totalNumber");
    totalNumber.textContent = "32.79";
    let personNumber = document.querySelector(".personNumber");
    personNumber.textContent = "4.27";
    inputField.value.textContent ="";
};


button6.addEventListener("click",reset)
