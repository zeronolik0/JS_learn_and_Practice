let minutes = 46;
if(!(minutes >= 0 && minutes <= 59)) {
	console.log("Введите значение в диапазоне от 0 до 59!");
}
else if (minutes >= 0 && minutes <= 14) {
	console.log(`${minutes} минут - это первая четверть часа.`);
}
else if (minutes >= 15 && minutes <= 30) {
	console.log(`${minutes} минут - это вторая четверть часа.`);
}
else if (minutes >= 31 && minutes <= 45) {
	console.log(`${minutes} минут - это третья четверть часа.`);
}
else if (minutes >= 46 && minutes <= 59) {
	console.log(`${minutes} минут - это четвертая четверть часа.`);
}


let result = "";
let month = 2;
if (!(Number.isInteger(month))) {
	console.log("Введите целое значение от 1 до 12!");
}
else if (month > 0 && month <= 12) {
	if (month < 3 || month === 12) {
	result = "Зима";
	}
	else if (month >= 3 && month < 6) {
	result = "Весна";
	}
	else if (month >= 6 && month < 9) {
	result = "Лето";
	}
	else if (month >= 9 && month < 12) {
	result = "Осень";
	}
}
else {
	result = "Введите целое значение от 1 до 12! <br>";
}
console.log(result);


let num = 5;
result = "";
if (num % 2 === 0) {
	result = "Возвожу в квадрат: " + Math.pow(num, 2);
}
else {
	result = "Возвожу в третью степень: " + Math.pow(num, 3);
}
console.log(result);