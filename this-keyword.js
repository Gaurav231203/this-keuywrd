//=====================================X==THIS-KEYWORD==X==========================================//
//this ek special keyword hai jo function ke andar use hota hai, aur uski value depend karti hai function kaise call hua, na ke kahan likha gaya (yaad hai humne dynamic vs lexical scope discuss kiya tha? this dynamic jaisa behave karta hai


// ⚠️========================================importent note============================
//WINDOW KY HAI=====window = browser ka global object — jismein saari built-in cheezein (DOM, timers, alert, location, etc) rehti hain, aur jismein aapka poora JavaScript code "andar" chalta hai. Isi wajah se global scope mein this seedha window ko point karta hai.

//globle scope mai this ki value window hooti hai

//let pr cnst mai values humesha undifine hogi in windo in this keyword
//quu ki ye globle scope mai hai
var a = 10;
let b = 20;

console.log(a); // 10 — global scope se access ho raha hai
console.log(b); // 20 — global scope se access ho raha hai

console.log(window.a); // 10 — window object ka property bhi bana
console.log(window.b); // undefined — window ka property nahi bana


//function mai bhi this ki value window hoti hai

function abc(){
    console.log(this);
}
abc();
  //==============================MATHOD==============================
//ek asia functio jo OBJECT kay andr ho use  hum mathod kahte hai
//⚠️ importent note mathod mai {this} ki value humara bobject bnn  jataxxxxxxxxxxxx hai;
// this humesha pure objectb ko denote krega;
//method kay andar 
// mathod mai  ARROW FUNC ()=> use nahi krna quu wo object na rhh krr window bann jayega

// ek or note  agr hum mathod kay andr ekk or funtion use krenge to mathod apni value firr kho dega or window bann jayega
//or use sahi krne kay liye hunmesha ()=> fun banaoo
let obj={
    name:"gaurav",
    age : 22,
    sayname:function(){
      console.log(this.name);
        let newfnc = ()=> {
              
            console.log(this.age);
        }
        newfnc();
        
    },
};
obj.sayname();



//abb  this keyword use hoga event mai
// this keyword humesha ussi bande kay barabar hoga jispr event listner  lagya hai
let h1 = document.createElement("h1");
h1.textContent="hey";
document.body.appendChild(h1);

 h1.addEventListener("click", function(){
    console.log(this,this.style.color="red")
    // alert("event chalu");
 });

 // now class pr this keyword;

 class Abcd{
    constructor(name){
        this.name = name ;
        //⚠️ importent note this ki value class kay andr blanc obj hogi agr hum use kisi newe keyword kay saath call kre 
        /*console.log("hello");
        this.a = 12 ;*/
        //iskay andr hum var let const use nahi krr sakte;
        //but we can use this keyword
        

    }
    greet(){
        console.log(`hello, ${this.name}`);
    }
 };
 let name1 = new Abcd("gaurav");
 name1.greet();
