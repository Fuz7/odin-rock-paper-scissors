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

playerScore = document.getElementById('playerScore')
computerScore = document.getElementById('computerScore')

computerScore.textContent = "Score: 0"
playerScore.textContent = "Score : 0"


const buttons = document.getElementsByClassName("button")

function startClash(button){
    let playerSelection = button.value;
    let computerSelection = getComputerChoice();
    
    playerCapitalizedValue = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    computerCapitalizedValue = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)

    let playContainer = document.getElementById("playContainer")

    let playerButton = "<button type='submit'><img src=static/" + playerSelection + ".svg><div>" + playerCapitalizedValue +"</div>"
    let computerButton = "<button type='submit'><img src=static/" + computerSelection + ".svg><div>" + computerCapitalizedValue +"</div>"

    playContainer.innerHTML += computerButton
    playContainer.innerHTML += playerButton

    imageContainer = document.getElementById("imageContainer")
    imageContainer.style.display = "none"


    playContainer.style.display = "flex"
    
    let winner = playRound(playerSelection,computerSelection)
    if (winner.includes("You win!")){
        setTimeout(()=>{
            playContainer.children[0].style.height = "0px"
            playContainer.children[0].style.backgroundColor = "red"
            playContainer.children[1].style.backgroundColor = "#50A747"
        }, 300);

        setTimeout(()=>{
            playContainer.innerHTML = ""
            playContainer.style.display = "none"
            imageContainer.style.display = "flex"
        }, 1500);
    } else if(winner.includes("You lose!")){
        setTimeout(()=>{
            playContainer.children[1].style.height = "0px"
            playContainer.children[1].style.backgroundColor = "red"
            playContainer.children[0].style.backgroundColor = "#50A747"
        }, 300);

        setTimeout(()=>{
            playContainer.innerHTML = ""
            playContainer.style.display = "none"
            imageContainer.style.display = "flex"
        }, 1500);
    } else{

        setTimeout(()=>{
        }, 300);

        setTimeout(()=>{
            playContainer.innerHTML = ""
            playContainer.style.display = "none"
            imageContainer.style.display = "flex"
        }, 1300);
    }

    

}

function changeHeight(){
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        startClash(this)
    })
}