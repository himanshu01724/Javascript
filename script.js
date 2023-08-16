"use strict";
/*
let conutry = "India"
let continent = "Asia Pacific"
let population = 98.123
isIsland = true
var language
console.log(typeof(conutry),typeof(continent),typeof(population),typeof(isIsland),typeof(language))

const nam = "Himanshu"
const job = "Web Developer"
const birthYear = 1999
const year = 2023

const user = nam + job + "My age is = " + (year-birthYear);

//Template literals
const newuser = `I am ${nam} My Age is ${year-birthYear} I am a ${job}`

const multiline = `This is a \n\
Multiline\n\
String Example`

console.log(user)
console.log(newuser)
console.log(multiline)


let age
const birthYear = 1992

if(birthYear>1800 & birthYear<1899){
    age = 51
}
else if (birthYear>1900 & birthYear<1999){
    age = 18
}
else{
    age = 1
}

if(age>=18){
    console.log(`Driving Licese request submitted At age ${age}`)
}
else{
    console.log(`You need to wait ${18-age} More Years`)
}

const money = 10
if (money){
    console.log(`True Block Called`)
}
else{
    console.log(`False Block Called`)
}
let age = prompt(`What is your age?`)

if (Number(age) === 18) alert(`Driving License Request Submitted at Age ${age}`)
else
    alert(`Wait for ${18-age} Years`)
console.log(`Sarah has valid driving license ${a} and Sarah has good vision as well ${b}`);
else
console.log(`Sarah is not eligible`);

a = 10;
b = 1;
c = 19;
if ((a>b)&(a>c)){
    console.log(`Largest Element is ${a}`);
}
else if((b>c)&(b>a))
    console.log(`Largest element is ${b}`);
else
    console.log(`Largest Element is ${c}`);


if ((a<b)&(a<c)){
    console.log(`Smallest element is ${a}`);
}
else if ((b<a)&(b<c))
    console.log(`Smallest Element is ${b}`)
else
    console.log(`Smallest element is ${c}`)

//Include more temple strings

let himanshu = `dumb`
if (himanshu === `dumb`){
    himanshu = `Get Ahold of yourself your future is at risk`
    console.log(himanshu)
}else
    console.log(`Yes you are ${himanshu} Himanshu `)

let day = `saturday`;
let x = 2000;
switch(day){
    case `monday`:
        console.log(`Your budget is ${x}`);
        break;
    case `tuesday`:
        console.log(`Your budget is ${x+1}`);
        break;
    case `wednesday`:
        console.log(`Your budget is ${x+2}`);
        break;
    case `thursday`:
        console.log(`${x+3}`);
        break;
    case `friday`:
        console.log(`${x+4}`);
        break;
    default:
        console.log(`Day not scheduled`)
}


age = 30;
age <= 18 ? console.log(`You are in School at age ${age}`) : age <=22 & age>=18? 
console.log(`You are in collage at age ${age}`) : console.log(`You are an adult`)
//Ternary operator can we be also used to declare variables

const adulthood = age >= 17 ? `Collage Student`:`School Student`;  //Very usefuls
console.log(adulthood);

console.log(`I am a ${age >= 18 ? `Collage Student`:`School Student`}`) //template strings with ternary operator

const Interface = 10;

function drivingCriteria(age){
    return age >= 18 ? console.log(`You are qualified at age ${age}`) : console.log(`You are not qualified ${age}`)
}

drivingCriteria(20);


const retirement = (birthYear,firstName)=>{

    const age = 2023-birthYear;
    const r = 65-age;
    return `${firstName} is retiring at age ${r}`;
}
console.log(retirement(1999,`Himanshu`));

const retrement = (birth,name) =>{
    const age = 2023-birth;
    const retire = 65-age;
    return `${name} + ${retire}`
};

console.log(retrement(1999,`Joshi`));

function drivingCriteria(age){
    return age >= 18 ? console.log(true) : console.log(false)
}


const lmv = (age) =>{
    const test = drivingCriteria(age);
    if (test){
        console.log(`Himanshu`)
    }

    else
    console.log('Joshi')
}

lmv(18)

code will come in minutes we will convert it into hours

two functions calling:

function duration(code){
    let hour = code/60;
    return hour;  
}
const more = (time)=>{
    const totalTime = duration(time);
    totalTime >=2 ? console.log(`You have achieved JS goal study time = ${totalTime} hours `):console.log(`Failed !! study time - ${totalTime} hours`)
}

more(1400);


function test(){
    console.log(`Primitive data`)
    
    console.log(`Objects`)
}

let process = 101;

const p = (time) =>{
    if (time>10){
        process = 1000;
        console.log(process)
    }
    else
        console.log(process)
}
p(11)

const time = 1000;
time <=999 ? console.log(`Time is 999`):console.log(`Ternary Operator called`)


const a = -2;


a === 0 ? console.log(`Zero Value ${a}`):a>0?console.log(`Positive Number ${a}`):`Negative`;


switch(a){
    case 0:
        console.log(`Zero Value`)
        break;
    case 1:
        console.log(`Positive`)
        break;
    case -1:
        console.log(`Negative`)
        break;
    
}



let smoking = false;

smoking == true ? smoking = `Ayush`:smoking = `Himanshu`;


//This is our Array
const brand = [`Zara`,`HM`,`Nike`,`max`,`lee`];

const linearS = (arr,key) =>{
    for(let i = 0;i<arr.length;i++){
        if (key === arr[i])
        return i
    }
    return -1;
}

const num = [98,1,723,10,5,8];

const numMap = num.map((item)=>{
    return item*2;
})

console.log(numMap); //Map function creates an new array for elements of the existing array

const numFilter = num.filter((item)=>{
    return item>100;
})

console.log(numFilter); //Filter also returns an array filtering all the elements inside an array.




//This is our object
const shirtBrand = {
    size:40,
    length:`XXL`,
    brands: brand,
    price:6000,
    location:`New Delhi`,
    totoalSpend:2000,
    budget:function(){
        return this.price-this.totoalSpend;
    }
    
}

*/

//DS


