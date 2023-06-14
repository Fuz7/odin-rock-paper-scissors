function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissor"){
        return "You win!";
    } else if(playerSelection === "scissor" && computerSelection === "rock" ){
        return "You lose! rock beats scissor";       
    }         
    
    if (playerSelection === "scissor" && computerSelection === "paper" ){
        return "You win!";
    } else if(playerSelection === "paper" && computerSelection === "scissor" ){
        return "You lose! scissor beats rock";       
    }    

    if (playerSelection === "paper" && computerSelection === "rock" ){
        return "You win!";
    } else if(playerSelection === "rock" && computerSelection === "paper" ){
        return "You lose! paper beats rock";       
    }    
    
    return "It's a draw!";
}

function getComputerChoice(){
    let choices = ["rock","paper","scissor"]
    choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
}


function game(){
    let playerCounter = 0;
    let computerCounter = 0;

    for (let i = 0;i < 5; i++){
        let playerSelection = prompt("What do you choose? Rock, Paper or Scissor?: ")
        let computerSelection = getComputerChoice()

        console.log(playRound(playerSelection,computerSelection));
        
        let winner =(playRound(playerSelection,computerSelection))
        
        if (winner.includes("You win!")){
            playerCounter ++;
        } else if(winner.includes("You lose!")){
            computerCounter ++;
        }

    }

    if (playerCounter > computerCounter){
        return "You won the game!"
    } else if(computerCounter > playerCounter){
        return ("You lose the game")
    }else{
        return "The game is draw!"
    }
}

