let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo;
let cardThree = 7;
sum += cardThree;
if (sum > 21){
    console.log("You lost");
    process.exit(1);
}
console.log(`You have ${sum} points.`)

let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum || sum <= 21 && sum > bankSum) {
    console.log('You win');
} else {
    console.log("Bank Wins")
}