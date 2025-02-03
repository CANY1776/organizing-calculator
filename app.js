// Wait for the DOM to load before executing
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is working!");
  
    const form = document.querySelector("#calculator-form");
  
    // This function will handle the calculations
    function calculate() {
      const peopleNeeded = parseInt(document.querySelector("#peopleNeeded").value);
      const contactRate = parseFloat(document.querySelector("#contactRate").value);
      const flakeFactor = parseFloat(document.querySelector("#flakeFactor").value);
  
      // Basic Calculation
      const peopleToContact = (peopleNeeded / contactRate) * (1 / (1 - flakeFactor));
  
      // Output the result
      document.querySelector("#result").textContent = `You need to contact approximately ${Math.round(peopleToContact)} people.`;
    }
  
    // Listen for the form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      calculate();
    });
  });
  
