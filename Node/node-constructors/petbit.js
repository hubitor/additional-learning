basic.forever(function () {
    let petBit = {
        hungry: false,
        sleepy: false,
        bored: true,
        age: 0,
        menu: 0,
        cycleMenu: function () {
            if (petBit.menu < 3) {
                petBit.menu++;

            } else {
                petBit.menu = 0;
            }
            petBit.showMenu();
        },
        showMenu: function () {
            switch(petBit.menu) {
                case 0:
                    basic.showString("Feed!");
                    break;
                case 1:
                    basic.showString("Sleep!");
                    break;
                case 3:
                    basic.showString("Play!");
                    break;
            }
        },
        selectAction: function () {
            //if button B is pressed, run a specific method using switch case
            switch (petBit.menu) {
                case 0:
                    petBit.feed();
                    break;
                case 1:
                    petBit.sleep();
                    break;
                case 2:
                    petBit.play();
                    break;
            }
        },
        feed: function () {
            if (petBit.hungry) {
                basic.showString("That was yummy!");
                petBit.hungry = false;
            } else {
                console.log("No thanks! I'm full.");
            }
        },
        sleep: function () {
            if (petBit.sleepy) {
                basic.showString("Zzzzzzzz");
                petBit.sleepy = false;
                petBit.increaseAge();

            } else {
                basic.showString("No Way! I'm not tired!");
            }
        },
        play: function () {
            if (petBit.bored) {
                basic.showString("Yay! Let's play!");
                petBit.bored = false;
            } else {
                basic.showString("Not right now. Later?");
            }
        },
        increaseAge: function () {
            petBit.age++;
            basic.showString("Happy Birthday to me! I am " + petBit.age + " old!");
        },

    }

    basic.showString("Hello!")
    // if press A, then cycle through menu

    input.onButtonPressed(Button.A, function () {
        petBit.cycleMenu();
    });

    input.onButtonPressed(Button.B, function () {
        petBit.selectAction();
    })

})
