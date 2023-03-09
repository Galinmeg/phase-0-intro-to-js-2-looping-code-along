function writeCards(names , string) {
    const messageNames = []
    for(let i = 0 ; i < names.length; i++)
    {
    messageNames.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);
    }
    return messageNames;
}

function countDown() {
    let countDown = 0;
    while (countDown < 11) {
        console.log(countDown);
        countDown ++;
    }
}

countDown(4)







