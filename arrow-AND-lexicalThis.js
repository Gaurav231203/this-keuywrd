
//=============================================================
//here we are talking about arrow function and lexical this 
//==============================================================

//EXAMPLE of arrow function

let obj ={
    name:"gaurav",
    retur: function () {
        let newfnc = ()=>{
            console.dir(this.name);
        }
        newfnc();
    }
}
obj.retur();