"use strict";
// 1. Echo Function with Generics
function echo(input) {
    return input;
}
// String
const result1 = echo("Hello TypeScript");
console.log(result1);
// Number
const result2 = echo(100);
console.log(result2);
// Array
const result3 = echo([10, 20, 30]);
console.log(result3);
// Object
const result4 = echo({
    name: "Shukri",
    age: 25
});
console.log(result4.name);
console.log(result4.age);
// Example 1: String data
const result5 = {
    status: "success",
    data: "Login successful"
};
// Example 2: Object data
const result6 = {
    status: "success",
    data: {
        id: 1,
        name: "Shukri"
    }
};
console.log(result5.data);
console.log(result6.data.id);
console.log(result6.data.name);
// 3. First Element Function
function first(items) {
    return items[0];
}
// Array of numbers
const numberResult = first([10, 20, 30]);
console.log(numberResult);
// Array of strings
const stringResult = first(["Apple", "Banana", "Orange"]);
console.log(stringResult);
// Array of objects
const users = [
    { id: 1, name: "Shukri" },
    { id: 2, name: "Ahmed" }
];
const userResult = first(users);
console.log(userResult.name);
console.log(userResult.id);
