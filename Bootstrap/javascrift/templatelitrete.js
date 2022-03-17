// Template Literal in JS

// Allows you to embed js variables in string.
// Provided in ES6.

const name = "Dheeraj";
const role = "Trainer";
const location = "India";
const exp = "9 years";

// My name is Dheeraj and I am a Trainer. I stay in India and i have 9 years of experience.

const sentence = "My name is "+name+"and I am a "+role+". I stay in "+location+" and i have "+exp+"of experience";
console.log(sentence);

const sentenceUsingTemplateLiteral = 
    `My name is ${name} and I am a ${role}. I stay in ${location} and I have ${exp} of experience`;