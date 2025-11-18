// let getGradePoint=(grade)=>
// {
//     if(grade=="A+")
//     {
//         console.log(10);
//     }
//     else if(grade=="A")
//     {
//         console.log(9);
//     }
//     else if(grade=="B")
//     {
//         console.log(8);
//     }
//     else if(grade=="C")
//     {
//         console.log("7");
//     }else
//     {
//         console.log(0);
//     }
// }
// getGradePoint("A")

// let timeMessage=(hour)=>{
//     if(hour<12)
//     {
//         console.log("Good Morning");
//     }
//     else if(hour<17)
//     {
//         console.log("Good Afternoon");
//     }
//     else if(hour<=24){
//         console.log("Good Evening");
//     }
// }
// timeMessage(19)


// (function(){
//     if(year%4)
//     {
//         console.log("leap Year");
//     }
// })();

// let studentName=(name)=>{
//     console.log(`Hello Rahul your name has ${name.length}`);
// }
// studentName("Rahul")

// let calculateBill=(cost,discount)=>{
//     console.log(`Total bill after discount: ${cost-(cost*discount)/100}`);
// }
// calculateBill(7000,10)

// let timeLsft=(CurrentHour)=>{
//     console.log(`${24-CurrentHour} are left for midnight`);
// }
// timeLsft(23)

// let temprature=(c)=>{
//     console.log(`temp in Fahrenheit :${c*9/5+32}`);
// }
// temprature(18)

let checkEligiblity=(age,citizenship)=>{
    if(age>=18 && citizenship=="indian")
    {
        console.log("You can vote");
    }
    else{
        console.log("Not eligible for vote");
    }
}
checkEligiblity(5,"indian")