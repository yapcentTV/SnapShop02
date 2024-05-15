function getBotResponse(input) {

    if (input =="rock" || input =="Rock") {
        return "Paper";
    } else if (input =="paper" || input == "Paper") {
        return "Scissors";
    } else if (input =="scissors" || input == "Scissors") {
        return "Rock";
    }

    if (input == "payment" || input == "Payment") {
        return "We have Gcash, Paypal, BPI & COD";
    } else if (input == "games" || input == "Games") {
        return "I don't play games. Sorry!";
    } else if(input =="cute" || input =="Cute"){
        return "Oh, thank you.";
    }

    if (input == "hello" || input == "Hello" || input == "hi" || input == "Hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "Goodbye") {
        return "Thank you for your time.";
    } else {
        return "Do you have other questions?";
    }
}
