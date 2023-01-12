numbers = "10,20,30,40,50"
console.log(typeof(numbers));

const sum = (numbers) => {
    const splitNumbers = numbers.split(",");
    console.log(splitNumbers);
    let sum = 0;
    for (let i = 0; i<splitNumbers.length; i++){
        sum = sum + Number(splitNumbers[i]);
    }
    return sum;
}

let numbers_sum = sum(numbers);
console.log(numbers_sum);