//////////1
let elems = document.querySelectorAll('p');
console.log(elems[0]);
console.log(elems[1]);
console.log(elems[2]);
console.log(elems[3]);
console.log(elems[4]);

console.log(elems.length);

for (let elem of elems) {
	console.log(elem);
}

//////////////// 2

// console.log(elems.map(el => el.i + 1 ));
// console.log(elems.join(" "));
// console.log(elems.slice(1, 3)); // будет ошибка

//////////////// 3

let test = [
	[1, 2, 3],
	{a: 1, b: 2, c: 3},
	[3, 4, 5],
	{x: 1, y: 2, z: 3},
];

for (let elem of test) {
	console.log(Array.isArray(elem));
}

///////////////////// 4


let test1 = [
	[1, 2, 3],
	{a: 1, b: 2, c: 3},
	[3, 4, 5],
	{x: 1, y: 2, z: 3},
];
let arr1 = [];

for (let elem of test1) {
	arr1.push(elem);
}
let arr2 = [...test1];
let arr3 = Array.from(test1);
console.log(arr1);
console.log(arr2);
console.log(arr3);

////////////////// 5

const div = document.querySelector('.div');

console.log(div.children); /// HTMLCollection

/////////////////// 6

const div2 = document.querySelector('.div2');

console.log(div2.childNodes.length);

const span = document.createElement('span');

span.textContent = 'New elem';

div2.appendChild(span);

console.log(div2.childNodes.length);

