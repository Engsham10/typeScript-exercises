// 1.Typed Array

let names: string[] = ["Ali", "Amina", "Mohamed"];

let grades: number[] = [85, 90, 75];

let Status: boolean[] = [true, false, true];

// Correct values
names.push("Hassan");
grades.push(95);
Status.push(false);

console.log(names);
console.log(grades);
console.log(Status);

// Incorrect values — compile-time errors
names.push(100);
grades.push("Excellent");
Status.push("Active");

// Convert JavaScript to TypeScript

let products: string[] = ["Phone", "Laptop"];

// Valid
products.push("Tablet");
products.push("Keyboard");

console.log(products);

// Invalid — compile-time error
products.push(99);
products.push(true);

// 3.Use Tuples for Fixed Values

let location: [string, number, number] = [
  "Jigjiga",
  9.35,
  42.80
];
// Correct order
console.log(location);
// Incorrect order — compile-time errors
let location2: [string, number, number] = [
  9.35,
  "Jigjiga",
  42.80
];
let location3: [string, number, number] = [
  "Jigjiga",
  "42.80",
  9.35
];



