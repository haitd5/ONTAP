// callback sử dụng để xử lý các tác vụ bất đồng bộ
// callback
// 1. callback phải là một function
// 2. callback phải được truyền vào 1 hàm khác qua agrument
// 3. callback phải được thực thi

// const callback = function(n1, n2) {
//     console.log(n1 + n2);
// }
// function useCallback(params) {
//     params(10, 20);
// }

// useCallback(callback);

// function useCallback(params) {
//     params(10, 20);
// }

//callback
//anonymous (vodanh)
// useCallback(function (n1, n2) {
//     console.log(n1 + n2);
// });

// function process(callback) {
//     callback(4, 2);
// }
// process(function (n1, n2) {
//     console.log(n1 + n2);
// });
// process(function (n1, n2) {
//     console.log(n1 * n2);
// });
// process(function (n1, n2) {
//     console.log(n1 - n2);
// });

// let number = [4, 5, 6, 7];
// let result = number.map(function (n) {
//     return n ** 2;
// });
// let result = number.map((n) => n ** 2);
// console.log(result);

setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
        }, 4 * 1000);
    }, 2 * 1000);
}, 5 * 1000);

// callback hell
