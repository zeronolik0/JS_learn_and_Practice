let darthVader = "luke, I am your father";
darthVader = darthVader.charAt(0).toUpperCase() + darthVader.slice(1);
console.log(darthVader);


let str1 = "AbcdEfg";
let str2 = "abCDEFg";
console.log(str1 === str2);
console.log(str1.toUpperCase() === str2.toUpperCase());


darthVader = darthVader.slice(darthVader.indexOf(" ") + 1, darthVader.indexOf("your")) + darthVader.slice(darthVader.indexOf(" father"));
console.log(darthVader);


let years = [2000, 2001, 2002, 2003, 2004, 2005];
let result = [];
for(let i = 0; i < years.length; i++) {
	if ((years[i] % 4 === 0 && years[i] % 100 !== 0) || (years[i] % 100 === 0 && years[i] % 400 ===0)) {
		result.push(years[i]);
	}
}
console.log(result);


let numbers = [6, 187, 66, 4, 67, 30, 18];
console.log(numbers.sort()); //(a, b) => a - b
console.log(numbers);

let numbers1 = [6, 187, 66, 4, 67, 30, 18];
console.log(numbers.reverse());