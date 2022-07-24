let str = "Hello! Learning Strings in JavaScript Javascript";
// String Methods
// 1. slice(start_indx,end_indx);
let str1 = str.slice(7,15);
console.log(str1);

// 2. substring(start_indx,end_indx);
let str2 = str.substring(7,15);
console.log(str2);

// 3. replace
let str3 = str.replace("Learning","Let's Learn");
console.log(str3);

// 4. indexOf
console.log(str.indexOf("in"));

// 5. lastindexOf
console.log(str.lastIndexOf("JavaScript"));

// 6. Uppercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 7. includes
console.log(str.includes('JavaScript'));

// 8. concat
str = "Hello";
str1 = "World";
str2 = "Strings";

str = str.concat(str1,str2);
console.log(str);