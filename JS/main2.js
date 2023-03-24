function convertSpeed(speed, toWhat) {
    if (toWhat === 'toMS') {
        return `convertSpeed(36, 'toMS') -> '${speed * 1000 / 3600}' м/с`;
    }
    return `convertSpeed(36, 'toKMH') -> '${speed / 1000 * 3600}' км/ч`;
}
console.log(convertSpeed(36, 'toMS'));
console.log(convertSpeed(36, 'toKMH'));



function absValue(number){
    if (number.split(' ').join('')[0] == '-') {
        return +number.split(' ').join('').substring(1);
    }
    return number;
}

let numberFromUser = prompt("Введите число для модуля");
while (isNaN(numberFromUser)) {
    numberFromUser = prompt("Вы ввели не число. Попробуйте снова");
}

console.log(`absValue(${numberFromUser}) -> ${absValue(numberFromUser)}`);



let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван",
};
const properties = Object.keys(student);
console.log(`Список свойств: ${properties[0]}, ${properties[1]}, ${properties[2]}`);
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

//рандом в диапазоне

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`randomNumber(0, 10) -> ${randomNumber(0, 10)}`);
console.log(`randomNumber(-10, 10) -> ${randomNumber(-10, 10)}`);


function sampleArray(array, count) {
    let newArray = [];
    for (let i = 0; i < count; i++) {
        newArray.push(array[randomNumber(0, array.length - 1)]);
    }
    return newArray;
}

console.log(`sampleArray([1,2,3,4], 2) -> ${sampleArray([1,2,3,4], 2)}`);
console.log(`sampleArray([1,2,3,4], 3) -> ${sampleArray([1,2,3,4], 3)}`);