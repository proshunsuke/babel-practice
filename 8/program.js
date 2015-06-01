/**
 * Created by pro on 15/06/02.
 */
const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let num = 0;
        return {
            next() {
                [num] = [num + 1];
                if (num > max) return {done: true};
                if (num % 3 === 0 && num % 5 === 0) {
                    return {done: false, value: "FizzBuzz"};
                } else if (num % 3 === 0) {
                    return {done: false, value: "Fizz"};
                } else if (num % 5 === 0) {
                    return {done: false, value: "Buzz"};
                } else {
                    return {done: false, value: num};
                }
            }
        };
    }
};

for (var n of FizzBuzz) {
    console.log(n);
}
