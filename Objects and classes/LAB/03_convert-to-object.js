function convert(str) {
    let obj = JSON.parse(str)
    let entries = Object.entries(obj)
    for(let [key, value] of entries) {
        console.log(`${key}: ${value}`)
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')
