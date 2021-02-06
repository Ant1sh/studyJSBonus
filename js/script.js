'use strict';

/*
1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
*/

const arr = ['34567', '456789', '987654', '234567', '654321', '765432', '945678'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

/*
2) Вывести в столбик все простые числа от 1 до 100
*/

let prime = document.getElementById("primeNum");
primeNumber: for (var i = 2; i <= 100; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) continue primeNumber;
  }
  console.log("простое :" + i + " " + " Делители этого числа: 1 и " + i);
  prime.innerHTML +=
    "простое: " + i + " " + " Делители этого числа: 1 и " + i + "<br>";
}