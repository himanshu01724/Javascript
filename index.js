// console.log(document.querySelector(`.left`));

// const inp = prompt(document.querySelector(`.message`));

// inp > 18 ? console.log(`Yes`):console.log(`No`)

// console.log(document.querySelector(`.message`).textContent);  //we are fetching from a class. if it is a id then #


// document.querySelector(`.number `).textContent = `Created by Himanshu Joshi Input number field called`


// console.log(document.querySelector(`.guess`).value=12)
// console.log(document.querySelector(`.guess`).value)

// document.querySelector(`.score`).textContent = test;
//     document.querySelector(`.highscore`).textContent = test;
//     console.log(typeof(test),test)

//As a programmer always check for the cases which can be created breakdown to cases then implement logic



document.querySelector(`.again`).addEventListener('click',()=>{
    
    window.location.reload();
    
})


const numberS = Math.trunc(Math.random()*20+1);


        

let ScoreD = 20;


document.querySelector(`.check`).addEventListener(`click`,()=>{

    const test = Number(document.querySelector(`.guess`).value);

    console.log(test,typeof(test))

    //Case 1 when no data is inputted
    if (!test){
        alert(`Please Select a number`)
        document.querySelector(`.message`).textContent = `No Number Selected Please choose a number` 
    }
    else if (test === numberS){

        document.querySelector(`.message`).textContent = `Congratulations You have selected the Correct Number`
        document.querySelector(`.highscore`).textContent = ScoreD;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).textContent = numberS;

    }
    else (test != numberS){
        test>numberS ? document.querySelector(`.message`).textContent = `Number too high`:document.querySelector(`.message`).textContent = `Number too Lowwwwww`;
        ScoreD-=1;
        document.querySelector(`.score`).textContent = ScoreD;
        
    }

    
});


