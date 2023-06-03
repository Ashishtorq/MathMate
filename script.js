// document.addEventListener('DOMContentLoaded', function() {
//     var display = document.getElementById('display');
//     var clearBtn = document.getElementById('clearBtn');
//     var deleteBtn = document.getElementById('deleteBtn');
//     var decimalBtn = document.getElementById('decimalBtn');
//     var divideBtn = document.getElementById('divideBtn');
//     var multiplyBtn = document.getElementById('multiplyBtn');
//     var subtractBtn = document.getElementById('subtractBtn');
//     var addBtn = document.getElementById('addBtn');
//     var equalBtn = document.getElementById('equalBtn');
//     var numberBtns = document.getElementsByClassName('numberBtn');

//     for (var i = 0; i < numberBtns.length; i++) {
//         numberBtns[i].addEventListener('click', function() {
//             appendToDisplay(this.value);
//         });
//     }

//     clearBtn.addEventListener('click', function() {
//         clearDisplay();
//     });

//     deleteBtn.addEventListener('click', function() {
//         deleteLastCharacter();
//     });

//     decimalBtn.addEventListener('click', function() {
//         appendToDisplay('.');
//     });

//     divideBtn.addEventListener('click', function() {
//         appendToDisplay('/');
//     });

//     multiplyBtn.addEventListener('click', function() {
//         appendToDisplay('*');
//     });

//     subtractBtn.addEventListener('click', function() {
//         appendToDisplay('-');
//     });

//     addBtn.addEventListener('click', function() {
//         appendToDisplay('+');
//     });

//     equalBtn.addEventListener('click', function() {
//         evaluateExpression();
//     });

//     function appendToDisplay(value) {
//         display.value += value;
//     }

//     function clearDisplay() {
//         display.value = '';
//     }

//     function deleteLastCharacter() {
//         display.value = display.value.slice(0, -1);
//     }

//     function evaluateExpression() {
//         display.value = eval(display.value);
//     }
// });
