let arr = [];
for (let i = 20; i <= 30; i = i + 0.5) {
    arr.push(i);
};
console.log(`1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….) = [${arr.join(', ')}]`);

console.log(`2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.`);
let dollar = 27;
let hryvnya;
let i1 = 10;
while (i1 <= 100) {
    hryvnya = dollar * i1;
    console.log(`${i1} dollar = ${hryvnya} hryvnya`);
    i1 = i1 + 10
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
let N1 = +prompt("4. Введіть число");
let resultTask4;
let whileTask4 = true;
let i3 = 3;
if (!N1) {
    resultTask4 = "некоректне значення";
}
else if (N1 === 1 || N1 === 2 || N1 === 3) {
    resultTask4 = 'просте число';
}
else if (N1 % 2 == 0) {
    resultTask4 = 'непросте число';
}
else {
    while (whileTask4 && i3 < N1) {
        if (N1 % i3 == 0) {
            resultTask4 = 'непросте число';
            whileTask4 = false;
        }
        else {
            resultTask4 = 'просте число';
        }
        i3++;
    }
}
alert(`${N1} - ${resultTask4}`);
console.log(`${N1} - ${resultTask4}`);

console.log(`5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).`);
let N2 = +prompt("5. Введіть число");
let resultTask5;
let whileTask5 = true;
let countTask5 = 1;
if (!N2) {
    resultTask5 = "некоректне значення";
}
else if (N2 < 3) {
    resultTask5 = "не можна одержати";
}
else {
    while (whileTask5 && 3 ** countTask5 <= N2) {
        if (N2 === 3 ** countTask5) {
            resultTask5 = "можна одержати";
            whileTask5 = false;
        }
        else {
            resultTask5 = "не можна одержати";
        }
        countTask5++;
    }
}

alert(`${N2} - ${resultTask5}`);
console.log(`${N2} - ${resultTask5}`);
