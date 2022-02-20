let ages = [3,9,23,67,2,8,28,93];
//this removes the first element in the array
let removed1 = ages.splice(0, 1);
//this removes the last element in the array
let removed2 = ages.splice(6, 1);
console.log(ages);
//the first and last elements are stored in these and are subtracted
console.log(removed1 - removed2);
//this adds a new number to the array
ages.push(45);
//these are just to define them now
  total = 0;
  i = 0;
  average = 0;
//prints out the array with the new number given at 11
console.log(ages)
// a for loop that iterate through the array
for (let i = 0; i < ages.length; i++){
    total = total + ages[i];
}
//calculate the average age
average =  total / ages.length ;
// prints out the average of the array
console.log(average);
// Yay!
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//this finds the length of each element in the array
let length = names.map(function(element){
    //this returns the lenght of each element
    return element.length;
});
console.log(names)
let sum = length.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
})
console.log(sum);
//this brings all names together out of with space
console.log(names.join(' '));
namesLengths =[];
//this turns each element in the array from a work to the value of the element
for (let name of names){
    namesLengths.push(name.length)
}
console.log(namesLengths)
//this combines all the value of the elements to one value
namesLengths.forEach(x => {
    sum += x;
})
console.log(sum)
//this prints out what ever word you want it to where n is the number of times you want it to print out
function hello(word, n) {
    for (let i = 1; i <= n; i++){
        console.log(word);
    }
}

hello('Hello', 4);
//this takes a first and last name and turns it into a full name
function fullName(firstName, lastName){
    return firstName + '' + lastName;
}
// this checks to see if the array is less then or equil to 100
function LessThen100(array){
    if (array <= 100)
    return true
    array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    })
}
//this checks to see if it's hot outside and if you have more then 10.50$
LessThen100(ages)
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside = true || moneyInPocket > 10.50){
        }else {
            return false
        }
}