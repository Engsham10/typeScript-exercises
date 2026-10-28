"use strict";
function login(user) {
    console.log("Username:", user.username);
    console.log("Password:", user.password);
}
login({
    username: "Shukri",
    password: "123456"
});
function login2(user) {
    console.log("Username:", user.username);
    console.log("Password:", user.password);
    console.log("Email:", user.email ?? "No email provided");
}
// Without email
login2({
    username: "Ahmed",
    password: "abc123"
});
// With email
login2({
    username: "Amina",
    password: "xyz789",
    email: "amina@example.com"
});
const user = {
    id: 101,
    username: "Shukri",
    password: "secure123",
    email: "shukri@example.com"
};
console.log("User ID:", user.id);
console.log("Username:", user.username);
// Allowed: username is not readonly
user.username = "Shukri Aden";
// Error: id is readonly
user.id = 202;
