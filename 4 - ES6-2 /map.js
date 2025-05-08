// let khoa = {
//     name: "khoa",
//     age: 20,
//     gender: "male",
// };

// console.log(khoa.name);
// console.log(khoa["name"]);

let khoa = new Map([
    ["name", "khoa"],
    ["age", 20],
    ["gender", "male"],
]);
khoa.set({ level: "A" }, "Language");

// console.log(khoa.keys());
// console.log(khoa.values());
console.log(khoa.entries());
