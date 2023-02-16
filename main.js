let speedKm = 36, speedM = 20;
console.log(`${speedKm} км/ч соотвествует ${speedKm * 1000 / 3600} м/с\n${speedM} м/с соответсвует ${speedM / 1000 * 3600} км/ч`);

let a = 2, b = 2, c = 3;
if (a + b > c && a + c > b && b + c > a) {
    let P = a + b + c, S = Math.sqrt(P/2 * (P/2 - a) * (P/2 - b) * (P/2 - c));
    console.log(`Треугольник существует\nпериметр = ${P}\nплощадь = ${S}\nсоотношение = ${P / S}`);
}
else {
    console.log("Треугольника не существует")
}

let numberFromUser = prompt("Введите число от 0 до 10");
while (numberFromUser < 0 || numberFromUser > 10 || !parseInt(numberFromUser)) {
    numberFromUser = prompt('Введите число от 0 до 10');
}
for (let i = 0; i < numberFromUser; i++) {
    if (i % 5 === 0 ) console.log(`${i} fizz buzz`)
    else if (i % 2) console.log(`${i} buzz`)
    else console.log(`${i} fizz`)
}

for (let i = 0; i < 13; i++) {
    if (i === 12 && i != 0) {
        console.log('||');
    }
    else if (i % 2 === 0) {
        console.log('*'.repeat(i));
    }
    else {
        console.log('#'.repeat(i));
    }
}

let hiddenNumber = Math.floor(Math.random() * 10);
numberFromUser = +prompt('Загаданно число от 0 до 10. Попробуй угадать');
while (numberFromUser !== hiddenNumber) {
    while (!numberFromUser) {
        numberFromUser = +prompt("Это не число. Введите число от 0 до 10");
    }
    if (numberFromUser > hiddenNumber) {
        numberFromUser = +prompt("Загаданное число меньше");
    }
    else if (numberFromUser < hiddenNumber) {
        numberFromUser = +prompt("Загаданное число больше");
    }
}
console.log(`Вы угадали. Загаданное число ${hiddenNumber}`);

let numberFirst = 26, numberSecond = 2, numberThird = 3;
if (numberFirst % numberSecond === 0 && numberFirst % numberThird === 0) {
    console.log(`n = ${numberFirst}, x = ${numberSecond}, y = ${numberThird} => true`);
}
else {
    console.log(`n = ${numberFirst}, x = ${numberSecond}, y = ${numberThird} => false`);
}


let numberMonth = +prompt("Введите номер месяца");
while (!numberMonth || +numberMonth < 1 || +numberMonth > 12) {
    numberMonth = +prompt("Введите число от 1 до 12");
}
switch (+numberMonth) {
    case 1:
    case 2:
    case 3:
        console.log(`месяц ${numberMonth} => 1 квартал`);
        break;
    case 4:
    case 5:
    case 6:
        console.log(`месяц ${numberMonth} => 2 квартал`);
        break;
    case 7:
    case 8:
    case 9:
        console.log(`месяц ${numberMonth} => 3 квартал`);
        break;
    case 10:
    case 11:
    case 12:
        console.log(`месяц ${numberMonth} => 4 квартал`);
        break;
}