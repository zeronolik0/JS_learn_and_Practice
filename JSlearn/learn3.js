//Инструкция if, блок else
let age = 23;

if(age < 18) {
	console.log("Не совершеннолетний");
}
else {
	console.log("Совершеннолетний");
}

//0, "", null, undefined, NaN - falsy

if(0) { 
	//условие никогда не выполнится
}
if(1) { 
	//условие будет выполняться всегда 
}

let bool = true;
if(bool) {
	
}

//несколько условий
let login = "Nikita", pass = "123";
let loginFromDB = "Nikita", passwordFromDB = "123";

if (login === loginFromDB && pass === passwordFromDB) {
	console.log("Добро пожаловать!");
}
else if (login === loginFromDB) {
	comsole.log("Проверьте пароль");
}
else console.log("Пройдите регистрацию");

//тернарный (он же условный) оператор ? 
let access;
if (age < 18) {
	access = false;
} else {
	access = true;
} 

let result = (age > 18) ? true : false;
console.log(result);

//let result = условие ? значение1 : значение2;

//аналогичная запись
let result1 = age > 18;
console.log(result1);

let result2 = (login === loginFromDB && pass === passwordFromDB) ? console.log("Добро пожаловать!") 
(login === loginFromDB) ? console.log("Проверьте пароль"):
"Пройдите регистрацию";

//логические операторы
    && конъюнкция / логическое И / true И true = true
    || дизъюнкция / логическое ИЛИ / true ИЛИ false = true
    ! инверсия / логичесакое НЕ / !true == false
    !! / двойная инверсия / !!true == true

console.log( true || true ); //true
console.log( false || true ); //true
console.log( true || false ); //true
console.log( false || false ); //false

console.log( 1 || 1); //1
console.log( 0 || 1); //1
console.log( 1 || 0); //1
console.log( 0 || 0); //0

if (1 || 0) {
	console.log("Правда!");
}

let hour = 9;

if (hour < 10 || hour > 18) {
	console.log( `Офис закрыт.` );
}

//ИЛИ «||» находит первое истинное значение 
console.log( null || 0 || 1); //1

console.log( true && true ); //true
console.log( false && true ); //false
console.log( true && false ); //false
console.log( false && false ); //false

if (login === loginFromDB && pass === passwordFromDB) {
	console.log("Добро пожаловать!");
}
else if (login === loginFromDB) {
	console.log("Проверьте пароль");
}
else console.log("Пройдите регистрацию");

console.log( 5 && 1 && null); //null

console.log( !true ); //false
console.log( !0); //true

console.log( !!"non-empty-string" ); //true
console.log( !!null ); //false

//Конструкция switch

let num = 3, season;

switch(num) {
	case 1:
	season = "Winter";
	break;
	case 2:
	season = "Spring";
	break;
	case 3:
	season = "Summer";
	break;
	case 4:
	season = "Fall";
	break;
	default:
	season = "Значение не найдено";
}
console.log(season);


