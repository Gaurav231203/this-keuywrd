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

 function abcd(){
    console.log(this.name);
 }
//abcd();is ko call krne pr this ki value window hai 
abcd.call(obj);//call use krr kay window object mai convert hoo gaya
