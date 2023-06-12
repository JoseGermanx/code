let iceCreamFlavors = [
  "Chocolate",
  "Strawberry",
  "Vanilla",
  "Pistachio",
  "Neapolitan",
  "Mint Chip",
];

let iWantAIceCream = window.prompt("What flavor do you want?", "");
let iceCreamFound;
for (let i = 0; i < iceCreamFlavors.length; i++) {
  if (iceCreamFlavors[i] === iWantAIceCream) {
    iceCreamFound = iceCreamFlavors[i];
  }
}
if(iWantAIceCream === "") {
   console.log("You didn't choose a flavor");
} else if (iceCreamFound) {
  console.log(`Here is your iceCream of ${iceCreamFound}, enjoy!`);
  innerHTML = `Here is your iceCream of ${iceCreamFound}, enjoy!`;
} else {
  console.log(`We don't have ${iWantAIceCream} flavor`);
}
