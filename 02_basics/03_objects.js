// singleton
// Object.create


// object  literals

const mySym =Symbol("key1")
const JsUser = {
    name: "Hitesh",
    age: 18,
    [mySym] : 1,
    location: "Sangli",
    email: "Gandhar.com",
    isLoggedIn: false,
    lastLogininDay: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
