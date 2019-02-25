const list = [5,8,9,2,7,6,3,1,4];

const callback = (arg) => {
    // things to do
    const newList =  arg.filter(elem => elem < 5);
    return newList;
}

const filter = (arg, callback) => {
    // things to do
    return callback(arg);
}

let filtered = filter(list, callback);

console.log(filtered);