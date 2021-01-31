let num = 266219;


//переводим в string
num = '266219';

//задаем переменную для начала умножения при первом проходе цикла 
let result = 1;

for(let i=0; i < num.length; i++){
  result = result * num[i];
}
console.log(result);

//возводим результат в степень 
let raising = result ** 3;
console.log(raising);

// Вывести на экран первые 2 цифры полученного числа
console.log(raising.toString().substr(0,2));
