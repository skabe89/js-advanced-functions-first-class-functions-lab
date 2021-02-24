// Code your solution in this file!

function returnFirstTwoDrivers(array){
  const newArray = array.slice(0, 2)
  return newArray
}

function returnLastTwoDrivers(array){
  const newArray = array.slice(array.length - 2, array.length)
  return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(integer){
  return function(fare){
    return integer * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, fn){
  return fn(array)
}
