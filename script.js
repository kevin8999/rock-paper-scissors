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

function main() {
    let cpuScore = 0;
    let usrScore = 0;

    let cpuChoice = getComputerChoice();
    let usrChoice;

    // Get user choice
    let buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", (event) => {
        let target = event.target;
        usrChoice = target.id;
    });

    console.log(usrChoice);

    if (usrChoice === undefined)
        console.error('Invalid choice!')

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
}

main();