function getMoveName(number){
if(number == 1){
    return 'rock';
} else if (number == 2){
    return 'scissors';
} else if (number == 3){
    return 'paper';
} else {
    printMessage('Error');
}
}

let randomFraction = Math.random();

let calculation = randomFraction * 3 + 1;

let roundNumber = Math.floor(calculation);

let computerMove = getMoveName(roundNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

function displayResult(argComputerMove,argPlayerMove){
    if (argComputerMove == 'rock' && argPlayerMove == 'paper'){
        printMessage('You win!');
      } else if (argComputerMove == 'rock' && argPlayerMove == 'scissors'){
        printMessage('You lose!');
      } else if (argComputerMove == 'rock' && argPlayerMove == 'rock'){
        printMessage('Draw!');
      } else if (argComputerMove == 'scissors' && argPlayerMove == 'paper'){
        printMessage('You loser!');
      }  else if (argComputerMove == 'scissors' && argPlayerMove == 'scissors'){
        printMessage('Draw!');
    }  else if (argComputerMove == 'scissors' && argPlayerMove == 'rock'){
        printMessage('You win!');
      }  else if (argComputerMove == 'paper' && argPlayerMove == 'scissors'){
        printMessage('You win!');
      }  else if (argComputerMove == 'paper' && argPlayerMove == 'paper'){
        printMessage('Draw!');
    }  else if (argComputerMove == 'paper' && argPlayerMove == 'rock'){
        printMessage('You lose!');
      } else{
        printMessage('Error! Try again later');
      }
    }

printMessage('I choose for my course: ' + computerMove);

printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove,playerMove);