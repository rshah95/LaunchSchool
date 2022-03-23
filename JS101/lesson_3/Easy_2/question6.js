let flintstones = ["Fred", "Wilma"];
flintstones = flintstones.concat(["Barney", "Betty"]);
flintstones = flintstones.concat(["Bambam", "Pebbles"]);

console.log(flintstones); 

let nestedFlintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

nestedFlintstones = [].concat(...nestedFlintstones)

console.log(nestedFlintstones);