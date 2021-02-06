"use strict";

const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function() {
  let randomNumber = getRandomInt(100);
  console.log("randomNumber: ", randomNumber);
  let numberAttempts = 10;
  const game = function() {
    numberAttempts--;
    if (numberAttempts < 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        start();
      } else {
        alert("До свидания");
        return;
      }
    } else {
      const num = prompt(
        '"Угадай число от 1 до 100" (Для выхода оставьте строку пустой)'
      );
      if (num === null) {
        alert("До свидания");
        return;
      }
      if (isNum(num)) {
        const realNum = +num;
        if (realNum > randomNumber) {
          alert(`Загаданное число меньше, осталось попыток: ${numberAttempts}`);
          game();
        } else if (realNum < randomNumber) {
          alert(`Загаданное число больше, осталось попыток: ${numberAttempts}`);
          game();
        } else {
          if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
            start();
          } else {
            alert("До свидания");
            return;
          }
        }
      } else {
        alert("Введите число");
        game();
      }
    }
  };
  console.dir(game);
  game();
};

start();
