



                     //  1 варіант

// // створити масив гравців, додати до кожного гравця N, де n це порядковий номер.
// // Наприклад "Polly" => "Polly-1"


// let playerss = ["Polly", "Max", "Luna", "Jack"];

// // Додаємо номер до кожного гравця
// for (let i = 0; i < playerss.length; i++) {
//   playerss[i] = playerss[i] + "-" + (i + 1);
// }

// console.log(players);
// // Вивід: ["Polly-1", "Max-2", "Luna-3", "Jack-4"]




//                        // 2 варіант



// let players = ["Polly", "Max", "Luna", "Jack"];

// let updatedPlayers = players.map((name, index) => `${name}-${index + 1}`);

// console.log(updatedPlayers);
// // Вивід: ["Polly-1", "Max-2", "Luna-3", "Jack-4"]



            // задача 1

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90,];

// cart[10] = 100;
// // cart[cart.length] = 100;

// console.log(cart);




let sum = 0 ; 

for (let i = 0; i < cart.length; i+= 1)  {
    if (cart[i] % 2 ===0) {
        continue;

    }
    sum += cart[i];
}

console.log(sum);

