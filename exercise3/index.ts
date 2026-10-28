// 1.  Add Types to a Function
function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("Shukri", "Aden"));
// Output: Shukri Aden
// 2. Optional and Default Parameters
function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en"
): void {
  console.log("Username:", username);
  console.log("Is Admin:", isAdmin);
  console.log("Language:", language);
}

registerUser("Shukri", true, "en");
registerUser("Ahmed");
registerUser("Amina", false, "so");

// 3. Create a Safe Rest Function
function average(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);

  return total / scores.length;
}

console.log(average(80, 90, 100));
console.log(average(70, 80, 90, 100));
console.log(average(60, 75, 80, 85, 100));
console.log(average());