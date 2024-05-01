class User{
    constructor (username){
        this.username= username;
    }

    logme(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)

        this.email = email;
        this.password = password;
    }
    printTeacherInfo(){
        console.log(`Name = ${this.username}`);

    }
}


const chai =  new teacher("gandhar","gandhar2gmail.com","123")
chai.printTeacherInfo();