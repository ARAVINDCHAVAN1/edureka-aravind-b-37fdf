let i = 1;
while(i<=10){
    console.log(i);
    i=i+1;
}

const str = "My name is dheeraja";
console.log(str.length);
 const index = str.length-1;

let reversedstring="";
for(let i=index; i>=0; i--){
    reversedstring=reversedstring.concat(str[i]);
}
console.log(reversedstring);