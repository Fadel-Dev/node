const { default: validator } = require("validator");

const teste=validator.isEmail("diopfadel@gmail.com");
console.log(teste);

const testTab = [
    "diopfadel06@gmail.com",
    "diopfadel0@gmail.com",
    "diopfadel06gmail.com",
    "sss@gmail.com",
    "dpfadel06@gmail.com"
    
]

for(let i = 0; i<testTab.length; i++) {
   let ex= validator.isEmail(testTab[i]);
   console.log(ex);
}