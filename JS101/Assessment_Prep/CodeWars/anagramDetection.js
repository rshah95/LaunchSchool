/*
Problem: given two string arguments, return a boolean representing whether the two arguments are anagrams
input: two strings
output: boolean

Rules:
anagrams contain the same letters and letter frequencies, order does not matter
case insensitive

Examples:
no surprises

Data Structures:


Algorithm:
convert both strings to lowercase versions
if string lengths are not the same, return false
iterate through first word
  if letter exists in second word:
    remove letter from second string 
    continue
  if letter does not exist, return false 

*/

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  string1 = string1.toLowerCase();
  string2Arr = string2.toLowerCase().split('');

  let arr = string1.split('');
  for (let idx = 0; idx < arr.length; idx++) {
    if (string2Arr.includes(string1[idx])) {
      string2Arr.splice(string2Arr.indexOf(string1[idx]), 1);
    } else return false;
  } 

  return true;
}

console.log(isAnagram("foefet", "toffee") === true);
console.log(isAnagram("Buckethead", "DeathCubeK") === true,);
console.log(isAnagram("Twoo", "WooT") === true);

console.log(isAnagram("dumble", "bumble") === false);
console.log(isAnagram("ound", "round") === false);
console.log(isAnagram("apple", "pale") === false);



function isAnagram2(str1, str2) {
  function loadObject(string) {
    let obj = {};
    string.toLowerCase().split('').forEach(char => {
      if (obj[char] === undefined) {
        obj[char] = 1;
      } else obj[char] += 1;
    });
  
    return obj;
  }
  
  
  if (str1.length !== str2.length) return false;
  let str1Count = loadObject(str1);
  let str2Count = loadObject(str2);

  for (let letter in str1Count) {
    if (str1Count[letter ] !== str2Count[letter]) return false;
  }

  return true;
}

console.log('\n');
console.log(isAnagram2("Twoo", "WooT") === true);
console.log(isAnagram2("dumble", "bumble") === false);


