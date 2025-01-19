function double(a) {
    return a * 2;
}

console.log(double(3))

//

function transform(a, b) {
    return b(a)
}

console.log(transform(10, double))

//

function transformToObjects(a) {
    return a.map(b => ({ val: b }))
}

console.log(transformToObjects([1, 2, 3]))

//

const doubleandSquareandSum = a => a.reduce((sum, b) => sum + (b * 2) ** 2, 0)
console.log(doubleandSquareandSum([2, 4, 5]))
//

const compact = a => a.filter((b) => !!b) //or Boolean

console.log((compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])))
console.log(compact([false, NaN, 'e' * 23]))