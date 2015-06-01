/**
 * Created by pro on 15/06/02.
 */
const max = process.argv[2];
let FizzBuzz = function*() {
    let num = 0;
    while (num < max) {
        [num] = [num + 1];
        let value = num;
        if (num % 3 === 0 && num % 5 === 0) {
            value = 'FizzBuzz'
        } else if (num % 3 === 0) {
            value = 'Fizz';
        } else if (num % 5 === 0) {
            value = 'Buzz';
        }
        yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}