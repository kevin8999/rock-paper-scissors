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

        console.log(`USR: ${usrChoice}\tCPU: ${cpuChoice}`);

        if (usrChoice === undefined) {
            console.error('Invalid choice!');
            return;
        }

        winner = determWinner(usrChoice, cpuChoice);

        // Display winner to user
        winnerDisplay = document.querySelector('.winner-display');

        let winnerText = "";
        if (winner === 'usr') {
            usrScore += 1;
            winnerText = "User wins!";
        }
        else if (winner === 'cpu') {
            cpuScore += 1;
            winnerText = "CPU wins!"
        }
        else {
            winnerText = "Tie!";
        }

        // Display winnerText to screen
        const para = document.querySelector('.winner');
        para.textContent = winnerText;

        // Display scoreboard to screen
        let numTies = numRoundsPlayed - (usrScore + cpuScore);
        const TAB_SPACE = "    ";
        let scoreText = `USR: ${usrScore}${TAB_SPACE}CPU: ${cpuScore}${TAB_SPACE}TIE: ${numTies}`
        const scoreboard = document.querySelector('.scoreboard')
        scoreboard.textContent = scoreText;
        console.log(scoreText);

        // Display choice of usrChoice and cpuChoice
        let choiceDisplay = document.querySelector('.choice');
        choiceText = `USR: ${usrChoice}${TAB_SPACE}CPU: ${cpuChoice}`;
        choiceDisplay.textContent = choiceText;
        console.log(choiceText);

    });
}

main();