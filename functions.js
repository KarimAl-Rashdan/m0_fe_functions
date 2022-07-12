// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hello Stranger!");
}

printGreeting();
printGreeting();
printGreeting();
// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function printGreeting(name) {
  console.log(`Say hello to ${name} for me.`);
}
printGreeting("Bob")


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function payAtCompany(name, num1, num2) {
  var sum = (num1 + num2);
  console.log(`The ${name} company has a pay range of ${sum}.`)
}
payAtCompany("CheeeseCake", 15000, 20000);


// 4: Write a function that satifies the following interaction pattern:
function checkStock(itemCount, item) {
  var itemCount 
if (itemCount > 0){console.log(`${item} is stocked`)}
else {`${item} has run out.`
}


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
