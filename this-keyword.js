//=====================================X==THIS-KEYWORD==X==========================================//
//this ek special keyword hai jo function ke andar use hota hai, aur uski value depend karti hai function kaise call hua, na ke kahan likha gaya (yaad hai humne dynamic vs lexical scope discuss kiya tha? this dynamic jaisa behave karta hai

//Value of this in globle scope//
var x = 10;// var is a globle scope 
console.log(this.x); // 10 — kyunki global var, window ka property ban jaata hai
console.log(window.x); // 10 — same cheez

// ⚠️========================================importent note============================
//globle scope mai this ki value window hooti hai

//let pr cnst mai values humesha undifine hogi in windo in this keyword
//quu ki ye globle scope mai hai
var a = 10;
let b = 20;

console.log(a); // 10 — global scope se access ho raha hai
console.log(b); // 20 — global scope se access ho raha hai

console.log(window.a); // 10 — window object ka property bhi bana
console.log(window.b); // undefined — window ka property nahi bana