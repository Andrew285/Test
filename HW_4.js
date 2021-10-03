"use strict"

//Створити функцію яка б отримувала параметром масив з 
//елементів різних типів (строки, масиви, числа, об’єкти і т.д),
// на виході має повернути строку у camel case (приклад строки у camel case:
// thisIsExampleOfTheCamelCase), яка б поєднувала в собі всі елементи масиву які є строками.

function makeCamelCase(arr){
	let newString = "";
	arr.map((value) => {
		if (typeof value === "string") {
			if (newString.length == 0) {
				newString += value[0].toLowerCase();
			}
			else {
				newString += value[0].toUpperCase();
			}
			for (let i = 1; i < value.length; i++) {
				newString += value[i].toLowerCase();
			}
		}
	}, []);
	return newString;
}
console.log(makeCamelCase(["USER", 0, 15.5, "nAme", "AGE", 5, {name: "John", age: 15}, "data"]));

//Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масиву
// у якому кожен елемент масиву є літерою англійського алфавіту відповідний конкретному елементу масива
// (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати
// [d, c, v, k]


//Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) 
//і повертає новий об’єкт у який містить тільки числа більші рівні 0.

// function makePositiveNum(obj) {
// 	let arrValues = Object.values(obj);
// 	let arrKeys = Object.keys(obj);
// 	let newObj = {};
// 	for (let i = 0; i < arrValues.length; i++) {
// 		if (typeof arrValues[i] === "number" && arrValues[i] > 0) {
// 			newObj[arrKeys[i]] = arrValues[i];
// 		}
// 	}
// 	return newObj;
// }

// console.log(makePositiveNum({a: 22, b: -11.35, c: 41.2, d: "hello", e: 95}));


function makePositiveNum(obj) {
	let arrValues = Object.values(obj);
	let arrKeys = Object.keys(obj);
	let newObj = {};
	for (let i = 0; i < arrValues.length; i++) {
		if (typeof arrValues[i] === "number" && arrValues[i] > 0) {
			newObj[arrKeys[i]] = arrValues[i];
		}
	}
	return newObj;
}

console.log(makePositiveNum({a: 22, b: -11.35, c: 41.2, d: "hello", e: 95}));