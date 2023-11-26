function pirates(input) {
    let action = input.shift();
    let cities = {};
    let count = 0;

    while(action != 'Sail') {
        
        let [cityName, population, gold] = action.split('||'); 
        population = Number(population);
        gold = Number(gold)

        if(cityName in cities) {
            cities[cityName].population += population;
            cities[cityName].gold += gold;
        } else {
            count++;
            cities[cityName] = { population, gold }
        }
        action = input.shift();
    }
    action = input.shift();
    while(action != 'End') {
        let tokens = action.split('=>');
        let command = tokens[0];
        let town = tokens[1];
        // let city = cities[town];
        
        if(command == "Plunder") {
            let killed = Number(tokens[2]);
            let stolenGold = Number(tokens[3]);
            cities[town].population -= killed;
            cities[town].gold -= stolenGold;
            console.log(`${town} plundered! ${stolenGold} gold stolen, ${killed} citizens killed.`)
            if(cities[town].population <= 0 || cities[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
                count--;
            } 
        }
        if(command == "Prosper") {
            let amountGold = Number(tokens[2]);
            if(amountGold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                
            } else {
                cities[town].gold += amountGold;
                console.log(`${amountGold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }
        action = input.shift()
    }
    let entries = Object.entries(cities);
    if(entries.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(([city, stats]) => console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`))
    }
}
pirates
(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"])
