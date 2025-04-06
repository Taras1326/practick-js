

//         // задача 1


// const stars = 3; // Змінити для тесту

// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log("Такої кількості зірок немає");
//         price = null;
// }

// if (price !== null) {
//     console.log(`Вартість номера: ${price}$`);
// }







//             // задача 2

// const option = 2; // Змінити для тесту (1, 2, 3 або інше значення)

// let message;

// switch (option) {
//     case 1:
//         message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
//         break;
//     case 2:
//         message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//         break;
//     case 3:
//         message = "Посилка буде відправлена сьогодні";
//         break;
//     default:
//         message = "Вам передзвонить менеджер";
// }

// console.log(message);



//     //    задача 3


//     //Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".


let leng = "такоі мови не існує";

const languageSelection = prompt("Введіть одне з чотирьох значень: 'ua', 'en', 'ru', 'fr'").trim().toLocaleLowerCase();

switch (languageSelection) {
    case "ua":
        leng = "украінська"
        break;
    case "en":
        leng = "англійська"
        break;
    case  "ru":
        leng = "російська"
        break;
    case  "fr":
        leng = "французька"
        break;
    // default: 
    //     leng = "такоі мови не існує";
}


console.log(leng);



