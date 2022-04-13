const numbInputs = document.querySelectorAll('.calculator-button');
numbInputs.forEach(element => {
    element.addEventListener('click', function(e){
        calculator(e.target.textContent);
    })
});

let opA = '';
let opB = '';
let actualOp = '';
let result = '';

function calculator (input){
    switch(input){ 
        case '÷':
            clickOnOperator('/');
            break;
        case '×':
            clickOnOperator('*');
            break;
        case '-':
            clickOnOperator('-');
            break;  
        case '+':
            clickOnOperator('+');
            break;
        case 'C':
            clickOnC ();
            break;    
        case 'AC':
            reseter();
            break;    
        case '=':
            clickOnEqual();
            break;
        default:
            clickOnNumber(input);
    }
}

function clickOnNumber (num){
    if ( actualOp === '') {
        if (opA === result) {opA = '';}
        opA += num;
        screener(opA);
    }  else {
        opB += num;
        screener(opB);
    }
}

function clickOnOperator (x){
        if ( opB === ''){
            if (opA === ''){
                if (x === '-') { 
                    opA = x;
                }
            } else { actualOp =x;}
        } else {
            result = resultManager(opA, actualOp, opB);
            opA = result;
            opB=''
            actualOp = x;
            screener(result);
        }
}

function clickOnEqual(){
    debugger;
        if (actualOp === '' || opB === ''){
            if (opA !== ''){
                screener(opA);
            }
        } else {
            result = resultManager(opA, actualOp, opB);
            opA = result;
            opB=''
            actualOp = '';
            screener(result);
        }
}

function clickOnC () {
    if (actualOp === '') {
        if (opA === ''){
            screener(0);
        } else {
            if (opA.length <=1){
                opA = '';
                screener(0);
            } else {
                opA = opA.slice(0,-1);
                screener(opA);
            }
        }
    } else {
        if (opB === ''){
            screener(0);
        } else {
            if (opB.length <= 1) {
                opB = '';
                screener(0);
            } else {
                opB = opB.slice(0,-1);
                screener(opB);
            }
        }
    }
}

function reseter(){
    opA = '';
    opB = '';
    actualOp = '';
    result = '';
    screener(0);
}

function resultManager (a,x,b){
    return Function ('return ' + a + x + b)();
}

const calculatorScreen = document.querySelector('#calculator-screen');
  function screener (content){
    calculatorScreen.textContent = content;
}