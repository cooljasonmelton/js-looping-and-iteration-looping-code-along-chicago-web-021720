// Code your solutions in this file

function writeCards(array, event){
    let message_arr = []

    for (let i = 0; i < array.length; i++) {
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        message_arr.push(message)
    }
    return message_arr
}

function countDown(num) {
    while (num > -1) {
        console.log(num--)
    } 
}