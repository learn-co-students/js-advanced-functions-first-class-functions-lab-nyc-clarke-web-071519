// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare;
    };
}

const double = createFareMultiplier(2)

function fareDoubler(fare) {
    return double(fare)
}

const triple = createFareMultiplier(3)

function fareTripler(fare) {
    return triple(fare)
}

function selectDifferentDrivers(driversArray, returnDriversFunction) {
    return returnDriversFunction(driversArray);
}