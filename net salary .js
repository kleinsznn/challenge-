const { clear } = require("console");

function calculatePayeeTax(grossSalary) {
    const taxBands = [
      { lowerLimit: 0, upperLimit: 24000, taxRate: 10 },
      { lowerLimit: 24001, upperLimit: 40667, taxRate: 15 },
      { lowerLimit: 40668, upperLimit: 57333, taxRate: 20 },
      { lowerLimit: 57334, upperLimit: 74000, taxRate: 25 },
      { lowerLimit: 74001, upperLimit: Infinity, taxRate: 30 }
    ];
  
    let taxPayable = 0;
  
    for (let band of taxBands) {
      if (grossSalary > band.upperLimit) {
        taxPayable += (band.upperLimit - band.lowerLimit) * (band.taxRate / 100);
      } else if (grossSalary > band.lowerLimit) {
        taxPayable += (grossSalary - band.lowerLimit) * (band.taxRate / 100);
        break;
      }
    }
  
    return taxPayable;
  }
  
  function calculateNHIFDeductions(grossSalary) {
    const nhifRates = [
      { lowerLimit: 0, upperLimit: 5999, contribution: 150 },
      { lowerLimit: 6000, upperLimit: 7999, contribution: 300 },
      { lowerLimit: 8000, upperLimit: 11999, contribution: 400 },
      { lowerLimit: 12000, upperLimit: 14999, contribution: 500 },
      { lowerLimit: 15000, upperLimit: 19999, contribution: 600 },
      { lowerLimit: 20000, upperLimit: 24999, contribution: 750 },
      { lowerLimit: 25000, upperLimit: 29999, contribution: 850 },
      { lowerLimit: 30000, upperLimit: 34999, contribution: 900 },
      { lowerLimit: 35000, upperLimit: 39999, contribution: 950 },
      { lowerLimit: 40000, upperLimit: 44999, contribution: 1000 },
      { lowerLimit: 45000, upperLimit: 49999, contribution: 1100 },
      { lowerLimit: 50000, upperLimit: 59999, contribution: 1200 },
      { lowerLimit: 60000, upperLimit: 69999, contribution: 1300 },
      { lowerLimit: 70000, upperLimit: 79999, contribution: 1400 },
      { lowerLimit: 80000, upperLimit: 89999, contribution: 1500 },
      { lowerLimit: 90000, upperLimit: 99999, contribution: 1600 },
      { lowerLimit: 100000, upperLimit: Infinity, contribution: 1700 }
    ];
  
    let nhifDeductions = 0;
  
    for (let rate of nhifRates) {
      if (grossSalary > rate.upperLimit) {
        nhifDeductions = rate.contribution;
      } else if (grossSalary > rate.lowerLimit) {
        nhifDeductions = rate.contribution;
        break;
      }
    }
  
    return nhifDeductions;
  }
  
  function calculateNSSFContributions(grossSalary) {
    const nssfRate = 6;
  
    return Math.min(grossSalary * (nssfRate / 100), 1800);
  }
  
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const taxPayee = calculatePayeeTax(grossSalary);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    const nssfContributions = calculateNSSFContributions(grossSalary);
  
    const netSalary = grossSalary - taxPayee - nhifDeductions - nssfContributions;
  
    return netSalary;
  }
  
  // Prompt the user for input
  let basicSalary = parseFloat(prompt("Enter the employee's basic salary:"));
  let benefits = parseFloat(prompt("Enter the employee's benefits:"));
  
  // Calculate and output the Payee Tax, NHIF Deductions, NSSF Deductions, and net salary
  let netSalary = calculateNetSalary(basicSalary, benefits);
  console.log("Payee Tax: " + calculatePayeeTax(basicSalary));
  console.log("NHIF Deductions: " + calculateNHIFDeductions(basicSalary));
  console.log("NSSF Deductions: " + calculateNSSFContributions(basicSalary));
  console.log("Net Salary: " + netSalary);
clear  