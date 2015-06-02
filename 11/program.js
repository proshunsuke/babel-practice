var inputs = process.argv.slice(2);
var result = inputs
    .map( (e) => e[0] )
    .reduce( (v, e) => v + e );
console.log(result);
