let item = ["Egg", 0.25, 12];

let [name, price, quantity] = item;

console.log(name, price, quantity)

////

function mergeObjects(a, b) {
    let merged = {...a, ...b};
    return merged
}

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))

//Bonus

function mergeObjectsEx(...objects) {
    let result = {};
    for (const obj of objects) {
        Object.assign(result, obj);
      }
    return result;
}

console.log(mergeObjectsEx({a:1, b:2}, {c:3, d:4}))