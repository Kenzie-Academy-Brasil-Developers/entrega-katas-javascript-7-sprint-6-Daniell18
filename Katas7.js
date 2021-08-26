//FOR EACH
const newForEach = (arr, callbackForEach) => {
    for (let i = 0; i < arr.length; i++) {
        callbackForEach(arr[i], i, arr)
    }
}
const callbackForEach = (element, index, array) => {
    console.log(element, index, array)
}


//FILL
const newFill = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = value
    }
    return arr
}

//MAP
const newMap = (arr, callbackMap) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callbackMap(arr[i], i, arr)
    }
    return newArr
}
const callbackMap = (element, index, arr) => {
    return element * 2
}
//SOME
const newSome = (arr, callbackSome) => {
    for (let i = 0; i < arr.length; i++) {
        if (callbackSome(arr[i], i, arr)) {
            return true
        }
    }
    return false
}
const callbackSome = (element, index, arr) => {
    return element > 4
}
//FIND
const newFind = (arr, callbackFind) => {
    for (let i = 0; i < arr.length; i++) {
        if (callbackFind(arr[i], i, arr)) {
            return arr[i]
        }
    }
    return undefined
}
const callbackFind = (element, index, arr) => {
    return element > 4
}
//FINDINDEX
const newFindIndex = (arr, callbackFind) => {
    for (let i = 0; i < arr.length; i++) {
        if (callbackFind(arr[i], i, arr)) {
            return i
        }
    }
    return -1
}
const callbackFindIndex = (element, index, arr) => {
    return element > 4
}
//EVERY
const newEvery = (arr, callbackEvery) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callbackEvery(arr[i], i, arr)) {
            return false
        }
    }
    return true
}
const callbackEvery = (element, index, arr) => {
    return element >= 10
}
//FILTER

const newFilter = (arr, callbackFilter) => {
    let newArray = []
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (callbackFilter(arr[i], i, arr)) {
            newArray[j] = arr[i]
            j++
        }
    }
    return newArray
}
const callbackFilter = (element, index, arr) => {
    return element >= 10
}
//CONCAT

const newConcat = (...arguments) => {
    let array = arguments
    let newArray = []
    let x = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length != undefined) {
            for (let j = 0; j < array[i].length; j++) {
                newArray[x] = array[i][j]
                x++
            }
        }
        if (array[i].length === undefined) {
            newArray[x] = array[i]
            x++
        }
    }
    return newArray
}

//INCLUDES
const newIncludes = (arr, element) => {

    for (let i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            return true
        }
    }
    return false
}

//INDEXOF
const newIndexOf = (arr, element, start) => {
    if (start === undefined) {
        start = 0
    }
    if (start >= 0) {
        for (let i = start; i < arr.length; i++) {
            if (element === arr[i]) {
                return i
            }
        }
        return -1
    }
    if (start < 0) {
        for (let i = start; i < arr.length; i++) {

            if (element === arr[i]) {
                return i
            }
        }
        return -1
    }
}
//JOIN
const newJoin = (arr, separador) => {
    let newArray = arr[0]
    if (arr.length === 0) {
        return newArra = ""
    }
    if (separador === undefined) {
        separador = ","
    }
    for (let i = 1; i < arr.length; i++) {
        newArray += separador + arr[i]
    }
    return newArray
}
//REDUCE 


const newReduce = (arr, callbackReduce, valueInit) => {
    let acc = arr[0]
    if (valueInit != undefined) {
        acc = valueInit
        for (let i = 0; i < arr.length; i++) {
            acc = callbackReduce(acc, arr[i], i, arr)
        }
        return acc
    }

    for (let i = 1; i < arr.length; i++) {
        acc = callbackReduce(acc, arr[i], i, arr)
    }

    return acc
}
const callbackReduce = (acc, valuetAt, index, arr) => {

    return acc += valuetAt
}
//SLICE
const newSlice = (arr, inicio, fim) => {
    let newArray = []
    let j = 0
    if (!inicio) {
        inicio = 0
    }
    if (inicio > arr.length - 1) {
        return newArray
    }
    if (!fim || fim > arr.length - 1 || fim < 0) {
        fim = arr.length
    }
    if (inicio < 0) {
        for (let i = fim - 1; i > fim - inicio; i++) {
            newArray[j] = arr[i]
            j++
        }
        return newArray
    }

    for (let i = inicio; i < fim; i++) {
        newArray[j] = arr[i]
        j++
    }
    return newArray
}


var arr1 = [1, 2, [3, 4]];
//ARRAYOF
const newArrayOf = (...arguments) => {
    let newArray = arguments
    return newArray
}