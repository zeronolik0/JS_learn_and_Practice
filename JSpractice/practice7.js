function isPalindrome(str_entry){
	let result = "";
	let str = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	let count = 0;

	if(str === "") {
		return result = "Строка пустая";
	}

	if (str.length === 1) {
		return result = `Строка ${str} является палиндромом`;
	} else {
		if ((str.length) % 2 === 0) {
			count = (str.length) / 2;
		} else {
			count = (str.length - 1) / 2;
		}
	}
	for (var i = 0; i < count; i++) {
		if (str[i] != str.slice(-1-i)[0]) {
			return result = `Строка ${str} не является палиндромом`;
		}
	}
	return result = `Строка ${str} является палиндромом`;
}
console.log(isPalindrome('level'));
console.log(isPalindrome('topot'));
console.log(isPalindrome('that'));


function isPrime(num) {
	if (num === 1) {
		return false;
	}
	else if(num === 2) {
		return true;
	} else {
		for(let i = 2; i <= num/2; i++) {
			if(num % i === 0) {
				return false;
			}
		}
		return true;
	}
}
console.log(isPrime(61));


function countAge(dateBirth) {
	let diff_ms = Date.now() - dateBirth.getTime();
	let age_dt = new Date(diff_ms);

	return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(countAge(new Date(1994, 9, 17)));

var isWeekend = function(date){
	let dt = new Date(date);
	if(dt.getDay() == 6 || dt.getDay() == 0)
		{
			return "выходной";
		}
	else
		{
			return "не выходной";
		}
}
console.log(isWeekend('Jun 25, 2025'));
console.log(isWeekend('Jun 29, 2025'));