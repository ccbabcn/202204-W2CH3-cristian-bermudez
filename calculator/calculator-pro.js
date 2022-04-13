const newNumberInput = "11";
function inputAndControl(newInput) {
  const noInputAlert = "Error! Seems like you did not enter any number.";
  const noNumberAlert = "Error! Seems like what you enter was not a number.";
  const inputNumbersArray = [];

  const newNumber = Number(newInput);
  if (newInput === undefined || newInput === "" || newInput === null) {
    return noInputAlert;
  }
  if (Number.isNaN(newNumber)) {
    return noNumberAlert;
  }
  inputNumbersArray.push(newNumber);

  return inputNumbersArray;
}

describe("Given inputAndControl function", () => {
  describe("When it recieves an undefined value", () => {
    test("Then it shall return 'Error! Seems like you did not enter any number.'", () => {
      const undefinedValue = undefined;
      const expectedResult = "Error! Seems like you did not enter any number.";

      const result = inputAndControl(undefinedValue);

      expect(result).toBe(expectedResult);
    });
  });
});

function roundToFixed3(x) {
  let roundedNum;
  Number.isInteger(x) ? (roundedNum = x) : (roundedNum = Number(x.toFixed(3)));
  return roundedNum;
}

function calculatorPro(myArr) {
  const operationsArray = [];
  const resultsArray = [];
  let calculatorArray = [[], []];
  let messageToUser = "";

  if (myArr.length === 1) {
    messageToUser = `******************************************\nYou only entered the number ${myArr[0]}`;

    operationsArray.push("It's square root is: ");
    resultsArray.push(roundToFixed3(Math.sqrt(myArr[0])));
  } else if (myArr.length > 1) {
    messageToUser = `******************************************\nYou entered a total of ${myArr.length} numbers (${myArr})`;

    operationsArray.push("Their sum is: ");
    resultsArray.push(roundToFixed3(myArr.reduce((a, b) => a + b)));

    operationsArray.push("Their substraction is: ");
    resultsArray.push(roundToFixed3(myArr.reduce((a, b) => a - b)));

    operationsArray.push("Their multiplication is: ");
    resultsArray.push(roundToFixed3(myArr.reduce((a, b) => a * b)));

    operationsArray.push("Their divition is: ");
    resultsArray.push(roundToFixed3(myArr.reduce((a, b) => a / b)));
  }
  calculatorArray = [operationsArray, resultsArray];
  return messageToUser + calculatorArray;
}

function showOnConsole(myArr) {
  const stringDisplay = [];
  for (let i = 0; i < myArr[0].length; i++) {
    stringDisplay.push(`${myArr[0][i]}${myArr[1][i]}`);
  }
  return stringDisplay;
}

const finish = false;
function calculatorLooper(isFinish) {
  const endMessage = "Calculator finished.";
  const keepUsingMessage = "Do you want to start a new set of numbers?";
  if (isFinish === false) {
    showOnConsole(calculatorPro(inputAndControl(newNumberInput)));
    return keepUsingMessage;
  }
  return endMessage;
}

calculatorLooper();
