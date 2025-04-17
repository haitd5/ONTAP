// cấu trúc rẻ nhánh
// 2 nhóm
// nhóm 1
// if() {}
// if() {} else {}
// nhóm 2
// switch (key) {
//     case value_1: {
//         break;
//     }
//     case value_2: {
//         break;
//     }
//     case value_3: {
//         break;
//     }
//     default:
//         break;
// }

// xếp loại
// averageScore
// 9 <= averageScore <= 10 -> Xuất sắc
// 8 <= averageScore < 9 -> Giỏi
// 7 <= averageScore < 8 -> Khá
// 5 <= averageScore < 7 -> Trung bình
// 0 <= averageScore < 5 -> Yếu

// let averageScore = -8.5;
// if (averageScore < 0 || averageScore > 10) {
//     console.log("Invalid Score");
// } else if (averageScore >= 9 && averageScore <= 10) {
//     console.log("Xuất sắc");
// } else if (averageScore >= 8 && averageScore < 9) {
//     console.log("Gioir");
// } else if (averageScore >= 7 && averageScore < 8) {
//     console.log("Khas");
// } else if (averageScore >= 5 && averageScore < 7) {
//     console.log("Trung binh");
// } else {
//     console.log("YEU");
// }

// switch case

// switch (true) {
//     case averageScore >= 9 && averageScore <= 10: {
//         console.log("Xuất sắc");
//         break;
//     }
//     case averageScore >= 8 && averageScore < 9: {
//         console.log("Gioir");
//         break;
//     }
//     case averageScore >= 7 && averageScore < 8: {
//         console.log("Khas");
//         break;
//     }
//     case averageScore >= 5 && averageScore < 7: {
//         console.log("Trung binh");
//         break;
//     }
//     case averageScore > 0 && averageScore < 5: {
//         console.log("YEU");
//         break;
//     }

//     default:
//         console.log("Invalid Score");
//         break;
// }

// so sánh bằng toán tử ===

// 5 == '5' -> true => so sanhs value 1 với value 2
// 5 === '5' -> false => so sánh value 1 với value 2 và datatype 1 == datatype 2
