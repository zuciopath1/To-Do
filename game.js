const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const resetBtn = document.querySelector('.resetBtn')
let playScore = document.querySelector('#playScore')

let score1Value = 0;
let score2Value = 0;
let winningScore = 5;
let gameOver = false;

const updateScores = ()=>{
    if(score1Value === winningScore){
        score1.classList.add('winner');
        score2.classList.add('loser')
        gameOver = true
    }else if(score2Value === winningScore){
        score2.classList.add('winner')
        score1.classList.add('loser')
        gameOver = true
    }
}

player1.addEventListener('click', ()=>{
    if(!gameOver){
        score1Value +=1;
        updateScores()
    }
    score1.textContent = score1Value
})
player2.addEventListener('click', ()=>{
    if(!gameOver){
        score2Value +=1;
        updateScores()
    }
    score2.textContent = score2Value
})
const reset = ()=>{
    score1Value = 0;
    score2Value = 0
    score1.textContent = score1Value
    score2.textContent = score2Value
    gameOver = false;
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('winner','loser')
}
playScore.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset()
})

resetBtn.addEventListener('click', reset)
