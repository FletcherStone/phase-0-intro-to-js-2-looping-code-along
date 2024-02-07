// Code your solutions in this file
// for (let age=30; age <40; age++){
//     console.log(`Im ${age} years old. Happy birthday to me!`)
//     debugger;
// }



// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//New Funciton
const cards = ["Jim","Rich","Frank"]

function writeCards(names, event) {
    const giftMessages =[]
    for(let i=0; i<names.length; i++){
        const messages= `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        giftMessages.push(messages)
        debugger;
    }   
    return giftMessages
}

writeCards(["Fletcher","Steve","Matt"], "birthday")

function countDown(startingNumber){
    let i= startingNumber
    while (i>=0){
        console.log(i)
        i--
    }
}
