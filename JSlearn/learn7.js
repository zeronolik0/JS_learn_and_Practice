//пользовательская функция
function greetNikita() {
	console.log("Hello, Nikita!");
}
greetNikita();

//область видимости переменных
function greetNikita1() {
	let greeting = "Hello, Nikita!";
	console.log(greeting);
}
greetNikita1();
//console.log(greeting); //ReferenceError: greeting is not defined

let userName1 = "Nikita";
function greetNikita2() {
	let greeting = "Hello, " + userName1;
	console.log(greeting);
}
greetNikita2();

function greetNikita3() {
	userName1 = "Aleksandra";
	let greeting = "Hello, " + userName1;
	console.log(greeting);
}
console.log(userName1);
greetNikita3();
console.log(userName1);

function greetUser(userName) {
	userName = userName + "!";
	let greeting = "Hello, " + userName;
	console.log(greeting);
}
let userName = "Elena";
greetUser(userName);
console.log(userName);

//аргументы функции, значения по умолчанию
function greetUser2(userName, text = "Привет, ") {
	userName = userName + "!";
	let greeting = text + userName;
	console.log(greeting);
}
greetUser2(userName);
greetUser2(userName, "Hi, ");

//function greetingUser2(userName, oneMoreFunction()) {}

//наследие прошлого
function showMessage(from, text) {
	if (text === undefined) {
		text = `текст не добавлен`;
	}
	console.log( from + ": " + text);
}

function showMessage(from, text) {
	text = text || `текст не добавлен`;

}

//возврат значений
function howReturnWorks() {
	return 8;
	return 9;
}
console.log(howReturnWorks());

function getSum(a, b) {
	sum = a + b;
	return sum;
}
console.log(getSum(5, 8));

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Вход запрещен');
	}
}
console.log(checkAge(23));

//function expression
let greeting = function () {
	console.log("Добрый день!");
}

console.log(greeting);

let func = greeting;
console.log(func);
/*
//callback
function askForm(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

function Ok() {
	alert("Это да.");
}

function cancel() {
	alert("Это нет.");
}
askForm("Что вы выберите?", Ok, cancel);
*/

//стрелочные функции
let numbers = [6, 187, 66, 4, 67, 30, 18];
console.log(numbers.sort((a, b) => a - b));

let sum1 = (a, b) => a + b;

let sum2 = function(a, b) {
	return a + b;
};

console.log(sum1(6, 5));
console.log(sum2(6, 5));

let mult = c => c * 2;
console.log(mult(9));

let greeting1 = () => console.log("Добрый день!");
greeting1();

let sum3 = (a, b) => {
	let result = a + b;
	return result;
};
console.log(sum3(9, 11));