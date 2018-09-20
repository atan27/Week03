function multiply3(list) {
    let newlist = list.map(elem => elem * 3);
    console.log(newlist);
    return newlist;
}

let array = [1,2,3,4,5];
console.log(multiply3(array));