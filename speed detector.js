function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed <= speedLimit) {
      console.log("OK");
    } else {
      demeritPoints = Math.floor((speed - speedLimit) / 5);
  
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  // Prompt the user for input
  let speed = parseInt(prompt("Enter the car's speed:"));
  
  // Calculate and output the demerit points
  calculateDemeritPoints(speed);
  