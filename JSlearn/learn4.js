let i = 1;

//цикл while
while(i <= 100){ //while(true)
	console.log(i);
	i = i +1;
	//i++;альтернативно(i+1);
}

/*
while(condition) {
	//тело цикла
}
while (i) == while (i != 0)
*/

let str = "Nikita"; //A - 0, n - 1, n - 2, a - 3
let nLetter = 0;
i = 0;
while (i < str.length){
	if (str[i] === "n") {
	nLetter = nLetter + 1;
	}
	i = i + 1;
}
console.log(`В слове ${str} букв n ${nLetter}`);

let div = 2;
let num = 18;
let flag = 1;

while (div <= num/2) {
	if (num % div === 0) {
	console.log(`Число ${num} не является простым`);
	flag = 0;
	break;
	}
	div = div + 1;
}
if (flag === 1){
	console.log(`Число ${num} является простым`);
}

//цикл do ... while
i = 1;
do {
	console.log(i);
	i++;
} while (i <= 100);

/*
do {
	//тело цикла
} while (condition);
*/

//цикл for 

for (i = 1; i <= 100; i++) { //выведет 0, затем 1, затем 2
	console.log(i);
}

/*
for (начало; условие; шаг) {
	// ... тело цикла ...
}
*/

i = 1; //Мы уже имеем объявленную i с присвоенным значением
for (; i <= 10; i++) { //Нет необходимости в "начале"
	console.log(i);
}

i = 1;
for (; i <= 5;) {
	console.log(i++);
}

/*for (;;) { // бесконечный цикл
	
}*/

str = "Alex";
let newStr = "";
let letter = "";
for(i = 0; i < str.length; i++) {
	letter = str[str.length - i - 1];
	newStr = newStr + letter;
}
console.log(newStr);

//директива continue

for (let j = 0; j < 15; j++) {
	if (j % 2 == 0) continue; //если true, пропустить оставшуюся часть тела цикла
	console.log(j);
}