// Task 5 - Test Your Functions with Sample Data

//DATASET

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },   
    { name: 'Diana', sales: [9000, 8500, 9200] }
];

// Task 1 - Create a Function to Calculate Average Sales

const salesFigures = [12000, 15000, 13000];
let length = salesFigures.length;

function calculateAverageSales (salesFigures)
{
const sumSales = salesFigures.reduce((sum,sales) => sum + sales, 0);
//captures values from array into single total
const averageSales = sumSales / salesFigures.length;
return averageSales;
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

// Task 3 - Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers (salesData) {
    const totalSales = salesData.map(salesPerson => ({ //used map to create new array
        name: salesPerson.name, 
        totalSales: salesPerson.sales.reduce((sum,sale)=> sum + sale, 0)
    }));

    const maxSales = Math.max(...totalSales.map(salesPerson => salesPerson.totalSales)); 

    const minSales = Math.min(...totalSales.map(salesPerson => salesPerson.totalSales));

    //math.max will recognize the person with the most sales and math.min will do the opposite job, identifying the one with the least sales. 

    return {
        topPerformer: totalSales.find(salesPerson => salesPerson.totalSales === maxSales),
        bottomPerformer: totalSales.find(salesPerson => salesPerson.totalSales === minSales)
    };//the one with the most sales will be returned as "top performer and the one woth the least sales as "bottom performer"
}

let topBottomPerformers = findTopAndBottomPerformers(salesData); //pulling the data from the sales dataset given

console.log("Top Performer:", topBottomPerformers.topPerformer);
console.log("Bottom Performer:", topBottomPerformers.bottomPerformer); 


//Task 4 - Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesData) {
    const report = salesData.map(salesPerson => {
        const average = calculateAverageSales(salesPerson.sales);//to calculate the avg

        const performanceRating = determinePerformanceRating(average);//giving a rating to all of the sales people
    });

    const topBottomPerformers = findTopAndBottomPerformers(salesData);//applying the function to the salesdata
    return {
        report, 
        topPerformer: topBottomPerformers.topPerformer,
        bottomPerformer: topBottomPerformers.bottomPerformer
    };
}

let performanceReport = generatePerformanceReport(salesData);

console.log("Performance Report:", performanceReport.report);
console.log("Top Performer:", performanceReport.topPerformer);
console.log("Bottom Performer:", performanceReport.bottomPerformer);



