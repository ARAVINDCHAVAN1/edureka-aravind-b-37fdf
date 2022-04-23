

function handleNameChange(){
    const name = document.getElementById("inputName").value;
    console.log(name);
    document.getElementById("lblNameField").innerText = name;
}
function handleNameChange1(){
    const username = document.getElementById("inputUserName").value;
    console.log(username);
    document.getElementById("lblUsernameField").innerText = username;
}


function handleCountryChange(){
    const country = document.getElementsByClassName("form-select")[0];
    console.log(country);
    const labelValue = country.options[country.selectedIndex].text;
    document.getElementById("ddlCountryLabel").innerText=labelValue;
}


// function handleGenderChange(){
//     const genderElements = document.getElementsByName("gender");
//     const isMale = genderElements[0].checked;
//     const isFeMale = genderElements[1].checked;
//     document.getElementById("lblGenderField").innerText=isMale ? "Male" : "FeMale";
// }

function handleGenderChange(){
    // get both elements by using getElementsByName
    const genderElements = document.getElementsByName("gender");
    console.log(genderElements);
    const isMale = genderElements[0].checked;
    const isFeMale = genderElements[1].checked;
    document.getElementById("lblGenderField").innerText=isMale ? "Male" : "Female";
}

function handleButtonClick(){
   document.getElementById("signupForm").style.backgroundColor="lightgreen";
    alert("form is submited");
}

function handlePasswordChange(){
    document.getElementById("error").innerText="";
const Password = document.getElementById("inputPassword").value;

var error="";
const length = Password.length;
console.log(Password);

if(length<6 || length>10){
    error = "password should contain 6 to 10 charecters";
}
else if(!/\d/.test(Password)){

    error = "password should contain a number";
}
console.log(error);
document.getElementById("error").innerText=error;

}