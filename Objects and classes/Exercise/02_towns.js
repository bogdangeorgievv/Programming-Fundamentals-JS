function townsInformation(arr) {
  for(let info of arr) {
      let tokens = info.split(' | ');
      let town = tokens[0];
      let latitude = Number(tokens[1]).toFixed(2);
      let longitude = Number(tokens[2]).toFixed(2);

      let obj = {town:town, latitude:latitude, longitude:longitude};
      console.log(obj)
  }
}
townsInformation(
  ['Sofia | 42.696552 | 23.32601',
  
  'Beijing | 39.913818 | 116.363625'])
