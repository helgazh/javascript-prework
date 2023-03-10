function printMessage(msg){
	let div1 = document.createElement('div');
	div1.innerHTML = msg;

    document.getElementById('messages').appendChild(div1);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

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

	function displayResult(argComputerMove,argPlayerMove){
		if (argComputerMove == 'rock' && argPlayerMove == 'paper'){
			printMessage('You win!');
			userResults++;
		  } else if (argComputerMove == 'rock' && argPlayerMove == 'scissors'){
			printMessage('You lose!');
			compResults++;
		  } else if (argComputerMove == 'rock' && argPlayerMove == 'rock'){
			printMessage('Draw!');
		  } else if (argComputerMove == 'scissors' && argPlayerMove == 'paper'){
			printMessage('You loser!');
			compResults++;
		  }  else if (argComputerMove == 'scissors' && argPlayerMove == 'scissors'){
			printMessage('Draw!');
		}  else if (argComputerMove == 'scissors' && argPlayerMove == 'rock'){
			printMessage('You win!');
			userResults++;
		  }  else if (argComputerMove == 'paper' && argPlayerMove == 'scissors'){
			printMessage('You win!');
			userResults++;
		  }  else if (argComputerMove == 'paper' && argPlayerMove == 'paper'){
			printMessage('Draw!');
		}  else if (argComputerMove == 'paper' && argPlayerMove == 'rock'){
			printMessage('You lose!');
			compResults++;
		  } else{
			printMessage('Error! Try again later');
		  }
		}
	
		function playGame(playerInput){
			clearMessages();

			let randomFraction = Math.random();
			let calculation = randomFraction * 3 + 1;
			let roundNumber = Math.floor(calculation);
			let computerMove = getMoveName(roundNumber);
			let playerMove = getMoveName(playerInput);

			printMessage('Computer ruch to: ' + computerMove);
			printMessage('User ruch to: ' + playerMove);
			displayResult(computerMove,playerMove);

			printMessage(userResults + ' : ' + compResults);
		}

