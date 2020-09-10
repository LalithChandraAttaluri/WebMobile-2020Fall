// This block takes the id value from the image we have clicked and assign the choice among rock, paper and scissors
$(document).ready(function () {
    $("#rock").click(function () {
        compare("rock");
    });
    $("#paper").click(function () {
        compare("paper");
    });
    $("#scissors").click(function () {
        compare("scissors");
    });
});


// This block compares the system choice with the user choice and decides the winner
function compare(choice1) {
    // Computer's choice will be randomly generated and gets assigned to systemChoice variable
    var systemChoice = Math.random();
    if (systemChoice < 0.34) {
        choice2 = "rock";
    } else if (systemChoice <= 0.67) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }
    // Checks if user's choice and Systems choice are same
    if (choice1 === choice2) {

        alert( "Its a Draw!!!" + " " + "Lets try again."+choice2);
    }

    // Winning and Loosing scenarios when User selects Rock
    else if (choice1 === "rock") {
        // Check if system's choice is scissors when User's choice is Rock
        if (choice2 === "scissors") {
            alert( "Congrats"+ "!!! " +" Your Choice is Rock & Computer's Choice is Scissors. "+ "You are the Winner, nice job!");
        }
        // Check if system's choice is Paper when User's choice is rock
        else {
            alert("Sorry"  + "!!! " + " Your Choice is Rock & Computer's Choice is Paper. " + "Computer is the Winner, Better luck Next time!!!") ;
        }
    }
    // Winning and Loosing scenarios when User selects Paper
    else if (choice1 === "paper") {
        // If User's Choice is Paper then User wins
        if (choice2 === "rock") {
            alert("Congrats"+ "!!! " + " Your Choice is Paper & Computer's Choice is Rock. " + "You are the Winner, nice job!") ;
        }
        // If User's Choice is Scissors then Computer wins
        else {
            alert("Sorry"+ "!!! " + " Your Choice is Paper & Computer's Choice is Scissors. " + "Computer is the Winner, Better luck Next time!!!") ;
        }

    }
    // Winning and Loosing scenarios when User selects Scissors
    else if (choice1 === "scissors") {
        // If User's Choice is Rock then Computer wins
        if (choice2 === "rock") {
            alert("Sorry"+ "!!! " + " Your Choice is Scissors & Computer's Choice is Rock. " + "Computer is the Winner, Better luck Next time!!!") ;
        }
        // If User's Choice is Scissors then User wins
        else {
            alert("Congrats"+ "!!! " + " Your Choice is Scissors & Computer's Choice is Paper. " + "You are the Winner, nice job!") ;
        }
    }


}