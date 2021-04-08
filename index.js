function writeCards(name_array, event) {
    let cards = []
    
    for (let i=0; i < name_array.length; i+=1) {
    cards.push( `Thank you, ${name_array[i]}, for the wonderful ${event} gift!`);
    } 
return cards
}

function countDown( integer) {
    while (integer > 0) {
        console.log( integer);
        integer -= 1;
    }
    console.log( integer);
}

