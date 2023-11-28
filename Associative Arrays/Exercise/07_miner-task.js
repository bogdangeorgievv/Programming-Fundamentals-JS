function minerTask(input) {
    let resources = {};
    for(let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i+1])

        if(resource in resources){
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }
    let entries = Object.entries(resources);
    console.log(entries)
    
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
