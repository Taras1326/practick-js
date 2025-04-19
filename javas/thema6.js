

// напиши скрипт який підрахує сумму всіх парних чисел, які входять в діапазон між 0 та 50

let min = 0; 

let max = 50;
let count = 0;

for (let i = min; i <= max; i+=1) {
    if (i % 2 === 0) {
        count += i;
    }
}

console.log(count);






//Напиши скрипт, який імітує авторизацію адміністратора в панелі управління. Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:
// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'
// Після всіх перевірок вивести в alert значення змінної message.

const ADMIN_PASSWORD = "12345"; // Тут можна задати справжній пароль
let messages;

const userInput = prompt("Введіть пароль адміністратора:");


 if (userInput === null) {
    messages = "Скасовано користувачем!";
 } else if (userInput === ADMIN_PASSWORD) {
    messages = "Ласкаво просимо!";
 } else {
    messages = "Доступ заборонений, невірний пароль!";
 }
alert(messages);







const credits = 23580;
const pricePerPazzle = 3000;

let message;
let totalPrice;

const input = prompt("Скільки пазлів ви хочете купити?");

if (input === null) {
  message = "Скасовано користувачем!";
} else {
  const quantity = Number(input);
  totalPrice = quantity * pricePerPazzle;

  if (totalPrice > credits) {
    message = "Недостатньо коштів на рахунку!";
  } else {
    const remainingCredits = credits - totalPrice;
    message = Ви купили ${quantity} пазлів, на рахунку залишилося ${remainingCredits} кредитів.;
  }
}

console.log(message);