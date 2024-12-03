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

    // Rock
    if (usrChoice === 'rock' && cpuChoice === 'rock')
        return 'tie';
    else if (usrChoice === 'rock' && cpuChoice === 'paper')
        return 'usr';
    else if (usrChoice === 'rock' && cpuChoice === 'scissors')
        return 'cpu'
    // Paper
    else if (usrChoice === 'paper' && cpuChoice === 'rock')
        return 'cpu';
    else if (usrChoice === 'paper' && cpuChoice === 'paper')
        return 'tie';
    else if (usrChoice === 'paper' && cpuChoice === 'scissors')
        return 'usr'
    // Scissors
    else if (usrChoice === 'scissors' && cpuChoice === 'rock')
        return 'cpu';
    else if (usrChoice === 'scissors' && cpuChoice === 'paper')
        return 'usr';
    else if (usrChoice === 'scissors' && cpuChoice === 'scissors')
        return 'tie'
}

function playRound() {
    let cpuChoice = getComputerChoice();    
    let usrChoice = getHumanChoice();

    if (usrChoice === undefined)
        console.error('Invald choice!')

    winner = determWinner(usrChoice, cpuChoice);
    return winner;
}

function main() {
    let cpuScore = 0;
    let usrScore = 0;

    winner = playRound();

    if (winner === 'usr')
        usrScore += 1;
    else if (winner === 'cpu')
        cpuScore += 1;

    console.log(`USR: ${usrScore}\tCPU: ${cpuScore}`)
}

main();