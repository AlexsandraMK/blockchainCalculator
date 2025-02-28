// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Calculator {
    int16 result;
    struct Operation {
        int16 firstValue;
        int16 secondValue;
        int16 result;
        string operationType; // "+", "-", "*", "/", "^".
        uint256 timestamp;
    }

    Operation[] public history;

    function saveHistory(
        int16 firstValue,
        int16 secondValue,
        int16 resultValue,
        string memory operationType
    ) private {
        history.push(
            Operation({
                firstValue: firstValue,
                secondValue: secondValue,
                result: resultValue,
                operationType: operationType,
                timestamp: block.timestamp
            })
        );
    }

    function add(int16 firstValue, int16 secondValue) public {
        result = firstValue + secondValue;

        saveHistory(firstValue, secondValue, result, "+");
    }

    function subtract(int16 firstValue, int16 secondValue) public {
        result = firstValue - secondValue;

        saveHistory(firstValue, secondValue, result, "-");
    }

    function multiply(int16 firstValue, int16 secondValue) public {
        result = firstValue * secondValue;

        saveHistory(firstValue, secondValue, result, "*");
    }

    function divide(int16 firstValue, int16 secondValue) public {
        require(secondValue != 0, "Can't divide by 0.");
        result = firstValue / secondValue;

        saveHistory(firstValue, secondValue, result, "/");
    }

    function power(int16 firstValue, int16 secondValue) public {
        require(secondValue >= 0, "Power can't be negative.");

        result = firstValue ** uint16(secondValue);

        saveHistory(firstValue, secondValue, result, "^");
    }

    function getHistory() public view returns (Operation[] memory) {
        return history;
    }

    function getResult() public view returns (int16) {
        return result;
    }
}
