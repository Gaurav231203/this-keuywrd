//================================MANUAL-BINDING=============================================
//Manual binding ka matlab hai — JS ko khud se, manually bata dena ke "is function ke andar this exactly ye honi chahiye" — bina us function ko object ke through call kiye.
// we will learn about  all , apply,bind 

/*============================================================================
                  {call binding }
 
so call binding is actually that ki hum function ko call krte samay ste krr sakte hai uski this ki value
===============================================================================*/ 
//call eg
 let obj ={      //to hum yee chahte hai ki isami to this kin value hai wo window na rh krr obj ho jaye
    name:"gaurav",
 };

 function abcd(){ //humesha fucntion  call hoga
    console.log(this.name);
 }
//abcd();is ko call krne pr this ki value window hai 
abcd.call(obj); //call mai humesha objet pass hoga ya firr jise objet banan hai wo pass hoga //call use krr kay window object mai convert hoo gaya

//===================================================================================================================
                   //Apply bindidng
    //apply bindiang is only used for sending two  parameter
    //ismaai argument array kay andr pass hota hai

//===================================================================================================================
 let object ={     
    name:"gaurav",
    age: 22,
 };

 function abc( a,b,c){ 
    console.log(this,a,b,c);
 }

abc.apply(object,[1,2,3]); // ye 2 parameter accept krta hai or ek array kay andr hota hai
