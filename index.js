function number(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}
number(4, 7);

let unique = [];
let example1 = [1, 2, 3, 4, 6, 6, 7, 5, 9]; // показывает одинаковые цифры с двух массивов
let example2 = [0, 4, 3, 4, 5, 2, 7, 3, 8];
for (let i = 0; i < example1.length; i++) {
  if (example2.includes(example1[i])) {
    unique.push(example1[i]);
  }
}
console.log(unique);

let unique1 = [];
let example3 = [1, 2, 3, 4, 6, 6, 7, 5, 9]; // показывает те цифры которые нету во втором массиве
let example4 = [0, 4, 3, 4, 5, 2, 7, 3, 8];
for (let i = 0; i < example3.length; i++) {
  if (example4.includes(example3[i]) === false) {
    unique1.push(example3[i]);
  }
}
console.log(unique1);

let unique2 = [];
let example5 = [1, 2, 3, 4, 6, 6, 7, 5, 9]; 
let example6 = [0, 4, 3, 4, 5, 2, 7, 3, 8];
for (let i = 0; i < example5.length; i++) {
  unique2.push(example5[i]);
}
for (let i = 0; i < example6.length; i++) {
  unique2.push(example6[i]);
}

let dosya = {
  height: 1.50,
  weight: "tonna",
  age: 15,
  status: "tanks",
  live: "karakol",
}
  dosya.sayGoodBye = function() {
    console.log("bye");
  }
console.log(dosya);
dosya.weight = "54";
console.log(dosya);
dosya.sayGoodBye();

let calc = {
  number: 0,
  add: function(num){
    this.number = this.number + num
  },
  subtract: function(num){
    this.number = this.number - num
  },
  clear: function(num){
    this.number = 0;
  },
  togglePositive: function(num){
    this.number = -this.number;
  },
  show: function() {
    console.log(this.number);
  },
  get: function() {
    return this.number;
  },
}

calc.add(5);
calc.show();
calc.add(10);
calc.show();
calc.subtract(2);
calc.show();
calc.clear();
calc.show();
calc.togglePositive();
calc.show();

let exampleA = calc.get();

console.log("homework")

// 1. Напишите функцию, которая выводит ваше имя и фамилию.
// // functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov

// 2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// // functionName(height, radius) // Объем конуса равен ...

// 3. Напишите функцию, которая принимает строку и возвращает ее длину.
// // functionName(" ... ") // Длина строки равна ...

// 4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// // functionName(num) // Число - четное || Число - нечетное

// 5. Напишите функцию, которая возвращает квадрат числа.
// // functionName(num) // Квадрат этого числа равен

// 6. Напишите функцию, которая возвращает корень числа.
// // functionName(num) // Корень этого числа равен

// 7. Напишите функцию, которая возвращает периметр пятиугольника.
// // functionName(a, b, c, d, e) // Периметр - ...

// 8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// // 0 3 6 9 ...

// 9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// // ...

// 10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// // 1 4 9 ...

// 11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// // ... 

// 12. Напишите цикл, который печатает четные числа от 0 до 20.
// // 0 2 4

// 13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// // 1 3 ...

// 14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.

// 15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.

// 17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]

// 18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]

// 19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// // Hello Erjan Hello Ermek ... 

// 20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// // 4 9 16 25

// 21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 
// // cat - true
// // parrot - false

console.log("Задание номер 1");

function MyName(surname, name) {
  let nameResult = `My name is ${surname}${name}`;
  console.log(nameResult);
}
MyName("Jarmamatov ", "Bekbolsun");

console.log("Задание номер 2");

function printVolume(radius, height) {
  let Volumeresult = `Радиус объёема равенt: ` + radius * height;
  console.log(Volumeresult);
}
printVolume(4, 8);

console.log("Задание номер 3");

function getLength(str) {
  console.log(`Строка длинны равна : ${str.length}`);
}
getLength("sjkdvhdb");