// 1. creater array
function createArray(size) {
    // const numbers = [];
    let numbers = new Array(size);
    let min = 10;
    let max = 60;
    for (let i = 0; i < size; i++) {
        // numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
        numbers[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return numbers;
}
// 2. hien thi array
function displayArray(numbers) {
    console.log("Mang number:", numbers);
    // for (let item of numbers) {
    //     console.log(item);
    // }
}

// 3. ham dem so chan

function countEven(numbers) {
    let evenCount = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % 2 === 0) {
    //         evenCount++;
    //     }
    // }
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
        i++;
    }
    return evenCount;
}

// 4. ham dem so nguyen to

function isPrime(n) {
    if (n < 2) return false; // Các số nhỏ hơn 2 không phải là số nguyên tố
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Kiểm tra từ 2 đến căn bậc 2 của n
        if (n % i === 0) return false; // Nếu n chia hết cho i, n không phải là số nguyên tố
    }
    return true; // Nếu không chia hết cho bất kỳ số nào, n là số nguyên tố
}

function countPrime(numbers) {
    let primeCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            // Gọi hàm isPrime để kiểm tra từng phần tử
            primeCount++;
        }
    }
    return primeCount;
}

// 5. tinh tong cac phan tu

function sumArray(numbers) {
    // return numbers.reduce((sum, num) => sum + num, 0);
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    console.log(`Total of value in array is: ${total}`);
}
//
const size = 10;
const numbers = createArray(size);

displayArray(numbers);
console.log("so luong so chan: ", countEven(numbers));
sumArray(numbers);
// console.log("So luong so nguyen to: ", countPrime(numbers));
// console.log("Tong cac phan tu trong mang: ", sumArray(numbers));
