// 1. Define and Use an Interface
interface User {
  username: string;
  password: string;
}

function login(user: User): void {
  console.log("Username:", user.username);
  console.log("Password:", user.password);
}

login({
  username: "Shukri",
  password: "123456"
});

// 2. Use Optional Properties
interface User2 {
  username: string;
  password: string;
  email?: string;
}

function login2(user: User2): void {
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
  password: "123789",
  email: "amina@example.com"
});
// 3. Readonly in Action
interface User3 {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

const user: User3 = {
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
