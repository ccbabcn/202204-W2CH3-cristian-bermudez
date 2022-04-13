function inputAndControl() {
    const firstInput = prompt('Enter your first number');
    const secondInput = prompt ('Enter your second number');
    let firstNumber = Number(firstInput);
    let secondNumer = Number(secondInput);
    
    const noImputMessage = 'Error! Seems like you did not enter any number. Do you want to keep using this calculator?';
    const noNumberMessage = 'Error! Seems like what you enter was not a number. Do you want to keep using this calculator?';
    const byeMessage = 'Bye and thanks for using my calculator :)';

    let inputsArray = [];
    let userStays = false;

    if( firstInput == undefined && secondInput == undefined){  
        userStays = window.confirm(noImputMessage);    
        userStays == true? inputAndControl(): console.log(byeMessage);
    } else if( firstInput == '' && secondInput == ''){  
        userStays = window.confirm(noImputMessage);    
        userStays == true? inputAndControl(): console.log(byeMessage);
    } else if( firstInput == null && secondInput == null){  
        userStays = window.confirm(noImputMessage);    
        userStays == true? inputAndControl(): console.log(byeMessage);
    } else if( Number.isNaN(firstNumber) || Number.isNaN(secondNumer)){  
        userStays = window.confirm(noNumberMessage);
        userStays == true? inputAndControl(): console.log(byeMessage);
    } else if( secondInput == undefined || secondInput == '' || secondInput == null) {
        inputsArray.push(firstNumber);
    } else if( firstInput == undefined || firstInput == '' || firstInput == null) {
        inputsArray.push(secondNumer)
    } else {
        inputsArray.push(firstNumber);
        inputsArray.push(secondNumer)
    }
    return inputsArray;
}

function calculator (myArr){
    let resultadosArray = [];
    let resultadosMessage = '';
    let currentOperation;
    let spacer = '\n';

    switch (myArr.length){
        case 1:
            resultadosMessage = `******************************************\nYou only entered the number ${myArr[0]} and it's square root is:\n`;
            Number.isInteger(Math.sqrt(myArr[0]))? currentOperation = Math.sqrt(myArr[0]) : currentOperation = (Math.sqrt(myArr[0])).toFixed(3);
            resultadosArray.push(resultadosMessage, currentOperation, spacer);
            break;
        case 2:
            resultadosArray.push(`******************************************\nYou entered the numbers ${myArr[0]} and ${myArr[1]}, here you have their operations:\n`);
            resultadosMessage = 'The result of their sum is: '
            Number.isInteger(myArr[0]+myArr[1])? currentOperation = myArr[0]+myArr[1] : currentOperation = (myArr[0]+myArr[1]).toFixed(3);
            resultadosArray.push(resultadosMessage, currentOperation, spacer);
            resultadosMessage = 'The result of their substraction is: '
            Number.isInteger(myArr[0]-myArr[1])? currentOperation = myArr[0]-myArr[1] : currentOperation = (myArr[0]-myArr[1]).toFixed(3);
            resultadosArray.push(resultadosMessage, currentOperation, spacer);
            resultadosMessage = 'The result of their multiplication is: '
            Number.isInteger(myArr[0]*myArr[1])? currentOperation = myArr[0]*myArr[1] : currentOperation = (myArr[0]*myArr[1]).toFixed(3);
            resultadosArray.push(resultadosMessage, currentOperation, spacer);
            resultadosMessage = 'The result of their division is: '
            Number.isInteger(myArr[0]/myArr[1])? currentOperation = myArr[0]/myArr[1] : currentOperation = (myArr[0]/myArr[1]).toFixed(3);
            resultadosArray.push(resultadosMessage, currentOperation, spacer);
            break;
        default:
            console.log('If your are seeing this message its because something unexpected happened, feel free to contact me :)')
    }
    return resultadosArray;
}

function showOnConsole (myArr){
    for(let i = 0; i < myArr.length ; i++){
        console.log(myArr[i]);
    }

}

showOnConsole(calculator(inputAndControl()));
