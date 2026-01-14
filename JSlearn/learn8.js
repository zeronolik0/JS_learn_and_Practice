//обьект для хранения и работы с датой и временем
let newDate = new Date(); //при вызове конструктора без аргументов мы получаем текущие дату и время

newDate = new Date(0); // 0 соответствует 01.01.1970

//timestamp - численное представление даты
newDate = new Date(24 * 3600 * 1000); //new Date(milliseconds)
newDate = new Date(-24 * 3600 * 1000);
newDate = new Date("2025-06-10") //new Date(datestring)


//методы
newDate = new Date();
let year = newDate.getFullYear(); //не использовать getyear!
let month = newDate.getMonth();
let day = newDate.getDay();
let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();
let milliseconds = newDate.getMilliseconds();
console.log(newDate.getTime());

newDate.setFullYear(2025);

newDate.setMonth(11); // от 0 до 11
newDate.setDate(31);
newDate.setHours(18);
newDate.setMinutes(29);
newDate.setSeconds(51)
newDate.setMilliseconds(545);
//newDate.setTime(3452849);

console.log(newDate);

let date = new Date(2015, 1, 25);
console.log(date.getDate());
date.setDate(date.getDate() + 2);
console.log(date.getDate());

let currentTimeStamp = new Date();
let myBirthDayTimeStamp = new Date("2025-09-22");

const SECS_PER_DAY = 60 * 60 * 24 * 1000;

let daysToNextBirthDay = parseInt((myBirthDayTimeStamp - currentTimeStamp)/SECS_PER_DAY)
console.log(daysToNextBirthDay);

let ms = Date.parse('2025-12-31T13:51:50.417-07:00');
newDate = new Date("2025-12-31T13:51:50.417-07:00");
console.log(ms);
console.log(newDate.getTime());

let user = {
	name: "Nikita",
	age: 23,
	toString() {
		return `{name: "${this.name}", age: ${this.age}}`;
	}
};
console.log(user);

let userNew = {
	name: "Nikita",
	age: 23,
	isAdmin: false,
	courses: ['html', 'css', 'js']
};

let json = JSON.stringify(userNew);

console.log(typeof json); // мы получили строку
console.log(json);

console.log(JSON.stringify(1) );
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));

let userNew1 = {
	sayHi() { //будет пропущено
	console.log("Hello");
	},
	something: undefined // как и это - пропущено
};
console.log(JSON.stringify(userNew1));

//вложенные обьекты
let meetup = {
	title: "Conference",
	room: {
		number: 23,
		participants: ["nikita", "mike"],
		date: new Date('2026-01-04')
	},
	toJSON() {
		return this.title;
	}
};

console.log( JSON.stringify(meetup) );

// //let json = JSON.stringify(value, [replacer, space])
// //let value = JSON.parse(str, [reviver]);

console.log(JSON.parse('{"name": "Nikita", "age": 23, "toString": "[Function: toString]"}'));

let str = '{"title": "Conference", "date":"2017-11-30T12:00:00.000Z"}';
// //let meetupNew = JSON.parse(str);
// //console.log(meetupNew.date.getDate());

let meetupNew = JSON.parse(str, function(key, value) {
	if (key == 'date') return new Date(value);
	return value;
});
console.log(meetupNew.date.getDate());



