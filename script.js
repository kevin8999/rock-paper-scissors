function getComputerChoice() {
    // Pick a random number between 0 and 2. Use this random number to get the choice at the end
    let choice = Math.random() * 2;
    choice = Math.round(choice);

    const choices = ['rock', 'paper', 'scissors'];
    return choices.at(choice);
}

function determWinner(usrChoice, cpuChoice) {
    // Return the winner based off usrChoice and cpuChoice

    // tie
    if ((usrChoice === 'rock' && cpuChoice === 'rock') ||
        (usrChoice === 'paper' && cpuChoice === 'paper') ||
        (usrChoice === 'scissors' && cpuChoice === 'scissors')) {
        return 'tie';
    }

    // user wins
    else if ((usrChoice === 'rock' && cpuChoice === 'paper') ||
        (usrChoice === 'paper' && cpuChoice === 'scissors') ||
        (usrChoice === 'scissors' && cpuChoice === 'paper')) {
        return 'usr';
    }

    // computer wins
    else if ((usrChoice === 'rock' && cpuChoice === 'scissors') ||
        (usrChoice === 'paper' && cpuChoice === 'rock') ||
        (usrChoice === 'scissors' && cpuChoice === 'rock')) {
        return 'cpu';
    }
}

function displayWinner(winner, usrScore, cpuScore) {

}

function main() {
    let cpuScore = 0;
    let usrScore = 0;
    let numRoundsPlayed = 0;

    let buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", (event) => {
        numRoundsPlayed++;

        let target = event.target;
        let usrChoice = target.id;
        let cpuChoice = getComputerChoice();

        let validChoices = ['rock', 'paper', 'scissors'];

        if (validChoices.includes(usrChoice)) {
            console.log(`User selected ${usrChoice}`);
        } else {
            console.error('Invalid choice!');
            return;
        }

        console.log(`USR: ${usrChoice}\tCPU: ${cpuChoice}`);

        // Display winner to user
        winner = determWinner(usrChoice, cpuChoice);
        winnerDisplay = document.querySelector('.winner-display');

        let winnerText = "Winner: ";
        if (winner === 'usr') {
            usrScore += 1;
            winnerText += "USR";
        }
        else if (winner === 'cpu') {
            cpuScore += 1;
            winnerText += "CPU"
        }
        else {
            winnerText = "Tie!";
        }

        // Display score
        const usrScoreText = document.querySelector('.usr-score');
        usrScoreText.textContent = usrScore;
        const cpuScoreText = document.querySelector('.cpu-score');
        cpuScoreText.textContent = cpuScore;

        // Display choice of usrChoice and cpuChoice
        const choiceEmojis = { // Maps variables to appropriate emojis
            "rock": "\u270A",
            "paper": "\u270B",
            "scissors": "\u270C"
        };
        let usrChoiceText = document.querySelector('.usr-choice');
        usrChoiceText.textContent = choiceEmojis[usrChoice];
        let cpuChoiceText = document.querySelector('.cpu-choice');
        cpuChoiceText.textContent = choiceEmojis[cpuChoice];

        // console.log
        const TAB_SPACE = '    ';
        let scoreText = `USR: ${usrScore}${TAB_SPACE}CPU: ${cpuScore}`;
        let choiceText = `USR: ${usrChoice}${TAB_SPACE}CPU: ${cpuChoice}`;
        console.log(choiceText);

    });
}

main();