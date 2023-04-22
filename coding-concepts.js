// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The output was 10. Length gives a numerical value to the character length of the value, including spaces. 

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The answer was o. 4 indicates the index value of the datatype. Index value starts at 0. 4 is where the 'o' in 'Hello' is oriented.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Javascript
// b) Verify and explain: Ruby. As an array, the whole this is zero-indexed. Each value in the element is counted as an index value. But it starts at 0, leaving Ruby to begin at index 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: "saturday" will become "Saturday" & "sunday" will become "Sunday" through the built-in method of .toUpperCase
// b) Verify and explain: Received a TypeError message stating ".toUpperCase" is not a function. I believe this has to do with the values in each indivudal string that are arranged in the array. I do not know.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer: TypeError message will pop up. typeof is not connected to dataTypes with (), annotating where the seperation of objects/variables begins. It should look like console.log(typeof(dataTypes.length)). typeOf will return the "type" of the value that was assigned in the element. 
// b) Verify and explain: output: Number. The console.log function was looking at the first index value of the array.
