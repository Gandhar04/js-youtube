class User {
    constructor(username){
        this.username = this.username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createID(){
        return `123`
    }
}

const Gandhar = new User('Gandhar')
console.log(Gandhar.createID());