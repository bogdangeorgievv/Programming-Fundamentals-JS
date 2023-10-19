function train(commands) {
    let wagons = commands.shift().split(' ').map(Number);
    let maxCapacity = Number(commands[0])
    for(let i = 1; i < commands.length; i++) {
        let command = commands[i];
        let tokens = command.split(' ');
        
        if(tokens[0] == 'Add') {
            let passengers = Number(tokens[1]);
            wagons.push(passengers)
        } else {
            passengers = Number(tokens[0]);
            for(let i = 0; i < wagons.length; i++) {
                let totalPassengers = passengers + wagons[i];
                if(totalPassengers <= maxCapacity) {
                    wagons[i] = totalPassengers;
                    break;
                }
            }
        }
    }
    
    console.log(wagons.join(' '))
}
train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])
