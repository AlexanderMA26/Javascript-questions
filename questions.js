//Question1
function randomNumbers(num){
    if (num % 9 == 0 && num % 7 == 0){
        console.log(num +" is divisible");
    } else{
        console.log(num +" is not divisible");
    }
}
//Question2
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
//Question3
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
//Question4
let num1 = Math.floor(Math.random() * 101);
let num2 = Math.floor(Math.random() * 101);
var operations = ['+', '-', '*', '/']
const oper = operations[Math.floor(Math.random() * operations.length)];
const arithFunc = (a, b, c) => arith(a, b, c);
arithFunc(num1, num2, oper);


//Question 5
var sentences = [];
sentences[0] = "Separation anxiety is what happens when you can't find your phone.";
sentences[1] = "The fox in the tophat whispered into the ear of the rabbit.";
sentences[2] = "Garlic ice-cream was her favorite.";
sentences[3] = "The group quickly understood that toxic waste was the most effective barrier to use against the zombies.";
sentences[4] = "He did not want to go to the dentist, yet he went anyway.";
sentences[5] = "I am working on a sweet potato farm.";
sentences[6] = "The chic gangster liked to start the day with a pink scarf.";
sentences[7] = "There aren't enough towels in the world to stop the sewage flowing from his mouth.";
sentences[8] = "Stop waiting for exceptional things to just happen.";
sentences[9] = "Best friends are like old tomatoes and shoelaces.";
sentences[10] = "Charles ate the french fries knowing they would be his last meal.";
sentences[11] = "Her fragrance of choice was freshly cut grass.";
sentences[12] = "The toddler’s endless tantrum caused the entire plane anxiety.";
sentences[13] = "Even with the snow falling outside, she felt it appropriate to wear her bikini.";
sentences[14] = "He knew it was going to be a bad day when he saw mountain lions roaming the streets.";
//from Stack Overflow
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
shuffle(sentences);
// console.log(sentences);
// console.log(sentences.length);
// console.log(sentences[0]);
// console.log(sentences[14]);
// let elem = Math.floor(Math.random() * 15);
// console.log(sentences[elem])
// sentences.sort();
// console.log(sentences);

    sentences.push("Do geese see God?");
    sentences.push(1);
// console.log(sentences);


//Question 6

const randNum = [];

for (let i=0; i < 10; i++){
    randNum[i] = Math.floor(Math.random() * (29 - 87 + 1) + 87);
}
var dist = 0;
var numb1;
var numb2;
for (let i=0; i < 10; i++){
    if (Math.abs(randNum[i]-randNum[i+1]) > dist){
        dist = Math.abs(randNum[i]-randNum[i+1]);
        numb1 = randNum[i];
        numb2 = randNum[i+1];
    }
}
console.log(randNum);
console.log(dist);
console.log(numb1);
console.log(numb2);




//Question 7

const newNum = randNum.map(squareNumbers);
function squareNumbers(num){
    return num*num
}
console.log(newNum);

//Question 8

let maxNum = Math.max(...newNum);

filteredNums = newNum.filter(filterNums);

function filterNums(num){
    if (num < maxNum/2){
        return num
    }
}
console.log(filteredNums);


//Question 9
const sum = filteredNums.reduce((a,b)=>a+b);
console.log(sum);

//Question 10

randNum.forEach((num, index) => visualize(num, index));

function visualize(num, index){
    console.log("The element at index " + index + " is " + num);
}


//Question 11

class myClass{
    constructor(year, name, old){
        this.year = year;
        this.name = name;
        this.old = old;
    }

    printObjs(){
        console.log(this.year, this.name, this.old);
    }

}



//Question 12


const classObjs = [];

const names = ["Alex", "Leo", "Lee", "Loucie", "Stella", "Julia"];
const years = [1972, 2008, 2010, 2012, 1998, 2015];
const yesOrNo = [true, false];

for (let i = 0; i < 11; i++){

    classObjs[i] = new myClass(years[Math.floor(Math.random()*years.length)], names[Math.floor(Math.random()*names.length)], yesOrNo[Math.floor(Math.random()*yesOrNo.length)]);
    console.log(classObjs[i]);
}

const filteredPeople = classObjs.filter((person) => {
    if(person.name.length < 5){
        return person;
    }
});

console.log(filteredPeople);

mappedPeople = filteredPeople.map((person)=>{
    person.year = person.year*person.year
    return person
});

console.log(mappedPeople);

const selectedPeople = [];

mappedPeople.forEach(person => {
    if (person.year > 4000000) {
        selectedPeople.push(person);
    }
});

selectedPeople.sort((a, b) => a.name.localeCompare(b.name));

console.log(selectedPeople);
