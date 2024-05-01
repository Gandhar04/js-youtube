const loginInfo = {
    username : "Gandhar",
    password : "123",

    greet : function(username){
        console.log(`Good morning ${this.username}`)
    }
}
const askForHealth = function(father){
    console.log(`how is ${father}`);
}
const sayHello = function(){
    console.log(`Hello , how are you`);
    loginInfo.greet()
    askForHealth.call(this, 'Pramod')
}

sayHello()