Import to project

import noRepetition from "../GlobalComponents/Norepetition/Norepetition";

functional part exam:
const myArr = ["red", "pink", "blue", "red", "blue", "green", "red"];
const result = noRepetition(myArr); // Call the function with your array

console.log("Unique Items:", result.uniqueItems); // Print unique items
console.log("Repetition Items:", result.repetitionItems); // Print repetition items
