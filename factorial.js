let number = 6;

const factorialFunction = (number) => {
    if (number == 0){
        return 1;
    }

    return number * factorialFunction(number - 1);
};

let test = factorialFunction(number);
console.log(test);