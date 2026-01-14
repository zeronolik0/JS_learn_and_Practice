//строковое преобразование 

let bool = true;
let number = 654;

console.log("Тип данных переменной bool: " + typeof bool); //boolean
console.log("Тип данных переменной number: " + typeof number); //number

bool = String(bool); //преобразовываем логичсекий тип в строковый
number = String(number); //преобразовываем числовой тип в строковый  
console.log("Тип данных переменной bool: " + typeof bool); //String
console.log("Тип данных переменной number: " + typeof number); //String

let str = "2 + 5";
console.log("2 + 5");
console.log(1 + "2 + 5");

//численное преобразование

console.log("10" / "5");
console.log("10" - "5");
console.log("10" * "5");
console.log("2" + "5");

let strNum = "639";
let boolNum = false;

console.log("Тип данных переменной strNum: " + typeof strNum); //String
console.log("Тип данных переменной boolNum: " + typeof boolNum); //bool

strNum = Number(strNum);
boolNum = Number(boolNum);
console.log("Тип данных переменной strNum: " + typeof strNum); //number
console.log("Тип данных переменной boolNum: " + typeof boolNum); //number
console.log(boolNum); //0

let someFieldInForm = Number("Непереводимая игра слов");
console.log("Тип данных переменной someFieldInForm: " + typeof someFieldInForm); //number
console.log(someFieldInForm);

let undf = undefined;
let nl = null;
let trueVar = true;
let falseVar = false;
let emptyString = "";

undf = Number(undf);
nl = Number(nl);
trueVar = Number(trueVar);
falseVar = Number(falseVar);
emptyString = Number(emptyString);

console.log(undf, nl, trueVar, falseVar, emptyString);

//Логическое преобразование 

let undff = undefined;
let nll = null;
let numVar = 0;
let emptyStringg = "";

undff = Boolean(undff);
nll = Boolean(nll);
numVar = Boolean(numVar);
emptyStringg = Boolean(emptyStringg);

console.log(undff, nll, numVar, emptyStringg);

let strBool = "Привет!";
let strNull = "0";
let numBool = 564;

strBool = Boolean(strBool);
strNull = Boolean(strNull);
numBool = Boolean(numBool);

console.log(strBool, numBool, strNull);

//Базовые операторы

//Бинарные

let sum = 5 + 8;
let sub = 6 - 4;
let div = 28 / 2;
let mult = 5 * 9;
let mode = 42 % 9; //вычисление остатка от деления
let pow = 7 ** 2; //возведение в степень
let pow2 = 25 ** (1/2);

console.log(sum, sub, div, mult, mode, pow, pow2);

//Унарные 

let neg = -5;
let sumNew = neg + 7; //-5 + 7 = 2
let pos = +6; //6
console.log(sumNew, pos);

let strToNum = +"5";
console.log(typeof(strToNum));

//Сложение строк

let strFive = "5";
let strSev = "7";

console.log(strFive + strSev); //57
console.log(+strFive + +strSev); //12

let numF = 9;
let strE = "10";

console.log(numF + strE); //910
console.log(5 + 1 + "18"); //618

console.log("10" / "5");
console.log("10" - "5");
console.log("10" * "5");

//Присваивание 

let a = 6;
let b = 9;
let c = 3 - (a = b + 1);

console.log(a, c); // 10, -7

//Сокращенная запись
let x = 18;
x += 2; //x = x + 2
x /= 2; // x = x / 2

console.log(x); //10

x = 2;
x *= 6 + 3;

console.log(x);

//Инкремент/декремент
//Префиксная форма

let count = 2;
console.log(++count); //3
console.log(--count); //2

//Постфиксная форма

count = 1;
console.log(count++); //1
console.log(count++); //2*/

//Операторы сравнения

let g = 5;
let h = 6;
console.log(g < h);
console.log(g > h);
console.log(g <= h);
console.log(g >= h);
console.log(g == h);
console.log(g != h);

//Сравнение строк

console.log("A" < "Z"); //true
console.log("A" < "Я"); //true
console.log("A" < "a"); //true

//Сравнение разных типов

console.log("5" > 3); //true
console.log("03" < 1); //false
console.log(false == 1); //false
console.log(false != 0); //false
console.log(true == 1); //true
console.log(false == ""); //true

//Строгое сравнение 

console.log(false === ""); //false
console.log(false === 0); //false
console.log(false !== 1); //true

//null и undefined

console.log(null === undefined); //false
console.log(null == undefined); //true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
