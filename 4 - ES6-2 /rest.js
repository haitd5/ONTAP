// rest = phan con lai
// parameter vs agrument

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
function sum(prefix, ...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return `${prefix} ${total}`;
}

console.log(sum("Tong la: ", 3, 4, 5, 6));
console.log(sum("Total is: ", 3, 4, 5, 6));
