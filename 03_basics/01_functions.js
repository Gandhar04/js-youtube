function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");

}

// sayMyName()

// function addTwoNumbers(number1, number2){  // here number1 and 2 are parameters
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2){
    let result = number1+number2
    return result 

}


addTwoNumbers(3,4) // 3, 4 are arguments

function loginUserMessage(username = "sam"){
    if (username=== undefined) {
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Gandhar"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));