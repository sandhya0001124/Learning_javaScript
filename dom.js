// ?1️⃣ Button Click Counter

// Create a button

// On each click, increase and display a counter value


// let btn=document.createElement("button");
// btn.innerText='click'
// let h1=document.createElement('h1')
// document.body.append(btn,h1)
// let count=0;
// btn.addEventListener('click',()=>{
//     count+=1
//   h1.innerText=count;

// })


// 2️⃣ Change Text on Button Click

// A paragraph and a button

// When the button is clicked, change the paragraph text
//  let btn=document.createElement("button");
//  let para=document.createElement('p');
//  para.innerText= 'Initial message'
//  btn.innerText='click'


//  document.body.append(btn,para)
// let flag=true;
//  btn.addEventListener('click',()=>{
//     if(flag){
//     para.innerText="changed message"
//     }
//     else{
//     para.innerText="Original message"
// }

// flag=!flag;
//  })

// ?3️⃣ Change Background Color

// Button click should change the page background color

// Bonus: use random colors
// let btn=document.createElement('button')
// let div=document.createElement('div')

// btn.innerText='click'
// div.style.height='200px';
// div.style.width='200px';
// div.style.backgroundColor='red'

// div.style.border='2px solid';

// document.body.append(btn,div)

// let flag=true;

// div.addEventListener('click',()=>{
// if(flag){
// div.style.backgroundColor='yellow'
// }
// else{
// div.style.backgroundColor='red'

// }
// flag=!flag
// })


//? 4️⃣ Show / Hide Text

// Button toggles visibility of a <div>

// Text should show on first click, hide on second

// let btn=document.createElement('button')
// let div=document.createElement('div')

// btn.textContent='hide'
// div.innerText='i am div'
// div.style.visibility='hidden'
// let flag=true;

// document.body.append(btn,div)

// btn.addEventListener('click',()=>{
//    if(flag){
// div.style.visibility=''

//    }
//    else{
// div.style.visibility='hidden'

//    }
//    flag=!flag
// })


//? 5️⃣ Input Value Display

// Take input from a textbox

// On button click, display the entered value below

//   let input=document.createElement('input')
//   let h1=document.createElement('h1')
//   let btn=document.createElement('button')

//   document.body.append(input,btn,h1)

//   btn.addEventListener('click',()=>{
//     h1.textContent=input.value;
//   })

