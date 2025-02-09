// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}; // function for calculating total profits

console.log(calculateProfit(20, 30, 100)); // profit: $1000
console.log(calculateProfit(50, 70, 200)); // profit: $4000

// Task 2: Function Expression
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = Math.floor(amount * taxRate)
    return `Sales Tax: $${salesTax}`;
}; // function for finding sales tax

console.log(calculateSalesTax(100, 0.07)); // Sales Tax: $7
console.log(calculateSalesTax(500, 0.1)); // Sales Tax: $50

// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Average") {
        bonus = salary * 0.05;
    }
    else if (performanceRating === "Good") {
        bonus = salary * 0.1;
    }
    else if (performanceRating === "Excellent") {
        bonus = salary * 0.2;
    }
    return `Bonus: $${bonus}`;
}; // function for calculating bonuses

console.log(calculateBonus(5000, "Excellent")); // Bonus: $1000
console.log(calculateBonus(7000, "Good")); // Bonus: $700

// Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost;
    if (plan === "Basic") {
        monthlyCost = 10
    }
    else if (plan === "Premium") {
        monthlyCost = 20
    }
    else if (plan === "Enterprise") {
        monthlyCost === 50
    }
    let totalCost = (monthlyCost * months) - discount;
    return `Total Cost: $${totalCost}`;
} // function for calculating total subscription cost

console.log(calculateSubscriptionCost("Basic", 6, 10)); // Total Cost: $50
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Total Cost: $240

// Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    let convertAmount = amount * exchangeRate
    return `Converted Amount: $${convertAmount.toFixed(2)}`;
}; // function for converting currency

console.log(convertCurrency(100, 1.1));
console.log(convertCurrency(250, 0.85));

// Task 6: Higher-Order Functions
let orders = [200, 600, 1200, 450, 800]; // array of orders
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}; // function for applying bulk discount

console.log(applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount)); // [ 200, 540, 1080, 450, 720 ]