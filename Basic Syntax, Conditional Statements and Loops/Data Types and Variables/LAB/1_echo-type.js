function solve(param) {
    let type = typeof param;
    console.log(type)

  if (typeof param == "string" || typeof param == "number") {
    
    console.log(param);
  } else {
    
    console.log("Parameter is not suitable for printing");
  }
}
solve("Hello, JavaScript!");
solve(18);
solve(null);
