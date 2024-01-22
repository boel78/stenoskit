const button = document.querySelector('#playButton');
let round = 0;

button.addEventListener('click', () => {
    let playerScore = parseInt(document.querySelector("#playerScore").textContent);
    let computerScore = parseInt(document.querySelector("#computerScore").textContent);
    let roundput = document.querySelector("#round")
    const output = document.querySelector("#output")
    let player = document.querySelector("#playerChoice").value.toLowerCase();
    if(player == "rock" || player == "paper" || player == "scissors"){
        if (round < 4) {
            score = playRound(player, computerChoice())
            if (score == "You lose") {
                computerScore = computerScore + 1;
                document.querySelector("#computerScore").innerText = computerScore.toString();
    
            }
            else if (score == "You win") {
                playerScore = playerScore + 1;
                document.querySelector("#playerScore").innerText = playerScore.toString();
            }
            output.innerText = score;
            round++;
        }
        else{
            if(playerScore > computerScore){
                output.innerText = "YOU ARE THE ULTIMATE CHAMPION!!"
            }
            else{
                output.innerText = "IMAGINE LOSING TO A COMPUTER HAHAHA"
            }
            document.querySelector("#computerScore").innerText = 0;
            document.querySelector("#playerScore").innerText = 0;
            round = 0;
    
        }
    }
    else{
        output.innerText = "Input a valid rock, paper or scissors"
    }
   

    roundput.innerText = round;
});




function playRound(player, computerChoice) {
    computer = computerChoice
    player = player.toLowerCase();
    let win = "You lose";
    if (player == "rock" && computer == "scissors") {
        win = "You win";
    }
    else if (player == "paper" && computer == "rock") {
        win = "You win";
    }
    else if (player == "scissors" && computer == "paper") {
        win = "You win";
    }
    else if (player == computer) {
        win = "Its a draw!";
    }
    return win;
}

function computerChoice() {
    let choice = "";
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    console.log(choice)
    return choice
}

function game() {


}
