const createUser = () => null
export default createUser

export const printName = () => null
  
export const printAge = () => null

//

export function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 11);
            resolve(randomNumber)
        }, 2000)
    })
}

export function checkNumber(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject('error')
        } 
        else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve('odd');
            }, 1000)
        } 
        else {
            setTimeout(() => {
                reject('even')
            }, 2000)
        }
    })
}

export function NewcheckNumber(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject('error')
        }
        else if(data > 5) {
            reject('>5')
        } 
        else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve(data);
            }, 1000)
        } 
        else {
            setTimeout(() => {
                reject(data)
            }, 2000)
        }
    })
}