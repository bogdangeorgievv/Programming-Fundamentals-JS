function songs(arr) {
  let n = arr.shift();
  let typeSong = arr.pop();
  let songs = [];

  class Songs {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  for (let str of arr) {
    let tokens = str.split("_");
    let type = tokens[0];
    let name = tokens[1];
    let time = tokens[2];

    let song = new Songs(type, name, time);
    songs.push(song);
  }
  if(typeSong == 'all') {
    songs.forEach((i) => console.log(i.name))
  } else {
    let filtered = songs.filter((i) => i.type === typeSong)
    filtered.forEach((i) => console.log(i.name) )
  }
}
