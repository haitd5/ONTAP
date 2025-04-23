// Scope = pham vi
// 1. global = toan cuc
// 2. Local = cuc bo
// 3. Block code = doan code

// giong nhau: dung de khai bao, khoi tao mot bien
// khac nhau
// 1. var:
//      + hoisting
//      + re-use: vung nho
// 2. let
//      + khong co hoisting
//      + tao moi vung nho
// 3. const
//      + khong co hoisting
//      + dong bang vung nho

var var_global = 10; // global

function func() {
    let var_local = 20; // local
}

{
    {
        const pi = 3.14; // block cod
    }
}
