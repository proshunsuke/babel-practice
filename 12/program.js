var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

var avg = function(...args) {
    let sum = args.reduce( (sum, n) => sum + n);
    let num = args.length;
    return sum / num;
};

console.log(avg(...args));