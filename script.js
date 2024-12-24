function getComputerChoice() {
    let choice = Math.random() * 2;
    choice = Math.round(choice);

    choices = ['rock', 'paper', 'scissors'];
    return choices.at(choice);
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    validChoices = ['rock', 'paper', 'scissors'];

    if (validChoices.includes(choice))
        return choice.toLowerCase();
    else
        return undefined;
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

function main() {
    let i = 0;
    let cpuScore = 0;
    let usrScore = 0;

    while (i < 5) {
        let cpuChoice = getComputerChoice();
        let usrChoice = getHumanChoice();

        if (usrChoice === undefined)
            console.error('Invald choice!')

        winner = determWinner(usrChoice, cpuChoice);

        // Determine winner
        if (winner === 'usr') {
            usrScore += 1;
            alert("User wins!");
        }
        else if (winner === 'cpu') {
            cpuScore += 1;
            alert("CPU wins!")
        }

        console.log(`USR: ${usrScore}\tCPU: ${cpuScore}`)
        i++;
    }
}

main();