// constructor for Character
function DigiPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
        } else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.increaseAge();

        } else {
            console.log("No Way! I'm not tired!");
        }
    };
    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
        } else {
            console.log("Not right now. Later?");
        }
    }
    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + age + " old!");
    };

}

var dog = new DigiPal();
dog.outside = false;
dog.bark = true;
dog.goOutside = function () {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!");
    } else {
        console.log("We're already outside though...");
    }
}
dog.goInside = function () {
    if (this.outside) {
        console.log("Do we have to? Fine...");
    } else {
        console.log("I'm already inside...");
    }
}
dog.stats = function () {
    var stats = "Hungry: " + this.hungry + "\n";
    stats += "Sleepy: " + this.sleepy + "\n";
    stats += "Bored: " + this.bored + "\n";
    stats += "Age: " + this.age + "\n";
    stats += "House Condition: " + this.houseCondition + "\n";
    return stats;
};

var cat = new DigiPal();
cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow! Meow!");
}
cat.destroyFurniture = function () {
    this.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.bored = false;
}
cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}
cat.stats = function () {
    var stats = "Hungry: " + this.hungry + "\n";
    stats += "Sleepy: " + this.sleepy + "\n";
    stats += "Bored: " + this.bored + "\n";
    stats += "Age: " + this.age + "\n";
    stats += "House Condition: " + this.houseCondition + "\n";
    return stats;
};


// console.log(DigiPal)
// console.log(dog);
cat.destroyFurniture();
console.log(cat.stats());