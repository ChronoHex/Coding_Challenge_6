// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}; // function for calculating total profits

console.log(calculateProfit(20, 30, 100)); // profit: $1000
console.log(calculateProfit(50, 70, 200)); // profit: $4000