import React, { useState } from "react";

// const [state, setState] = useState(initState)
// Nhiem vu cua useState: quan ly trang thai trong component
// input: initState la tat ca cac kieu du lieu trong js
//      - number, string, boolean, null, underfined
//      - array, object, callback
// output: tra ve 1 mang, mang nay co 2 gia tri
//         gia tri thu nhat cung kieu du lieu ma initStatte tra ve
//         gia tri thu hai la mot ham, ham nay co nhiem vu cap nhat value moi cho gia tri thi nhat
// nguyên lý: mỗi khi thực thi hàm séttate() thi component sẽ được re-render

function UseState() {
    // Logic
    const [number, setNumber] = useState(10);
    const handleIncreament = () => {
        setNumber(number + 1);
    };
    const handleDescreament = () => {
        setNumber(number - 1);
    };

    //UI
    return (
        <div className="container">
            <h1>{number}</h1>
            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDescreament}>Descreament</button>
        </div>
    );
}

// const UseState = () => {
//     return (
//         <div>
//             <h1>Learning useState</h1>
//         </div>
//     )
// }

export default UseState;
