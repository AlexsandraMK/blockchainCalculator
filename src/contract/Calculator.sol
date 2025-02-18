// SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

contract Calculator {
    int16 firstValue;
    int16 secondValue;

    function setFirstValue(int16 value) public {
        firstValue = value;
    }

    function setSecondValue(int16 value) public {
        secondValue = value;
    }

    function add() public view returns (int16) {
        return firstValue + secondValue;
    }

    function subtract() public view returns (int16) {
        return firstValue - secondValue;
    }

    function multiply() public view returns (int16) {
        return firstValue * secondValue;
    }

    function divide() public view returns (int16) {
        require(secondValue != 0, "Can't divide by 0.");
        return firstValue / secondValue;
    }

    function power() public view returns (int16) {
        require(secondValue >= 0, "Power can't be negative.");

        return firstValue**uint16(secondValue);
    }
}
