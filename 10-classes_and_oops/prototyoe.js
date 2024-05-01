let myName = "Gandhar   "
// console.log(myName.truelenght);


let myHeroes = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spidermen: "sling",


    getSpiderPower: function(){
        console.log(`Spidey power is${this.spiderman}`);
    }
}

Object.prototype.Gandhar = function(){
    console.log(`Gandhar is present in all object`);
}

myHeroes.Gandhar();

Array.prototype.heyGandhar = function(){
    console.log(`Gandhar says hello`);
}
myHeroes.heyGandhar();


//inheritence

const teacher= {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'JS assignment',
    fullTime: true
}