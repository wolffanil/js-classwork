const input = document.querySelector('.oneinput');
const input5 = document.querySelector('.fiveinput');

input5.addEventListener('click', function () {
    let perimetr = input.value * 4;
    let plo = input.value * input.value;
    alert("периметр: " + perimetr);
    alert("площедь: " + plo);
})






const a_2 = document.querySelector('.a_2');
const b_2 = document.querySelector('.b_2');
const res_2 = document.querySelector('.res_2');

res_2.addEventListener('click', function () {
    let perimetr = 2 * (a_2.value * 1 + b_2.value * 1);
    let plo = a_2.value * b_2.value;
    alert("периметр: " + perimetr);
    alert("площaдь: " + plo);
})









const task_3 = document.querySelector('.task_3');
const res_3 = document.querySelector('.res_3');

res_3.addEventListener('click', function () {
    const pi = 3.14;

    const plo = pi * (task_3.value * task_3.value);
    const dli = 2 * pi * task_3.value * 1;
    alert("площадь круга: " + plo);
    alert("длину окружности: " + dli);
})














const task_41 = document.querySelector('.task_41');
const task_42 = document.querySelector('.task_42');
const task_43 = document.querySelector('.task_43');

const res_4 = document.querySelector('.res_4');

res_4.addEventListener('click', function () {
    const a = task_41.value * 1;
    const b = task_42.value * 1;
    const c = task_43.value * 1;


    const p = (task_41.value * 1 + task_42.value * 1 + task_43.value * 1) / 2;
    const plo = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    if (a + b > c && b + c > a && c + a > b) {
        alert("площадь  треугольника : " + plo);
    } else {

        alert('не треугольник');

    }

})


