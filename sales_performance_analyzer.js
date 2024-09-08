// Task 1 - Create a Function to Calculate Average Sales

const salesFigures = [12000, 15000, 13000];
let length = salesFigures.length;

function calculateAverageSales (salesFigures)
{
const sumSales = salesFigures.reduce((sum,sales) => sum + sales, 0);
//captures values from array into single total
const averageSales = sumSales / salesFigures.length;
} //average sales discovered through the division of the sum of sales and the sales figures

let average = calculateAverageSales (salesFigures);
console.log(`The average sales are $${average}.`);

