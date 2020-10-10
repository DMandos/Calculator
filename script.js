var viewBox = document.querySelector('.screen');
var evaluation;
var operatorFlag = 0; // back2back operators
var flag = 0; // 2 times .
var number = []; // array to save numbers
var temporaryNumber; // pending number after operator action
var displayNumber = ""; // running number
viewBox.focus();

//click
for (i = 0; i <= 11; i++) { //dqs numbers.length
  document.querySelectorAll(".numbers")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    checkKey(buttonInnerHTML);
  });
}

for (i = 0; i < 4; i++) { // operators.length
  document.querySelectorAll(".operators")[i].addEventListener("click", function() {
    var operatorInnerHTML = this.innerHTML;
    if (operatorInnerHTML == "×") { // case *
      operatorInnerHTML = "*";
    } else if (operatorInnerHTML == "÷") { // case /
      operatorInnerHTML = "/";
    }
    checkOperator(operatorInnerHTML);
  });
}

// pressed key!
document.querySelector("body").addEventListener("keyup", function(e) {
  checkKey(e.key);
});

// enter ή κλικ στο =
document.querySelector(".ready").addEventListener("click", check);

function checkKey(e) {
  if (e === "Enter") {
    check();
  }

  switch (e) { // cases of number pressed
    case "1":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "2":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "3":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "4":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "5":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "6":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "7":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "8":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "9":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case "0":
      displayNumber += e;
      document.querySelector(".clear").innerHTML = "C";
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      operatorFlag = 0;
      break;
    case ".":
      document.querySelector(".clear").innerHTML = "C";
      if (flag < 1) {
        displayNumber += e;
      }
      viewBox.innerHTML = "<i>" + displayNumber + "</i>";
      flag = 1;
      operatorFlag = 0;
      break;
    case "C":
      viewBox.innerHTML = "";
      document.querySelector(".clear").innerHTML = "AC";
      displayNumber = "";
      number = [];
      flag = 0;
      operatorFlag = 0;

      break;
  }

  // operator cases
  if (e == "+" || e == "-" || e == "*" || e == "/") {
    checkOperator(e);
  }
}

//operators
function checkOperator(e) {
  flag = 0;
  if (operatorFlag == 1) { // back2back operator
    number.pop();
    number.push(e);
    viewBox.innerHTML = "<i>" + temporaryNumber + e + "</i>";
    displayNumber = "";
  } else if (displayNumber != "") { // is there a number before operator?
    temporaryNumber = displayNumber;
    viewBox.innerHTML = "<i>" + displayNumber + e + "</i>";
    displayNumber = ""; //time for next number!
    number.push(temporaryNumber);
    number.push(e); // just for the array :)
    operatorFlag = 1; // operator found
  }

}

//Result
function check() {
  number.push(displayNumber);
  if (number[number.length - 1] == "") {
    console.log("DMandos");
  } else {
    evaluation = eval(number.join('')); // eval for string/num calc
    if (typeof evaluation != "undefined") {
      displayNumber = evaluation + '';
    }
    viewBox.innerHTML = "<i style='float:right;'>" + displayNumber + "</i>";
    number = []; // clear everything
    operatorFlag = 0;
  }
}

//backspace and / browser bugs
window.onkeydown = function(e) {
  if (((e.keyCode == 191) || (e.keyCode == 111) || (e.keyCode == 8)) && (e.target == document.body)) {
    e.preventDefault();
  }
}
