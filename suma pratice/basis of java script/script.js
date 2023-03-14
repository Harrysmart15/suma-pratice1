// console.log(a);
// var a = 100;
// console.log(typeof typeof(a));
//  var a = 50;
//  var a =60;
//  console.log(a);
// let c = 50;
// c =70;
// console.log(c);
// const d =11;
// d = 56;
// // console.log(d);

// //copy by value

// var a = 10;
// var b = a;
// b = 20;
// console.log(a,b);

// //copy by referance value

// var a1 =[1,2,3];
// var a2 =a1;
// a2[1] =5;
// console.log(a2);

// function methods
// //keyword name of fumction (parameter)
// // keyword output 
// //console.log 

// function hari(a,b){


// return (a+b);
// }
// console.log((hari(25,24)));
// console.log(hari(87,1));






// var b =function () {
//     console.log("srinidhi");
// }

// b();



// //arrow function


// let karthi = (a,b ) => a + b;

// console.log(karthi(1,5));






// let sum =(a,f,g) => a * f * g;
// console.log(sum(2,5,1));


// let larg =(a,b) =>{
//     if (a>b) return "a is greater";
//     else return "b is greater";

// };
// console.log(larg(5,8));




// IIFE- imediately invoked function expression

// (function (){ 
// console.log("harikarthi");
// })();


// for of loop
// used in array 
// var a=["hari", "karthi", "kumar", "mohan", "eswari"];
// for (character of a) {
// console.log(character);
// }

// let b =["1","2","3"];
// for (c of b){
//     console.log(c);
// }



let marks=[90,100,95];
for (score of marks){
    score = score+5
    console.log(score);
}

// var neww =[ "hari",  "karthi", ["red","black"] , "kumar",  "mohan",  "eswari", ];
// for (character of neww){
    
// if (Array.isArray(character)){
//     for(mycolour of character){
//     console.log(mycolour);
//     }
// }else{
//     console.log(character);
// }
// }


//for in loop 
//{}
//used in  object method
// var movie ={
//     name : "avtar",
//     rating : 5,
//     type : "comedy"
// };
// for(key in movie){
// //console.log(movie.type);
// console.log(movie[key]);
// }

// let num = [9 , 2];
// for(find of num){
//     if()
// }