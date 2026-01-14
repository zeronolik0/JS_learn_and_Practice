var singleVariable;
let firstVariable, secondVariable, thirdVariable;
const invariable = 10;

var a;
console.log(a);
a = 44;
console.log(a);

let b;
console.log(b);
b = 46;
console.log(b);

const INVARIABLE_NUMBER = 365;

let stringVariable = 'This is string';
const arrayVariable = ['one', 'two', 'three'];
var numberVariable = 101;

let firstNumber = 23, secondNumber = 48;

let d = 52;

if (true) {
	let e = 54;
	console.log(e);
}

let userName = 'Антон';
if (true) {
	let userName = 'Георгий';
	console.log("Вывод из условного оператора: " + userName);
}
console.log("Вывод вне условного оператора: " + userName);

function userFunction() {
	var userNameInFunction = "Albert";
	console.log(userNameInFunction);
}
console.log(userFunction())

let message = "hello";
console.log("Тип данных в переменной message: " + typeof(message));
message = 12345;
console.log("Тип данных в переменной message: " + typeof(message));