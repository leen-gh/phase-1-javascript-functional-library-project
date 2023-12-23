function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        collection.map(callback)
    } else if (typeof collection === 'object' && collection !== null) {
        Object.values(collection).map(callback)
    }
    
    return collection
}


function myMap(collection, callback){
    if (Array.isArray(collection) ){
        let newAry = collection.map(callback)
        return newAry
    }else if(typeof collection === 'object' && collection !== null){
        let newArry = Object.values(collection).map(callback)
        return newArry
    }
    return []
}

function myReduce(collection, callback, acc){
    if (acc === undefined) {
        acc = collection[Object.keys(collection)[0]]
        //dont forget to remove the first element
        collection = Object.values(collection).slice(1) 
    }
    
    if (Array.isArray(collection) ){
        return collection.reduce(callback, acc)
        
    }else if(typeof collection === 'object' && collection !== null){
        return Object.values(collection).reduce(callback, acc)     
    }
    return acc
}

function myFind(collection, predicate){
    if (Array.isArray(collection) ){
        return collection.find(predicate)
        
    }else if(typeof collection === 'object' && collection !== null){
        return Object.values(collection).find(predicate)     
    }
    return []
}

function myFilter(collection, predicate){
    if (Array.isArray(collection) ){
        return collection.filter(predicate)
        
    }else if(typeof collection === 'object' && collection !== null){
        return Object.values(collection).filter(predicate)     
    }
    return []
}

function mySize(collection){
    if (Array.isArray(collection) ){
        return collection.length
        
    }else if(typeof collection === 'object' && collection !== null){
        return Object.values(collection).length     
    }
    return 0
}

function myFirst(array, n){
    if (n === null || n === undefined || n === 0)
        return array[0]
    else{
        return array.slice(0,n)
    }
}

function myLast(array, n){
    let aryllast = array.length - 1
    if (n === null || n === undefined || n === 0)
        return array[aryllast]
    else{
        
        return array.slice(-n)
    }
}


function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}