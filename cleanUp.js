// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
/* I added ; to the end of the console message and  to the
end of the function name to follow javascript format. */

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(2, 4, 7);
/* I added ; after third in the var sum argument. I also
changed the order of the functions arguments 2,4,7 so they
are in ascending order like the function's parameters. */



// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
 }

makeFreshPesto();
/* I changed func to the correct command function for
the code to work. I moved the closing curly bracket to the next line to
follow javascript format. */


//  EX 4:
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`);
  }
average(2, 4)
/* I called the fuction for the code to work.*/
