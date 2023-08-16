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

// .addEventListener(`click`,()=>{
//     console.log(`click`);
//     btn1.style.display = `block`;
//     overLay.style.display = `block`;

// });

document.querySelector(`.close-modal`).addEventListener(`click`,()=>{
    btn1.style.display = `none`;
    overLay.style.display = `none`;
})