// truthy và falsy => convert các kiểu dữ liệu về boolean (T, F)
// trường hợp convert false
// false    -> false
// 0        -> false
// empty    -> false
// null     -> false
// undefinded -> false
// NaN      -> false

let fullName = "Hai";
// nếu fullnam = '' -> no name
// ngược lại thì -> fullname

console.log(fullName || "No name");
