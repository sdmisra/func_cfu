// // 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
// function printGreeting() {
//     console.log('Hey there buddy! Long time no see!');
// }
// printGreeting();
// printGreeting();
// printGreeting();

// // 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
// function whoGoesThere(name) {
//     console.log(`Hey You! Who goes there? It better not be you AGAIN, ${name}! We still can't get the smell of cologne out of our couch from last visit.`)
// }
// whoGoesThere("Shane")
// whoGoesThere("Gary")
// whoGoesThere("Thomas")

// // 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
// function dreamJob(nameCompany, lowRange, highRange) {
//     var payRange = (highRange - lowRange);
//     console.log(`"Here at ${nameCompany} we are interested in a variety of experiences to fill our team! Depending on the role you pick, you may earn up to $${payRange} more than our starting positions! Apply today!'`);
// }

// dreamJob("King Soopers", 20000, 60000);
// dreamJob("Tesla", 60000, 120000);
// dreamJob("The Broomfield Parks and Recreation Department", 20000, 70000);


// 4: Write a function that satifies the following interaction pattern:
function checkStock (num1, whatFood) {
    if (num1 >= 4) {
        console.log(`"${whatFood} is stocked"`);
    }
    else if (4 > num1 && num1 > 0)
        console.log(`"${whatFood} - running LOW"`);
    else {
        console.log(`"${whatFood} - out of stock!"`);
    }

}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"