const btn1 = document.querySelector(`.modal`);
const overLay = document.querySelector(`.overlay`);

const btnShow = document.querySelectorAll(`.show-modal`);
console.log(btnShow)

for(let i=0;i<btnShow.length;i++){
    console.log(btnShow[i]);
    btnShow[i].addEventListener(`click`,()=>{
             console.log(`click`);
             btn1.style.display = `block`;
             overLay.style.display = `block`;
         });
}

const closing = document.querySelector(`.close-modal`);

closing.addEventListener(`click`,()=>{
    btn1.style.display = `none`;
    overLay.style.display = `none`;
})

document.addEventListener(`keydown`,function(e){
    if (e.key === `Escape`){
    btn1.style.display = `none`;
    overLay.style.display = `none`;
    }
    
})