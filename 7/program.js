/**
 * Created by pro on 15/06/01.
 */
var obj = {
    [+process.argv[2] % 2 === 0 ? "even" : "odd"] : +process.argv[2],
    [+process.argv[3] + +process.argv[2]] : +process.argv[3] + +process.argv[2]
};

console.log(obj);
