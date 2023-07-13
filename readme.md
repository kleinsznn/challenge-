# Programming Challenges - Readme

This repository contains solutions to three programming challenges: Grade Calculator, Speed Detector, and Net Salary Calculator. Each challenge focuses on a specific problem and provides a solution to it.

## Challenge 1: Grade Calculator

### Problem Statement
The Grade Calculator program prompts the user to input student marks between 0 and 100. It then outputs the correct grade based on the following criteria:
- A > 79
- B > 60 to 79
- C > 49 to 59
- D > 40 to 49
- E > less than 40

### Solution
The solution program takes the student's mark as input and calculates the corresponding grade based on the given criteria. It ensures that the mark is within the valid range and outputs the grade accordingly.

### Example
```
Enter the student's mark (between 0 and 100): 87
Grade: A
```

## Challenge 2: Speed Detector

### Problem Statement
The Speed Detector program takes as input the speed of a car. If the speed is less than 70, it prints "Ok". Otherwise, for every 5 km/h above the speed limit (70), it gives the driver one demerit point and prints the total number of demerit points. If the driver accumulates more than 12 points, the program prints "License suspended".

### Solution
The solution program calculates the demerit points based on the speed input and the given criteria. It determines whether the speed is above the speed limit and calculates the corresponding demerit points. It also checks if the driver's total demerit points exceed the threshold for license suspension.

### Example
```
Enter the car's speed: 90
Points: 4
```

## Challenge 3: Net Salary Calculator

### Problem Statement
The Net Salary Calculator program calculates the Payee Tax, NHIF Deductions, NSSF Deductions, and net salary based on the given basic salary and benefits of an employee. It uses the tax rates provided by KRA, as well as the NHIF and NSSF values from the provided links.

### Solution
The solution program calculates the Payee Tax based on the gross salary, considering the tax rates provided. It also determines the NHIF Deductions based on the gross salary and NHIF rates. Furthermore, it calculates the NSSF Deductions based on the gross salary and the NSSF rate. Finally, it calculates the net salary by subtracting the tax, NHIF deductions, and NSSF deductions from the gross salary.

### Example
```
Enter the employee's basic salary: 50000
Enter the employee's benefits: 5000

Payee Tax: 5645
NHIF Deductions: 1200
NSSF Deductions: 1200
Net Salary: 43355
```

## License

These programming challenges are released under the [MIT License](LICENSE).