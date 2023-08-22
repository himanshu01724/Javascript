//socreCards & labels
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const currentScore = document.querySelector(`#current--0`);
const nextScore = document.querySelector(`#current--1`);

//buttons
const rollBtn = document.querySelector(`.btn--roll`);
const newGameBtn = document.querySelector(`.btn--new`)
const holdBtn = document.querySelector(`.btn--hold`)

//dice-images
const diceImage = document.querySelector(`.dice`);

//player Selection

const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);

score0El.textContent = 0;
score1El.textContent = 0;

let res = 0;
let activePlayer = 0;
const score = [0,0];
let playing = true;

const switchPlayer = () =>{
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    res = 0;
    player0.classList.toggle(`player--active`);
    player1.classList.toggle(`player--active`);
    console.log(activePlayer)
}

rollBtn.addEventListener(`click`,()=>{

    if(playing){
    const dice = Math.trunc(Math.random()*6)+1;
    //selecting the image dynamically
    diceImage.src = `dice-${dice}.png`;
    console.log(dice)    
    diceImage.style.display = `block`;
    if (dice !=1){
        res+=dice;
        //Selecting the player dynamically
        document.querySelector(`#current--${activePlayer}`).textContent = res;
    }
    else{

        //resetting the score as well

        switchPlayer();
    }
}}
)

holdBtn.addEventListener(`click`,()=>{
    if(playing){
    score[activePlayer] += res;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
    
    if(score[activePlayer]>=20){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player-active`);
        diceImage.style.display = 'none';
        
    }

    else{
        switchPlayer();
    }
    console.log(score)
    
}}
);

newGameBtn.addEventListener(`click`,()=>{
    window.location.reload();
})


