let hiddenNumber = 6;
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