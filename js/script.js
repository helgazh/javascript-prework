// playGame(2);

    let rock = document.getElementById('rock');
    let scissors = document.getElementById('scissors');
    let paper = document.getElementById('paper');

    rock.addEventListener('click', function(){
        playGame(1);
    });
    scissors.addEventListener('click', function(){
        playGame(2);
    });
    paper.addEventListener('click', function(){
        playGame(3);
    });
