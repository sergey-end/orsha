"use strict";

const number = +prompt('Введите число');
if (number > 0) { 
    alert('Число положительное');
} else if (number < 0) {
    alert('Число отрицательное');
} else {
    alert('Число равно 0');
}