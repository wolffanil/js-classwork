////////////// JSON

////// 1

let arr = '[1, 2, 3, "a", "b", "c"]';

/// 2

let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;

let obj = JSON.parse(json);
let sum2 = 0;
obj = Object.values(obj);

obj.forEach(item => {
    item.forEach(item => {
        sum2 += item;
    });
});

console.log(sum2);

/// 3

let json3 = '["user1","user2","user3","user4","user5"]';

let obj4 = JSON.parse(json3);
obj4[1] = 'user10';
console.log(obj4);

////////////////////// localStorage

////////////1

const saveToLS = (num1, num2, num3) => {
    localStorage.setItem('key1', String(num1));
    localStorage.setItem('key2', String(num2));
    localStorage.setItem('key3', String(num3));

}

const getNums = () => {
    let arr = [];

    arr.push(localStorage.getItem('key1'));
    arr.push(localStorage.getItem('key2'));
    arr.push(localStorage.getItem('key3'));

    let sum = arr.reduce((acc, cor) => acc + Number(cor), 0);
    console.log(sum);

}

saveToLS(1, 2, 3);
getNums();

/////////////////// 2

// if(localStorage.getItem('time') === null) {

//     let now = Date.now();
    
//     localStorage.setItem('time', now);
// } else {
//     alert(localStorage.getItem('time'));
// }


////////// 3-4
const g = localStorage.getItem('visit');
if(g === null) {
    localStorage.setItem('visit', 1);
} else {

    let visit = localStorage.getItem('visit');
    visit = Number(visit);
    if(visit >= 10) {
        localStorage.setItem('visit', 1);

    } else {

        visit += 1;
        localStorage.setItem('visit', visit);
        console.log(localStorage.getItem('visit'));
    }

}

////////// 5

// localStorage.clear();

////////////// 6

const btn = document.querySelector('.task_6');

btn.addEventListener('click', () => {
    alert(localStorage.length);
});

/////////////// 7

let key = localStorage.key(2);
let val = localStorage.getItem(key);

console.log(val);

///////////////// 8

const btn1 = document.querySelector('.task_8');

btn1.addEventListener('click', () => {
    console.log('task 8');
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let val = localStorage.getItem(key);
        
        console.log(val);
    }
    

});

//////////////////// 9

const btn6 = document.querySelector('.task_9');

btn6.addEventListener('click', () => {
    console.log('task 9');
   
    console.log(Object.keys(localStorage));

});

////////////////////// 10
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn10 = document.querySelector('.task_10');

btn10.addEventListener('click', () => {
    let arr = [];

    arr.push(input1.value);
    arr.push(input2.value);

    localStorage.setItem('arr', JSON.stringify(arr));
});


/////////////////// 11

const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');
const input5 = document.querySelector('.input5');

const btn11 = document.querySelector('.task_11');


let users = [
	{
		surn: 'surn1',
		name: 'name1',
		age: 31,
	},
	{
		surn: 'surn2',
		name: 'name2',
		age: 32,
	},
	{
		surn: 'surn',
		name: 'name3',
		age: 33,
	},
];
if(localStorage.getItem('users') === null) {

    localStorage.setItem('users', JSON.stringify(users));
}

btn11.addEventListener('click', () => {

    let newUser = {
        surn: input3.value,
		name: input4.value,
		age: Number(input5.value),
    }

    let users2 = localStorage.getItem('users');
    users2 = JSON.parse(users2);

    users2.push(newUser);
    localStorage.setItem('users', JSON.stringify(users2));

});






