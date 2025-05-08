// set vs array
// unique (duy nhat)
// khong dung index
// co phan biet chua hoa, chu thuong

let animals = new Set(["Ga", "Vit"]);
animals.add("Bo");
animals.add("Ga");
console.log(animals.values());

// for (let animal of animals.values()) {
//     console.log(animal);
// }

animals.forEach(function (value) {
    console.log(value);
});
