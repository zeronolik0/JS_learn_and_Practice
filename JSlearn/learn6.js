//обьекты
let obj1 = new Object(); //конструктор обьекта 
let obj2 = {}; //литерал обьекта

let autorizedUser = {
	name: "Nikita",
	login: "Lead",
	year: 2002,
	age: 23,
	phone: "8(888)555-55-55",
	"has friends": true
};

console.log(autorizedUser);
console.log(autorizedUser.name);
console.log(autorizedUser.login);
//console.log(autorizedUser.has friends); //ошибка
console.log(autorizedUser["has friends"]);

autorizedUser.isMale = true;
console.log(autorizedUser);

delete autorizedUser.age;
console.log(autorizedUser);

const userFullName = {
	firstName: "Nikita",
	surname: "Nik"
};

userFullName.firstName = "Mike";
console.log(userFullName);

let fruit = "pineApples";
let market = {
	[fruit]: 5
};
console.log(market["pineApples"]);
console.log(market.pineApples);

console.log("pineApples" in market);
console.log("apples" in market);

console.log("Перебор значений обьектов: ");
for (let key in autorizedUser) {
	console.log(key, autorizedUser[key]);
}

//map
let map = new Map();

map.set("1", "stringAsKey");
map.set(1, "numAsKey");
map.set(true, "boolAsKey");

//методы
console.log(map);
console.log(map.get(1));
console.log(map.has(1));
console.log(map.size);
console.log(map.delete(1));
console.log(map.has(1));
console.log(map);
map.clear();

//перебор значений
let clients = new Map([
	["Nikita", 2002],
	["Aleksandra", 2005],
	["Elena", 1977]
]);
console.log(clients);

for (let name of clients.keys()) {
	console.log(name);
}

for (let year of clients.values()) {
	console.log(year);
}

for (let value of clients) {
	console.log(value);
}

clients.forEach((value, key, map) => {
	console.log(`${key}: ${value}`);
});

//set
let set = new Set();

let nikita = { name: "Nikita" };
let aleksandra = { name: "Aleksandra" };
let elena = { name: "Elena" };

set.add(nikita);
set.add(aleksandra);
set.add(elena);
set.add(nikita);
set.add(elena);

console.log(set.size);
console.log(set);

for (let user of set) {
	console.log(user.name); // Nikita (потом Aleksandra и Elena)
}

