basic.forever(function () {

    var hungry = false;
    var sleepy = false;
    var bored = true;
    var age = 0;
    var menu = 0;
    
    var cycleMenu = function () {
        if (menu < 3) {
            menu++;

        } else {
            menu = 0;
        }
        showMenu();
    };

    var showMenu = function () {
        switch (petBit.menu) {
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
    };

    var selectAction = function () {
        //if button B is pressed, run a specific method using switch case
        switch (petBit.menu) {
            case 0:
                feed();
                break;
            case 1:
                sleep();
                break;
            case 2:
                play();
                break;
        }
    };

    var feed = function () {
        if (petBit.hungry) {
            showString("That was yummy!");
            hungry = false;
        } else {
            console.log("No thanks! I'm full.");
        }
    };

    var sleep = function () {
        if (sleepy) {
            basic.showString("Zzzzzzzz");
            sleepy = false;
            increaseAge();

        } else {
            basic.showString("No Way! I'm not tired!");
        }
    };

    var play = function () {
        if (bored) {
            basic.showString("Yay! Let's play!");
            bored = false;
        } else {
            basic.showString("Not right now. Later?");
        }
    };

    var increaseAge = function () {
        age++;
        basic.showString("Happy Birthday to me! I am " + age + " old!");
    },



    // basic.showString("Hello!")
    // if press A, then cycle through menu

    input.onButtonPressed(Button.A, function () {
        petBit.cycleMenu();
    });

input.onButtonPressed(Button.B, function () {
    petBit.selectAction();
})

})
