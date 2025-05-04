


                                                  // split





// const friends = ["nazar", "ivanD", "taras", "vadim", "oleksandr", "miroslav", "ivanM", "nikita"]

// console.log(friends);

// const findIndex = friends.indexOf("taras")

// console.log(findIndex); // 2

// const copyFriends = friends.slice();

// copyFriends.splice(2, 1); // видалення елементів. Починається з якого indexa та скільки елементів видаляємо.

// console.log(friends);

// console.log(copyFriends);


// const friends = ["nazar", "ivanD", "taras", "vadim", "oleksandr", "miroslav", "ivanM", "nikita"];

// console.log(friends);

// friends.splice(4, 0, "Yurii", "Dima") // додавання елементів в масив 1 з якого indexu 2 невидаляючи нічого 3) які елементи додати.

// console.log(friends);



// const friends = ["nazar", "ivanD", "taras", "vadim", "oleksandr", "miroslav", "ivanM", "nikita"];

// console.log(friends);

// friends.splice(0, 1, "baletskii") // заміна елемента з якого indexa  можна заміньвати 

// console.log(friends);

const friends = ["nazar", "ivanD", "taras", "vadim", "oleksandr", "miroslav", "ivanM", "nikita"];

const returnElement = friends.splice(2, 1)

console.log(returnElement);

