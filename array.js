let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//To confirm the array was made correctly. It is. 
console.log(ages); 
//arrays are 0 based indexed, array.length - 1 is always how to get to last element in an array - first element which is always array[0]
console.log(ages[ages.length - 1] - ages[0] );
//in splice = array.splice(array.length/where you want to splice, how many you want to remove, any new elements)
ages.splice(ages.length, 0, 33);
console.log(ages);

console.log(ages[ages.length - 1] - ages[0] );
//for #s you =0; and item works for this 
let total = 0;
ages.forEach(item => total += item); 

console.log('Average is: ' + ' ' + total / ages.length); 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//+= shorter way, => points to function 
let totesLetters = 0;
names.forEach(item => totesLetters += item.length); 

console.log('Average letters is: ' + totesLetters / names.length); 

//for full string elements (so not like above where you are counting each character) you = ''; + ' ' to provide spaces 
let namesGoAround = '';
names.forEach(item => namesGoAround += item + ' '); 
console.log(namesGoAround);

//easy way to create an empty array
let nameLengths = [];

//Write a loop to iterate over the previously created names array 
 names.forEach(item => nameLengths.splice(nameLengths.length, 0, item.length));
 console.log(nameLengths);

 let sum = 0;
 nameLengths.forEach(item => total += item.length);
 console.log(sum);

function stutter(word, n) {
    let words = '';
    for(i = 0; i < n; i++) {
       words += word;
    }
    return words; 
}


console.log(stutter('cat', 3)); 
console.log(stutter('dog', 7));

// ' ' is how to add spaces
function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(createFullName('Jim', 'Yoki'));
console.log(createFullName('Isaac', 'Wilcox'));

function isGreaterThan100(passedArray) {

    let sum = 0;
    passedArray.forEach(item => sum += item);
    if(sum > 100) {
        return true;
    }
    return false;
}
//When passing arrays you have to remember to hav [] within the () like ([]) 
console.log(isGreaterThan100([99, -3]));
console.log(isGreaterThan100([100, 0]));
console.log(isGreaterThan100([234, 543, 567, 987, 33, 1, 830]));

function numAverage(numArray) {
    let total = 0;
    numArray.forEach(item => total += item); 
    return total / numArray.length;
}

console.log(numAverage([99, -3]));
console.log(numAverage([100, 0]));
console.log(numAverage([234, 543, 567, 987, 33, 1, 830]));

function isGreaterAve1Ave2(numArray1, numArray2) {
    let total1 = 0;
    numArray1.forEach(item => total1 += item); 
    const avg1 = total1 / numArray1.length;

    let total2 = 0;
    numArray2.forEach(item => total2 += item); 
    const avg2 = total2 / numArray2.length;
    return avg1 > avg2;
}

console.log(isGreaterAve1Ave2([33, 23, 52], [54, 88, 2]));


function willBuyDrink(isHotOutSide, moneyInPocket){
    return isHotOutSide && moneyInPocket > 10.50; 
}
console.log(willBuyDrink(true, 13));
console.log(willBuyDrink(true, 8));
console.log(willBuyDrink(false, 19));
console.log(willBuyDrink(false, 6));

    
//Just coded a spell attack using a closure, depending on your roll you can change the variables accordingly
function spellDamage(atkBon){
    return function(atkHit){
    return atkBon + atkHit; 
    } 
}

var regularAttk2 = spellDamage(2); 
var critAttk5 = spellDamage(5); 
console.log(regularAttk2(2)); 
console.log(critAttk5(3)); 
