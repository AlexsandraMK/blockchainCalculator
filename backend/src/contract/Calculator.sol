// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Calculator {
    int16 firstValue;
    int16 secondValue;
    int16 result;

    struct Operation {
        int16 firstValue;
        int16 secondValue;
        int16 result;
        string operationType; // "+", "-", "*", "/", "^".
        uint256 timestamp;
    }

    Operation[] public history;

    function setFirstValue(int16 value) public {
        firstValue = value;
    }

    function setSecondValue(int16 value) public {
        secondValue = value;
    }

    function add() public {
        result = firstValue + secondValue;

        history.push(
            Operation({
                firstValue: firstValue,
                secondValue: secondValue,
                result: result,
                operationType: "+",
                timestamp: block.timestamp
            })
        );
    }

    function subtract() public {
        result = firstValue - secondValue;

        history.push(
            Operation({
                firstValue: firstValue,
                secondValue: secondValue,
                result: result,
                operationType: "-",
                timestamp: block.timestamp
            })
        );
    }

    function multiply() public {
        result = firstValue * secondValue;

        history.push(
            Operation({
                firstValue: firstValue,
                secondValue: secondValue,
                result: result,
                operationType: "*",
                timestamp: block.timestamp
            })
        );
    }

    function divide() public {
        require(secondValue != 0, "Can't divide by 0.");
        result = firstValue / secondValue;

        history.push(
            Operation({
                firstValue: firstValue,
                secondValue: secondValue,
                result: result,
                operationType: "/",
                timestamp: block.timestamp
            })
        );
    }

    function power() public {
        require(secondValue >= 0, "Power can't be negative.");

        result = firstValue ** uint16(secondValue);

        history.push(
            Operation({
                firstValue: firstValue,
                secondValue: secondValue,
                result: result,
                operationType: "^",
                timestamp: block.timestamp
            })
        );
    }

    function getHistory() public view returns (Operation[] memory) {
        return history;
    }

    function getResult() public view returns (int16) {
        return result;
    }
}
