let randomFraction = Math.random();

console.log('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

console.log('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

console.log('Liczba po zaokrągleniu w dół to: ' + roundNumber);

// console.log('I choose for my course:' + roundNumber);

if(roundNumber == 1){
    computerMove = 'rock';
    printMessage('I choose for my course: ' + computerMove);
} else if (roundNumber == 2){
    computerMove = 'scissors';
    printMessage('I choose for my course: ' + computerMove);
} else if (roundNumber == 3){
    computerMove = 'paper';
    printMessage('I choose for my course: ' + computerMove);
} else {
    printMessage('Error');
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'rock';
} else if (playerInput == '2'){
    playerMove = 'scissors'
} else if (playerInput == '3'){
    playerMove = 'paper'
} else{
    printMessage('We can not use it for our game, try 1, 2, 3');
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'rock' && playerMove == 'paper'){
    printMessage('You win!');
  } else if (computerMove == 'rock' && playerMove == 'scissors'){
    printMessage('You lose!');
  } else if (computerMove == 'rock' && playerMove == 'rock'){
    printMessage('Draw!');
  } else if (computerMove == 'scissors' && playerMove == 'paper'){
    printMessage('Draw!');
  }  else if (computerMove == 'scissors' && playerMove == 'scissors'){
    printMessage('Draw!');
  }  else if (computerMove == 'paper' && playerMove == 'scissors'){
    printMessage('You win!');
  }  else if (computerMove == 'paper' && playerMove == 'paper'){
    printMessage('Draw!');
}  else if (computerMove == 'paper' && playerMove == 'rock'){
    printMessage('You lose!');
  } else{
    printMessage('Error! Try again later');
  }