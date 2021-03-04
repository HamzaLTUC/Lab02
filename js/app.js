'use strict';

let score = 0 ;

let wlc = prompt('Welcome To Guess Game.. Please answer Yes or No , Type Your Name  :) ')
alert ('Hello'+  ' ' + wlc + ' '+ 'The Game will Start')

let jump = prompt('Can cats jump six times their length ?') ;
function Q1(jump){
    if (jump === 'YES' || jump ==='yes' || jump ==='y' || jump ==='Y' || jump ==='Yes'){
        alert ('Your answer is corect')
        score++;
    }else {
        alert ( 'Your answer is wrong')
    }
}
Q1(jump);

let cheese = prompt('Can cats eat cheese ?');
function Q2(cheese){
if (cheese === 'YES' || cheese === 'yes' || cheese === 'y' || cheese === 'Y' || cheese === 'Yes') {
    alert ('Your answer is corect')
    score++; 
}else {
    alert ( 'Your answer is wrong');
}
}
Q2(cheese)
let swim = prompt('Can cats swim in water ?');
function Q3(swim){
    if (swim === 'YES' || swim ==='yes' || swim ==='y' || swim ==='Y' || swim ==='Yes'){
        alert ('Your answer is corect')
        score++;
    }else if (swim ==='No' ||swim === 'no' || swim ==='n' || swim ==='N'){
        alert ( 'Your answer is wrong ')
    } 
}
Q3(swim);

let forest = prompt('Can cats live in forests?');
function Q4(forests){
    if (forest === 'No' || forest ==='no' || forest ==='n' || forest ==='N' ){
        alert ('Your answer is corect')
        score++;
    }else {
        alert ( 'Your answer is wrong')
    }
}
Q4()
let grass = prompt('Do cats eat grass?');
function Q5(grass){
    if (grass === 'YES' || grass ==='yes' || grass ==='y' || grass ==='Y' || grass ==='Yes' ){
        alert ('Your answer is corect' + ' ' + 'cat may graze on grass to boost its vitamin levels.')
        score++;
    }else {
        alert ( 'Your answer is wrong'+ ' ' +'cat may graze on grass to boost its vitamin levels.') 
    }
}
Q5()

alert ('Thanks You For Joining My Guess Cat Game '+  ' ' + wlc + ' ' ) 

document.write ("Hello " + wlc + "! How are you today? , Did You like this Game :D");
console.log(jump); console.log(cheese); console.log(swim) ; console.log(forest); console.log(grass);


//here is the 6th question
function Q6(){
let Myage= 29 ;
let counter=0 ;
for (let i=0 ; i<4 ; i++){
    let guessage = prompt( 'try to guess my age , You have 4 attempts') ;
    let newAge = parseInt(guessage) ;
    if (newAge<=20 || newAge >= 30){
        alert('You are  far ..try again');
    }
    else if (newAge >=21 && newAge <=25){
    alert('You are little far try again!') ;
    }
    else if (newAge>=26 && newAge<=28){
        alert('You are close but try again' ) ;
    }
    else if (newAge===29){
        alert('You are Correct!');
        score++;
        break ;
    }
    counter =+i
}
console.log (counter ) ;
if  (counter===3){

    alert('The correct answer is 29')
    
}
}
Q6()

//This is The 7th Question method 2 
let FavColor= ['black' ,'white' , 'blue' , 'grey', 'brown' ,'green'];
function Q7(){
let Counter=0;

for(let i = 0; i<FavColor.length; i++){     
let question = prompt('Guess My favourite Color??').toLowerCase()
if(question === FavColor[i]){
    alert('You Have Got a Color')
    score++;
    break;
}else{
    (alert ('Try again' +' '+' hint :) first letter is w '))
    Counter=+i
    }
}
if (Counter===5){
    alert('Hard Luck the answers are Black , White , Blue , Grey')
}
}
Q7()

alert('Your score out of 7 is' + ' ' + score) ;
console.log(FavColor[0]);console.log(FavColor[1]);console.log(FavColor[2]);console.log(FavColor[3]);console.log(Myage);

// method 1 

// let Counter=0;
// let FavColor= ['Black' ,'White' , 'Blue' , 'Grey'];
// for(let i = 0; i < 6; i++){     
// let question = prompt('Guess My favourite Color??')
//  if(question === FavColor[0].toLowerCase()){
//     alert('You Have Got the Colors')
//     score++;
//      break;
// } else if (question === FavColor[1].toLowerCase()){
//     alert('You Have Got the Colors')
//     score++;
//     break ;
// }
// else if (question === FavColor[2].toLowerCase()){
//     alert('You Have Got the Colors')
//     score++;
//     break ;
// }
// else if (question === FavColor[3].toLowerCase()){
//     alert('You Have Got the Colors')
//     score++;
//     break ;
// }
// else (alert ('Try again' +' '+'My Favourite Colors are '))
// Counter=+i
// }

// if (Counter===5){
//     alert('Hard Luck the answers are Black , White , Blue , Grey')
// }
// alert('Your score out of 7 is' + ' ' + score) ;
// console.log(FavColor[0]);console.log(FavColor[1]);console.log(FavColor[2]);console.log(FavColor[3]);console.log(Myage);