// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//Checking to see if all numbers are divisable by 5
//Use the divide symbol for each (/5)
// Make sure everyone come out as an whole number
const fiveDivisable = n1%5 || n2%5 || n3%5 || n4%5 === 0;

console.log("Are all numbers divisable by 5?" + fiveDivisable);

//Checking to see if the first number is larger than the last
//Use the compare symbol greater than(>)
const firstToLast = n1 > n4 ;

console.log('Is the first number larger than the last ?' + firstToLast);

let arithmaticChain = n3 * (n1 - n2) %n4;

console.log('The answer is ' + arithmaticChain);

//Another way to calculate isOver25 variable
//Use greater than or equal to
// should come out as true
let under25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(under25);

//Overview of what I have to work with
let tripDistance = 1500;
let mph55 = 30;
let mph60 = 28;
let mph75 = 23;
let budget = 175;
let fuelCost = 3;

//55mph

let gallons55 =  tripDistance / mph55;
console.log(gallons55);

let budget55 = gallons55 * fuelCost;
console.log(budget55);

let bestMphFor55 = (tripDistance/55);
console.log('Driving 55Mph the trip will take about ' + bestMphFor55 + ' hours')

//60mph
let gallons60 =  tripDistance / mph60;
console.log(gallons60);

let budget60 = gallons60 * fuelCost;
console.log(budget60);

let bestMphFor60 = (tripDistance/60);
console.log('Driving 60Mph the trip will take about ' + bestMphFor60 + ' hours')


//75mph
let gallons75 =  tripDistance / mph75;
console.log(gallons75);

let budget75 = gallons75 * fuelCost;
console.log(budget75);

let bestMphFor75 = (tripDistance/75);
console.log('Driving 75Mph the trip will take about ' + bestMphFor75 + ' hours which makes the most sense.')








