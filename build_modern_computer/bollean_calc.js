// class bollean_calc {
//     constructor () {

//     }
// }

function Nand(a, b) {
    const values = [0, 1]
    if (!values.includes(a) || !values.includes(b)){
        throw new Error(new Error)
    }
    if ( a === 1 && b === 1) {
        return 0;
    } else return 1
}

function notToNand(value) {
    return Nand(value, value)
}

function andToNand(first, second) {
    return notToNand(Nand(first, second))
}


function orTONand(first, second) {
    return notToNand(andToNand(notToNand(first), notToNand(second)))
}

console.log(orTONand(0, 0))
console.log(orTONand(1, 0))
console.log(orTONand(0, 1))
console.log(orTONand(1, 1))