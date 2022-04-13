function inputAndControl() {
    const NOIMPUTLAERT = 'Error! Seems like you did not enter any number.';
    const NONUMBERALERT = 'Error! Seems like what you enter was not a number.';
    const KEEPUSINGMESSAGE = 'Do you want to keep using this calculator?';
    const NEWNUMBERMESSAGE = 'Number registered correctly. Do you want to add another number?';
    let inputNumbersArray = [];
    let userStays = false;
    do {
        let newInput = prompt('Enter a number');
        let newNumber = Number(newInput);
        if( newInput == undefined || newInput == '' || newInput == null){ 
            alert(NOIMPUTLAERT);
            userStays = window.confirm(KEEPUSINGMESSAGE);    
        } else if( Number.isNaN(newNumber) ){ 
            alert(NONUMBERALERT);
            userStays = window.confirm(KEEPUSINGMESSAGE);
        } else {
            inputNumbersArray.push(newNumber);
            userStays = window.confirm(NEWNUMBERMESSAGE);
        }
    } while (userStays == true)
    return inputNumbersArray;
}

function roundToFixed3 (x){
    let roundedNum;
    Number.isInteger(x)? roundedNum = x : roundedNum = Number((x).toFixed(3));
    return roundedNum;
}

function calculatorPro (myArr){
    let operationsArray = [];
    let resultsArray = [];
    let calculatorArray = [[],[]];

    if (myArr.length === 1){
        console.log(`******************************************\nYou only entered the number ${myArr[0]}`);
      
        operationsArray.push("It's square root is: ");
        resultsArray.push(roundToFixed3(Math.sqrt(myArr[0])));
    } else if (myArr.length > 1){
        console.log(`******************************************\nYou entered a total of ${myArr.length} numbers (${myArr})`);

        operationsArray.push("Their sum is: ");
        resultsArray.push(roundToFixed3(myArr.reduce(function(a, b){ return a + b; })));

        operationsArray.push("Their substraction is: ");
        resultsArray.push(roundToFixed3(myArr.reduce(function(a, b){ return a - b; })));

        operationsArray.push("Their multiplication is: ");
        resultsArray.push(roundToFixed3(myArr.reduce(function(a, b){ return a * b; })));

        operationsArray.push("Their divition is: ");
        resultsArray.push(roundToFixed3(myArr.reduce(function(a, b){ return a / b; })));
    }
    return calculatorArray = [operationsArray, resultsArray];
}

function showOnConsole (myArr){
    for (let i = 0; i < myArr[0].length; i++){
        console.log(`${myArr[0][i]}${myArr[1][i]}`);
    }
}

function calculatorLooper (){
    const ENDMESSAGE = 'Calculator finished.';
    const KEEPUSINGMESSAGE = 'Do you want to start a new set of numbers?';
    let finish = false;
    do{
        showOnConsole(calculatorPro(inputAndControl()));
        alert(ENDMESSAGE);
        finish = window.confirm(KEEPUSINGMESSAGE);  
    } while (finish == true)
}

calculatorLooper ();