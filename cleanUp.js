// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: Fixed - added semicolons to match the rest of file.
function nameQuestion(); {
  console.log("Hello, what is your name?");
}

nameQuestion();


// EX 2: Indented code block, Moved ending } flush to the left side, added semicolons on lines 19 and 20, added parenthesis to line 20(I like to use parenthesis to separate things up for clarity)
function addThreeNums(first, second, third); {
  var sum = (first + second + third);
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: Added a space between function and code block (line 29), put ending } from code block on its own line below. 
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4: Moved starting { from code block to same line as function start, indented lines 42 and 43 to match rest of file, removed errant '.' from console log statement and moved that line up to sit directly below rest of code block, semicolons added, moved } for code block snug against left side. Changed function name to "averageNum" to more specifically describe purpose.
function averageNum(num1, num2); {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}`);
}