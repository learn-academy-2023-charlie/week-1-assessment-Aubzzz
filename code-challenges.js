// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// input: const boilingPoint, var water temp??
// output: "42 is below boiling point" for all three inputs
// process:
//   create function called boilingPoint
//   determine the value for the parameter, temp1/2/3, create parameter that will equal the variables.
//   develop conditional statement
//   return "42 is below boiling point" if the parameter value is below 212 degrees
//   return "212 is at boiling point" if the parameter value is AT 212 degrees
//   return "212 is above boiling point" if parameter value is above 212 degrees
//       conditionals
// console.log all three const temperature1/2/3 seperately 
//output = 42 is below boiling point for all three variables inputed. Need to figure out why function will not get past the first conditional statement.

const temperature1 = 42
// // Expected output: "42 is below boiling point"
const temperature2 = 350
// // Expected output: "350 is above boiling point"
const temperature3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (waterTemp) => {
    if (waterTemp = temperature1) {
    return "42 is below boiling point"
} else if
   (waterTemp = temperature2) {
    return "350 is above boiling point"
    } else (waterTemp = temperature3) 
    return "212 is at boiling point"}


 //console.log(boilingPoint(temperature1))
 //console.log(boilingPoint(temperature2))
 //console.log(boilingPoint(temperature3))

//____________________________________________________________________________________

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// Expected output: 9

//Pseudo Code:
//input: var worldSeries = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
//output: console.log(worldSeries.length) = 9 
//process: 
//  -create function called worldSeries
//  -.concat the two consts to create one array 
//bring the two arrays together in the function in the beginning. Then console the combined arrays to find the length
//length is determined by each element in the parameter

// var worldSeries = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(worldSeries.length)

//________________________________________________________________________________

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//input:  var revCharlie = currentcohort.reverse
//output: cannot access 'currentCohort' before initilization at Object
//process: create a variable that will allow the function to store the output in
//use the .reverse method to reverse the string
//console.log the revCharlie variable

// let revCharlie = currentCohort.reverse()
// console.log(revCharlie())

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//input: const lastNum, .lastIndexOf, 42, 10
//output:7, 8
//process: create variable lastNum, add .lastindexOf to variable numberOf Connections, input givenvalue1/givenvalue2


const givenValue1 = 42
// Expected output: 7
const givenValue2 = 10
// Expected output: 8

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const lastNum = numberOfConnections.lastIndexOf(10)
console.log(lastNum)

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//input: var yearTemps = summertemps.concat(wintertemps)
//.lastInputOf
//console.log the added arrays with .lastindexOf for the new variable
//output: -1
//process: create var yearTemps = summertemps.concat(wintertemps) to combine them together
//console.log the added arrays with .lastindexOf for the new variable

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// var yearTemps = sanDiegoSummerTemperatures.concat(sanDiegoWinterTemperatures)
// console.log(yearTemps.lastIndexOf())