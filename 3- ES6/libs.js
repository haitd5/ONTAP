function sum(n1, n2) {
    console.log(n1 + n2);
}

function times(n1, n2) {
    console.log(n1 * n2);
}
function minus(n1, n2) {
    console.log(n1 - n2);
}

const data = ["Java", "React", "NET"];

export { times, minus, data };

export default sum;

// default ko bat buoc
// neu export default thi chi mot lan
