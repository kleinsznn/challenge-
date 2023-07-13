function calculateGrade(mark) {
    if (mark > 79) {
      return "A";
    } else if (mark >= 60) {
      return "B";
    } else if (mark >= 50) {
      return "C";
    } else if (mark >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  // Prompt the user for input
  let mark = parseFloat(prompt("Enter the student's mark (between 0 and 100):"));
  
  // Calculate the grade
  let grade = calculateGrade(mark);
  
  // Output the grade
  console.log("The student's grade is: " + grade);
  