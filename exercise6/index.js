"use strict";
// 1. UserRole Enum Usage
var UserRole;
(function (UserRole) {
    UserRole["Superadmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log(canEdit(UserRole.Superadmin)); // true
console.log(canEdit(UserRole.Moderator)); // true
console.log(canEdit(UserRole.Viewer)); // false
// 2.Type Assertion with as
const button = document.querySelector("#submitBtn");
button.disabled = true;
