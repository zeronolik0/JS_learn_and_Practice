for (let i = 1; i <= 100; i++)
{
	if (i % 3 === 0 && i % 5 === 0) {
	console.log(`Число ${i} кратно 3 и 5`);
	}
	else if (i % 3 === 0) {
	console.log(`Число ${i} кратно 3`);
	}
	else if (i % 5 === 0) {
	console.log(`Число ${i} кратно 5`);
	}
	else {
	console.log(i);
	}
}


for (let i = 1; i < 10; ++i) {
	for (let j = 0; j < 10; ++j) {
		for (let k = 0; k < 10; ++k) {
			let pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
			let plus = (i * 100 + j * 10 + k);
			if (pow == plus) {
				console.log(pow);
			}
		}
	}
}


var firstNumber = 2154;
var secondNumber = 458;
var gcd;

while (firstNumber != secondNumber) {
	if (firstNumber > secondNumber) {
		firstNumber = firstNumber - secondNumber;
	}
	else {
		secondNumber = secondNumber - firstNumber;
	}
}
gcd = firstNumber;
console.log(gcd);