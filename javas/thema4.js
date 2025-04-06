



// console.dir(Boolean);

const name = "";

console.log(Boolean(name));

let age;

console.log(age);

console.log(Boolean(age));

const cantity = null;

console.log(Boolean(cantity));

console.log(Boolean(1));

const number = Number ("abe")

console.log(Boolean(number));

console.log(Boolean(false));

// правило && повертає перше falsy значення або останнє truthy значення, якщо всі операнди truthy. 😊

console.log(10 && 3);

console.log(10 && 20 && 0 && 33);

console.log(0 && 3);   // 0 (бо 0 — falsy, далі не перевіряє)
console.log(10 && 0);  // 0 (бо 0 — falsy)
console.log(5 && 8);   // 8 (обидва truthy, повертає останнє)
console.log(null && 10); // null (бо null — falsy)
console.log("" && "hello"); // "" (бо "" — falsy)



// логічний оператор або || він повертає перше значення Tru або якщо всі 
// умови призводять до False ровертає останій False



console.log(10 || 0);

console.log(!null || 0);

console.log(10 && 9 || null && 2);

console.log(null || undefined || false || "JavaScript" || 0);





