// 1. UserRole Enum Usage
enum UserRole {
  Superadmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer"
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

console.log(canEdit(UserRole.Superadmin)); // true
console.log(canEdit(UserRole.Moderator));  // true
console.log(canEdit(UserRole.Viewer));    // false
// 2.Type Assertion with as
const button = document.querySelector("#submitBtn") as HTMLButtonElement;

button.disabled = true;
