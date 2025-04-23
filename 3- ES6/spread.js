// spread = ...

// pass by value = truyen tham tri => cac kieu du lieu nguyen thuy number, string, boolean...
// pass by reference = truyen tham chieu => array, object, function

// let name_1 = "Khoa";
// let name_2 = name_1;

// console.log(name_1);
// console.log(name_2);

// let jobsKhoa = ["Nau com", "Don com", "Lau nha"];

// let jobsSon = [...jobsKhoa, "Rua bat"];
// jobsSon[2] = ["Quet nha"];

// console.log(jobsKhoa);
// console.log(jobsSon);

// const khoa_info = {
//     name: "Khoa",
//     age: 18,
//     gender: true,
// };
// const son_info = {
//     ...khoa_info,
//     name: "Son",
//     email: "son@gmail.com",
// };

// console.log(son_info);
// console.log(khoa_info);

//clourse

function parent() {
    var count = 1;
    function getCount() {
        return count;
    }
    function setCount(newValue) {
        count = newValue;
    }
    return {
        getCount,
        setCount,
    };
}

let func = parent();
console.log(func.getCount());
func.setCount(10);
console.log(func.getCount());
