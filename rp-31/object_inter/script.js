////////////////// 1

// const set = new Set([1, 2, 3]);

// for(const item of set ) {
//     console.log(item);
// }

// //////////////// 2

// let arr = [1, 2, 3, 4, 5];

// let func = arr[Symbol.iterator];

// console.log(func); 

// /////////// 3

// console.log("task 3");
// const nodeList = document.querySelectorAll('div');

// const iterator = nodeList[Symbol.iterator]();

// let nextNode = iterator.next();

// while(!nextNode.done) {
//     console.log(nextNode.value);
//      nextNode = iterator.next();

// }

// ///////// 4
// console.log("task 4");

// function *func() {
//     yield 5;
//     yield 4;
//     yield 3;
//     yield 2;
// 	yield 1;
// }
// let iter = func();

// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());

// ///////////// 5

// function *func2() {
// 	for (let i = 5; i >= 0; i--) {
// 		yield i;
// 	}
// }

// let iter2 = func2();

// console.log(iter2.next()); 
// console.log(iter2.next()); 
// console.log(iter2.next()); 
// console.log(iter2.next()); 
// console.log(iter2.next());

// ////////////////// 6

// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
//     d: 4,
//     e: 5,
// 	[Symbol.iterator]: function *(){
// 		for (let key in this){
// 			yield this[key];
// 		}
// 	}
// };

// for (let elem of obj) {
// 	console.log(elem); 
// }

// ////////////////// 7

// const set4 = new Set([1, 2, 3, 5 ,4]);

// let iter5 = set4.values();
// for (let elem of iter5) {
// 	console.log(elem); 
// }

// ///////////////// 8

// console.log("task 8");

// iter5 = set4.keys();
// for (let elem of iter5) {
// 	console.log(elem); 
// }

// ////////////////// 9


// let map = new Map;

// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);


// let iter8 = map.entries();

// for (let [key, value] of iter8) {
// 	console.log(key);   
// 	console.log(value); 
// }

// /////////////// 10

// let num = 12345;
// let arr11 = [...String(num)].map(Number).reduce((acc, ff) => acc + ff, 0);
// console.log(arr11);

//////////////// 11

const table = document.getElementById('table');
const rows = table.getElementsByTagName('tr');

for(let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td');
    for(let j = 0; j < cells.length; j++) {
        cells[j].innerText = `${i}-${j}`;
    }
}

//////////// 12

const inputs = document.querySelectorAll('input');


for (let [key, {id, value}] of inputs.entries()){
	console.log(key, id, value);
}
