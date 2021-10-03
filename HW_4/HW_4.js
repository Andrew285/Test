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
console.log(makeCamelCase(["USER", 0, 15.5, "nAme", "AGE", 5, {name: "John", age: 15}, "data"])); //userNameAgeData

//Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масиву
// у якому кожен елемент масиву є літерою англійського алфавіту відповідний конкретному елементу масива
// (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати
// [d, c, v, k]

let alphabet = "abcdefghijklmnopqrstuvwxyz";

function makeLetters(arrNum) {
	let arrLetters = [];
	arrNum.map((number) => {
		if (number > 0 && number <= 26) {
			arrLetters.push(alphabet[number-1]);
		}
	}, []);
	return arrLetters;
}

console.log(makeLetters([1, 4, 8, 15, 23])); //['a', 'd', 'h', 'o', 'w']

//Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) 
//і повертає новий об’єкт у який містить тільки числа більші рівні 0.

function makePositiveNum(obj) {
	let arrEntries = Object.entries(obj);
	let newObj = {};
	arrEntries.map((entry) => {
		if (typeof entry[1] === "number" && entry[1] > 0) {
			newObj[entry[0]] = entry[1];
		}
	}, []);
		
	return newObj;
}

console.log(makePositiveNum({a: 22, b: -11.35, c: 41.2, d: "hello", e: 95})); //{a: 22, c: 41.2, e: 95}