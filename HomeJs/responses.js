function getBotResponse(input) {

    if (input =="rock" || input =="Rock") {
        return "Paper";
    } else if (input =="paper" || input == "Paper") {
        return "Scissors";
    } else if (input =="scissors" || input == "Scissors") {
        return "Rock";
    }

    if (input == "hello" || input == "Hello") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "Goodbye") {
        return "I'll talk to you later!";
    } else {
        return "Do you have other questions?";
    }
}