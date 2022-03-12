function testdeclaration(){

    if(true);{
        
    var x=10;
    let y=20;
        console.log("inside if block")
        console.log(x);
        console.log(y);
    }
    console.log("outside if block")
    console.log(x);
    console.log(y);
}
testdeclaration();