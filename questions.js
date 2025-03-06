
function randomNumbers(num){
    if (num % 9 == 0 && num % 7 == 0){
        console.log(num +" is divisible");
    } else{
        console.log(num +" is not divisible");
    }
}

function tempCheck(temp){
    (temp < 60) ?
        console.log("It is too cold"):
        (temp > 90)?
            console.log("It is too hot"):
            console.log("It is the perfect tempurature");
}

let num = Math.floor(Math.random() * 101);
randomNumbers(num);
tempCheck(num)

function arith(num1, num2, op){
    if (op == "/"){
        res = num1/num2;
        console.log(num1 + "/" + num2 + " is equal to " + res);
        return res;
    } else if (op == "*") {
        res = num1*num2;
        console.log(num1 + "x" + num2 + " is equal to " + res);
        return res;
    } else if (op == "+") {
        res = num1+num2;
        console.log(num1 + " + " + num2 + " is equal to " + res);
        return res;
    }else if (op == "-") {
        res = num1-num2;
        console.log(num1 + " - " + num2 + " is equal to " + res);
        return res;
    }

}

let num1 = Math.floor(Math.random() * 101);
let num2 = Math.floor(Math.random() * 101);
var operations = ['+', '-', '*', '/']
const oper = operations[Math.floor(Math.random() * operations.length)];
const arithFunc = (a, b, c) => arith(a, b, c);
arithFunc(num1, num2, oper);