
 const player0El = document.querySelector('.player_0')
 const player1El = document.querySelector('.player_1')

const score0El = document.getElementById('score_0');
const score1El = document.getElementById('score_1'); 

const diceEl = document.querySelector('.dice');

const current0El = document.getElementById('current_0');
const current1El = document.getElementById('current_1');

// buttons 

const btnRoll = document.querySelector('.btn_roll');
const btnHold = document.querySelector('.btn_hold');
const btnNew = document.querySelector('.btn_new')

let scores, currentScore, playGame, activePlayer;

const initialized = function(){

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

currentScore = 0 ;

activePlayer = 0;

scores = [0, 0]

playGame = true;
current0El.textContent = 0 ;
current1El.textContent = 0 ;
diceEl.classList.add('hidden');
player0El.classList.remove('victory');
player1El.classList.remove('victory');
player0El.classList.add('player_active');
player1El.classList.remove('player_active');
}

//set le score à 0 et cache le dé

initialized();

const switchPlayer = function(){
    document.getElementById('current_'+activePlayer).textContent = 0
 activePlayer = activePlayer === 0 ? 1 : 0 ;
 currentScore = 0;
 player0El.classList.toggle('player_active');
 player1El.classList.toggle('player_active');

}

//btn roll    //function changer d'image en fonction du resutlat : 
btnRoll.addEventListener('click', function () {
    if (playGame) {diceEl.classList.remove('hidden')
 
    const dice = Math.floor(Math.random()*6) + 1 ;

 diceEl.src = './images/des_'+dice+'.PNG';

//surveiller roll = 1

if (dice !==1 ){
    //Modifier le score 
currentScore += dice;
//current0El.textContent = currentScore;
document.getElementById('current_'+activePlayer).textContent = currentScore
}else{
//changer de joueur


switchPlayer()


    }
    
}

 
});
    
//Click sur le Bouton hold

btnHold.addEventListener('click', function(){

   if(playGame) {
     //stock current score dans   SCORE
     scores[activePlayer] += currentScore;
     document.getElementById('score_'+activePlayer).textContent = scores[activePlayer];
 
 
     //valider si partie gagné
 if(scores[activePlayer] >= 100){
    playGame = false;
     document.querySelector('.player_'+activePlayer).classList.add('victory');
     diceEl.classList.add('hidden');
 };
 
 //changer de joueur
 switchPlayer();
 
   }


});

//Clicke sur le bouton New GAME 

btnNew.addEventListener('click',function(){
    initialized();
});
