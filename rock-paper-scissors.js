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




playerScore = document.getElementById('playerScore')
computerScore = document.getElementById('computerScore')

computerScore.textContent = "Score: 0"
playerScore.textContent = "Score: 0"


let gameRound = document.getElementsByName("option")

let rounds = 0
let playerCounter = 0;
let computerCounter = 0;


for (let i = 0; i < gameRound.length;i++){
    gameRound[i].addEventListener('click',function(){
        rounds = this.value
        console.log(rounds)
    })}

let startButton = document.getElementById('startButton')
startButton.addEventListener('click',function(){
    if (rounds != 0){
        startGame()
    }
})

function startGame(){
    document.getElementById('startPanel').style.display = "none"
    document.getElementById('imageContainer').style.display = "flex"
}

function restartGame(){
    for (let i = 0;i < gameRound.length; i++){
        gameRound[i].checked = false;
    }
    document.getElementById('restartPanel').style.display = "none";
    document.getElementById('startPanel').style.display = "flex";
    document.getElementById('computerScore').textContent = "Score: 0";
    document.getElementById('playerScore').textContent = "Score: 0";
    rounds = 0;
    playerCounter = 0;
    computerCounter = 0;
}


const buttons = document.getElementsByClassName("button")

function startClash(button){

    let restartPanel = document.getElementById('restartPanel')

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
            playerScore.textContent = "Score: " + playerCounter
        }, 1500);
        playerCounter++;

        
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
            computerScore.textContent = "Score: " + computerCounter
        }, 1500);
        computerCounter++;

    } else{

        setTimeout(()=>{
        }, 300);

        setTimeout(()=>{
            playContainer.innerHTML = ""
            playContainer.style.display = "none"
            imageContainer.style.display = "flex"
        }, 1300);
    }
    if (playerCounter === parseInt(rounds)){
        setTimeout(()=>{
            imageContainer.style.display = "none"
            document.getElementById('restartText').textContent = "You win!"
            restartPanel.style.display = "flex"
            },1501)}

    else if (computerCounter === parseInt(rounds)){
        setTimeout(() =>{
            imageContainer.style.display = "none"
            document.getElementById("restartText").textContent = "You lose"
            restartPanel.style.display = "flex"
        }, 1501)}

}



for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        startClash(this)
    })
}

document.getElementById('restartButton').addEventListener('click',function(){
    restartGame()
})