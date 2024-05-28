// Mock dishData array for demonstration
const dishData = [
  { name: 'Pasta', price: 10 },
  { name: 'Salad', price: 5 },
  { name: 'Pizza', price: 12 }
];

const tax = 1.2; // Example tax rate

// Step 1: Define the getPrices function with the taxBoolean parameter
function getPrices(taxBoolean) {
  // Step 2: Loop over all objects in the dishData array
  for (let i = 0; i < dishData.length; i++) {
    // Step 3: Declare finalPrice variable
    let finalPrice;

    // Step 4: If taxBoolean is true, calculate final price with tax
    if (taxBoolean === true) {
      finalPrice = dishData[i].price * tax;
    } 
    // Step 5: If taxBoolean is false, assign the dish price to finalPrice
    else if (taxBoolean === false) {
      finalPrice = dishData[i].price;
    } 
    // Step 6: If taxBoolean is not a boolean, log an error and return
    else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }

    // Step 7: Log the dish name and final price
    console.log("Dish: " + dishData[i].name + " Price: $" + finalPrice);
  }
}

// Step 8: Define the getDiscount function with taxBoolean and guests parameters
function getDiscount(taxBoolean, guests) {
  // Step 9: Invoke the getPrices function with the taxBoolean argument
  getPrices(taxBoolean);

  // Step 10: Check if guests is a number and between 1 and 29
  if (typeof guests === 'number' && guests > 0 && guests < 30) {
    // Step 11: Declare discount variable and determine the discount value
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    // Log the discount value
    console.log('Discount is: $' + discount);
  } 
  // Step 12: If guests is not a valid number, log an error message
  else {
    console.log('The second argument must be a number between 0 and 30');
  }
}

// Testing the functions with various combinations of arguments
getDiscount(true, 2);   // Should calculate prices with tax and apply a discount of \$5
getDiscount(false, 10); // Should calculate prices without tax and apply a discount of \$10
getDiscount();          // Should log an error for missing arguments
getDiscount(true, 31);  // Should log an error for guests out of valid range
getDiscount(true, -1);  // Should log an error for guests out of valid range
getDiscount(true, 'a'); // Should log an error for non-numeric guests argument