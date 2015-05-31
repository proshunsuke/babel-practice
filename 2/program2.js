/**
 * Created by pro on 15/05/31.
 */

class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    }
    damage() {
        this.health_ = this.health_ - 10;
    }

    getHealth() {
        return this.health_;
    }

    toString() {
        return "x: "+ this.x + " y: " + this.y + " health: " + this.getHealth();
    }
}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());

//class Person {
//    constructor(name) {
//        this.name = name;
//    }
//    getName() {
//        return this.name;
//    }
//    setName(name) {
//        this.name = name;
//    }
//}
//
//var alice = new Person("alice");
//alice.getName(); // alice
//alice.setName('bob');
//alice.getName(); // bob
//
