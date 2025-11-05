// q=1 

// let age = prompt("what is your age?");

// if (age==null){
//     console.error("you cancelled");
// }
// else{
//     if (age.trim() === ""){
//         console.error("you gave space");
//     }
//     else{
//         age = Number(age);
//         if (isNaN(age)){
//             console.error("please enter a Number ");
//         }else{
//             console.log("enter your age:");
//         }
//         if (age<0) console.log("not valid age");
//         else if(age>=18) console.log("you can vote");
//         else console.log("you can't");
//     }
// }

// q=2

// for (let i=1 ; i<11 ; i++){
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// for (let i= 1; i<11; i++){
//     console.log(` 8 x ${i} = ${8 * i}`);
// }

// q-3
let count=0;

for (let i=0; i<16; i++){
    if(i>8){
        count++;
    }
}
console.log(count);