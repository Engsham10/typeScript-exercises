
// Declare Variables with Explicit Types
let productName: string = "Laptop";
let price: number = 25000;
let discountAvailable: boolean = true;

console.log(productName);
console.log(price);
console.log(discountAvailable);

// Wrong assignments
productName = 100;            // Error: number is not a string
price = "25000";              // Error: string is not a number
discountAvailable = "yes";    // Error: string is not a boolean

// Fix the errors
productName = "Phone";
price = 15000;
discountAvailable = false;

// Correct TypeScript solution
function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(10, 0.2));
console.log(getDiscount(50, 0.1));

//Use unknown and type checking
function printLength(x: unknown): void {
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log("Error: Input must be a string or an array.");
  }
}

printLength("Hello");
printLength(123);
printLength([10, 20, 30]);
