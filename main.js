let arr = [];
for (let i = 20; i <= 30; i = i + 0.5) {
    arr.push(i);
};
console.log(`1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….) = [${arr.join(', ')}]`);

console.log(`2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.`);
let dollar = 27;
let hryvnya;
let i1 = 10;
while (i1 <= 1000) {
    hryvnya = dollar * i1;
    console.log(`${i1} dollar = ${hryvnya} hryvnya`);
    i1++
};

let arr1 = [];
let N = 42;
for (let i2 = 1; i2 <= 100; i2++) {
if (Math.sqrt(N) > i2) {
    arr1.push(i2);
}
};
console.log(`3. Дане ціле число ${N}. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N = [${arr1.join(', ')}]`);

console.log(`4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).`);
let N1 = 10;
let res;
let whil = true;
let i3 = 3;
if (!N1) {
    res = "некоректне значення";
}
else if (N1 === 1 || N1 === 2 || N1 === 3) {
    res = 'просте число';
}
else if (N1 % 2 == 0) {
    res = 'непросте число';
}
else {
    while (whil && i3 < N1) {
        if (N1 % i3 == 0) {
            res = 'непросте число';
            whil = false;
        }
        else {
            res = 'просте число';
        }
        i3++;
    }
}
console.log(`${N1} - ${res}`);

console.log(`5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).`);
let N2 = 9;
let res1;
let whil1 = true;
let count = 1;
if (!N2) {
    res1 = "некоректне значення";
}
else if (N2 < 3) {
    res1 = "не можна одержати";
}
else {
    while (whil1 && 3 ** count <= N2) {
        if (N2 === 3 ** count) {
            res1 = "можна одержати";
            whil1 = false;
        }
        else {
            res1 = "не можна одержати";
        }
        count++;
    }
}

console.log(`${N2} - ${res1}`);

