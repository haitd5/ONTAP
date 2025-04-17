// 1. creater array
function createArray(size) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
        numbers.push(Math.floor(Math.random() * (60 - 10 + 1)) + 10);
    }
    return numbers;
}
// 2. hien thi array
function displayArray(numbers) {
    console.log("Mang number:", numbers);
}

// 3. ham dem so chan

function countEven(numbers) {
    let evenCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
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
    return numbers.reduce((sum, num) => sum + num, 0);
}
//
const size = 10;
const numbers = createArray(size);

displayArray(numbers);
console.log("so luong so chan: ", countEven(numbers));
console.log("So luong so nguyen to: ", countPrime(numbers));
console.log("Tong cac phan tu trong mang: ", sumArray(numbers));
