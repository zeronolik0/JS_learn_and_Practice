//обьявление строк
let single = 'одинарные кавычки';
let double = "двойные кавычки";
let backticks = `шаблонные литералы`;

console.log(single, double, backticks);

let a = 10, b = 5;
let expressionBackticks = `Fifteen is ${(a + b)} and not ${(2 * a + b)}.`
let expressionQuotes = "Fifteen is " + (a + b) + " and not " + (2 * a + b) + ".";
console.log(expressionBackticks);
console.log(expressionQuotes);

let userList = `Users online:
* Nikita
* Aleksandra
* Anna
`;

console.log(userList);

/* let userList = "Users online:
* Alice"; */

//специальные символы
let userListSpecial = "Users online:\n * Nikita"; //символ экранирования
console.log(userListSpecial);
console.log("\u{1F60D}");

//длина строки
let str = "Length of this string is ";
console.log(`Length of this string is ${str.length}`); //это свойство, а не функция

//доступ к символу
let greeting = "Hello!";
console.log(greeting[0]); //первый символ имеет индекс 0
console.log(greeting.charAt(0)); //метод

console.log(greeting[10]); // undefined
console.log(greeting.charAt(10)); // ""

for(let char of greeting) {
	console.log(char);
}

greeting[1] = 'a'; //не сработает
console.log(greeting);

//методы
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting[0].toUpperCase());

darthVader = "Luke, I am your father";
console.log(darthVader.indexOf("Luke"));
console.log(darthVader.indexOf("mother"));
console.log(darthVader.indexOf("a"));
console.log(darthVader.indexOf("a", 9));

console.log("Работает цикл: ");
let pos = -1;
while ((pos = darthVader.indexOf("a", pos + 1)) != -1) {
	console.log(pos);
}
console.log(darthVader.indexOf("u"));
console.log(darthVader.lastIndexOf("u"));

console.log(darthVader.includes("a"));
console.log(darthVader.includes("a", 9));

console.log(darthVader.startsWith("Luk"));
console.log(darthVader.endsWith("father"));

console.log(darthVader.slice(6));
console.log(darthVader.slice(6, 10));
console.log(darthVader.slice(-6));

console.log(darthVader.substring(11));
console.log(darthVader.substring(11, 16));

console.log(darthVader.substr(11));
console.log(darthVader.substr(11, 4));

//сравнение строк
console.log(darthVader.codePointAt(0));
console.log(String.fromCodePoint(76));

console.log('Österreich'.localeCompare('Zealand'));
console.log('Zealand'.localeCompare('Zealand'));
console.log('Zealand'.localeCompare('Österreich'));

//обьявление массивов
let arr1 = new Array();
let arr2 = [];

let users = ["Nikita", "Aleksandra", "Anna"];
console.log(users);
console.log(users[0]);
users[1] = "Vladimir";
console.log(users);
users[3] = "Maxim"
console.log(users);
console.log(users.length);
users[4] = 5;
console.log(users); 

//очередь и стек
users.pop(); // удаляем последний элемент
console.log(users);
users.push("Ivan"); // добавляем элемент в конец
console.log(users);

users.shift(); // удаляем первый элемент
console.log(users);
users.unshift("Elena");
console.log(users);

//работа с циклами
for(let i = 0; i < users.legth; i++) {
	console.log(users[i]);
}

for(let user of users) {
	console.log(user);
}

//удаление элементов
users.length = 0;
console.log(users);

//многомерные массивы
let matrix = [
	[10, 9, 8],
	[7, 6, 5],
	[4, 3, 2]
]

console.log(matrix);
console.log(matrix[0][1]);