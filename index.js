
const array = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return array;
}

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--);
    }
}

