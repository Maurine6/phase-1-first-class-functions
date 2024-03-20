function receivesAFunction(callback){
    callback()

}

function returnsANamedFunction(){
    return function named(){
        return "mercy"

    }

}

function returnsAnAnonymousFunction(){
    return function(){
        return "red"

    }
}