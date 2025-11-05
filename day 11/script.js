// q- 17

// counter=0;
// for(i=1; i<21; i++){
//     if (counter===3) break;
//     if(i%2 !== 0){
//         console.log(i);
//         counter++;
//     }
// }

// q-18
// let cpunter =0;
// for (i=1; i<6; i++){
//     let num = +prompt("enter a number");
//     if (num>= 0) counter++;
// }
// console.log(counter);   not solved

// q-19

let balance=1000;

let flag = false ;
let counter =0;
while (balance>0 && counter !== 3){
    let withdraw =+prompt ("kitne paisa withdraw karna hai");
    counter++;
    if(withdraw <= balance) balance -= withdraw;
    else{
         flag =true;
         break;
    }
}

if (flag ===true ){
    console.log("insufficient ");
}

console.log(`balance :${balance}`);