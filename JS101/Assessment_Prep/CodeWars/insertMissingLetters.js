/*
 You have to create a method that takes in a string and outputs the same string processed in a particular way.

 The method should insert ONLY after the first occurence of each character of the input string
 all the alphabet letters that:

 -are NOT in the original string
 -come after the letter of the string you are processing

 Each added letter should be in uppercase,
 the letters of the original string will always be in lowercase.

 Example:

 input: "holly"

 missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

 output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

 You don't need to validate input,
 the input string will always contain a certain amount of lowercase letters
 (min 1 / max 50).

console.log(insertMissingLetters("holly") === "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ")
console.log(insertMissingLetters("hello") === "hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ")
console.log(insertMissingLetters("fred") === "fGHIJKLMNOPQSTUVWXYZrSTUVWXYZeGHIJKLMNOPQSTUVWXYZdGHIJKLMNOPQSTUVWXYZ")
console.log(insertMissingLetters("z") === "z")
console.log(insertMissingLetters("efgh") === "eIJKLMNOPQRSTUVWXYZfIJKLMNOPQRSTUVWXYZgIJKLMNOPQRSTUVWXYZhIJKLMNOPQRSTUVWXYZ")


Problem: given a string, alter the string so that each letter in the string is followed by uppercaseletters that come after the letter in the string and are not included in the rest of the original stgring

input: string
output: string

Rules:
each added letter should be in uppercase
letters of the original string are in lowercase

Algorithm:
convert string to array
iterate through each character
  iterate through letters that come after character
    if that character is not included in the string
      add that character to the array next to the original character


Iterate through character after letter
  get unicode value for character
    iterate from unicode valur to unicode value for Z

*/