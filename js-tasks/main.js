// npm init -y
// npm i serve

import userCreator from './export.js'
import { printName as printFirstName, printAge as printDOB } from './export.js'

userCreator()
printFirstName()
printDOB()

//

import { job, checkNumber, NewcheckNumber } from './export.js'
/*
job().then((randomNumber) => {
  console.log(`${randomNumber}`)
})

checkNumber('test').then((a) => {
    console.log(`${a}`)
}).catch((error) => {
    console.log(`${error}`)
})

checkNumber(1).then((a) => {
    console.log(`${a}`)
}).catch((error) => {
    console.log(`${error}`)
})

checkNumber(2).then((a) => {
    console.log(`${a}`)
}).catch((error) => {
    console.log(`${error}`)
})
*/

job().then((randomNumber) => {
    return NewcheckNumber(randomNumber)
})
.then((result) => {
    console.log(2 * result)
})
.catch((error) => {
    if(error === 'error'){
        console.log("NaN")
    }
    else if(error === '>5'){
        console.log('Number >5')
    }
    else {
        console.log('other error')
    }
})
