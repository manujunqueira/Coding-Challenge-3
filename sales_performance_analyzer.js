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


//Task 2 - Create a Function to Determine Performance Rating
 
function determinePerformanceRating (x)
{
    let Avg = calculateAverageSales(salesFigures);
     if (Avg > 10000) {
        return "Excellent";//if avg data is greater than 10000 return "excellent"
        }
    else if (Avg > 7000){
        return "Good";//if avg data is between 10000 & 7000 return "good"
        }
    else if (Avg > 4000){
        return "Satisfactory";//if data is between 7000 & 4000 return "satisfactory"
        }
    else if (Avg <= 4000){
        return "Needs improvement";}//if it's less than 4000 return "needs improvement"
    else  {
        return "Invalid input";
    }
        }

let performanceRating = determinePerformanceRating(salesFigures);
console.log(performanceRating)



