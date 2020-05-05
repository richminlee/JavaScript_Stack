class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name = ${this.name} strength = ${this.strength} speed = ${this.speed} health = ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`Your Health is now ${this.health}.`)
    }
}
// const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
class Sensei extends Ninja{
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    drinkSake(){
        super.drinkSake();
    }
}
const superSensei = new Sensei("Master Splinter", "200");
superSensei.speakWisdom();
superSensei.showStats();