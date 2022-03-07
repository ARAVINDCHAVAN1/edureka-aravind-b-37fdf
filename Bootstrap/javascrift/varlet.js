function testdeclaration(){
if(true){
    var x=20;
    let y=20;
    console.log("inside if block")
    console.log(x); //10
    console.log(y);//20
}
console.log("outside if block")
console.log(x); //20
console.log(y); //
}

textdeclaration()