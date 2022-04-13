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
