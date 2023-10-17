///////////// map

const arr1 = [1, 3];
const arr2 = [4, 5];
const arr3 = [6, 7];

const map = new Map();

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

//////////////

let elements = Array.from(map);

for(let [key, value] of elements) {
    console.log(`key ${key} - value ${value}`);
}

///////////////


const inputs = document.querySelectorAll('input');

const map2= new Map();

inputs.forEach((input, i) => {
    map2.set(input, i + 1);

    input.addEventListener('click', () => {
        input.value = map2.get(input);
    })

});


////////////////// Set

////1
let set = new Set([1, 2, 3, 3, 4, 4, 5]);

set.add(1);
set.add(2);
set.add(3);
set.add(3);
set.add(4);
set.add(5);
set.add(4);

console.log(set); 


//// 2

let set2 = new Set();

set2.add(1);
set2.add(2);
set2.add(3);
set2.add(2);

console.log(set2);
 /// 3

 let set3 = new Set();

set3.add(1);
set3.add(2);
set3.add(3);

console.log(set3.has(3));
console.log(set3.has(4));

/// 4

let set4 = new Set();

set4.add(1);
set4.add(2);
set4.add(7);

let count = 0;

for(let elem of set4) {
    count += elem;
}

console.log(count);

// 5

let arr6 = [...set4];

let arr7 = Array.from(set4);

/// 6

const set5 = new Set(arr7);

/// 7

let arr10 = [1,1,3, 3, 4, 5];

function deleteDub(arr) {
    let res = [...new Set(arr)];
    return res;
}

arr10 = deleteDub(arr10);

/// 8

const btn = document.querySelector('.btn');

const set10 = new Set();

const p = document.querySelectorAll('p');

p.forEach((par, i) => {
    par.addEventListener('click', () => {
        set10.add(i);
    })
});

btn.addEventListener('click', () => {
    
    p.forEach((par, i) => {
       if(set10.has(i)) {
        par.textContent += '!';
       }
    });
});