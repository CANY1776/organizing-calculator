let peopleNeeded, contactRate, flakeFactor;

function nextStep(nextStepId) {
  // Hide all steps
  document.querySelectorAll('.step').forEach(step => {
    step.style.display = 'none';
  });

  // Show the next step
  document.getElementById(nextStepId).style.display = 'block';

  // Save input values
  if (nextStepId === 'step2') {
    peopleNeeded = parseInt(document.getElementById('peopleNeeded').value);
  } else if (nextStepId === 'step3') {
    const tactic = document.getElementById('tactic').value;
    contactRate = tactic === 'phonebank' ? 0.08 : 0.15;
  }
}

function calculate() {
  flakeFactor = parseFloat(document.getElementById('flakeFactor').value);

  // Validate inputs
  if (isNaN(peopleNeeded) || isNaN(contactRate) || isNaN(flakeFactor)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  // Calculate people to contact
  const peopleToContact = (peopleNeeded / contactRate) * (1 / (1 - flakeFactor));

  // Display results
  const tactic = document.getElementById('tactic').value;
  const tacticName = tactic === 'phonebank' ? 'phone calls' : 'doors to knock on';
  document.getElementById('resultText').innerHTML = `
    To get <strong>${peopleNeeded}</strong> people, you need to make approximately <strong>${Math.round(peopleToContact)}</strong> ${tacticName}.<br><br>
    <strong>Organizing Plan:</strong><br>
    - Contact Rate: ${contactRate * 100}%<br>
    - Flake Factor: ${flakeFactor * 100}%<br>
    - Total ${tacticName}: ${Math.round(peopleToContact)}
  `;

  // Show results
  document.getElementById('results').style.display = 'block';
}

function resetForm() {
  // Reset form and show the first step
  document.getElementById('peopleNeeded').value = '';
  document.getElementById('flakeFactor').value = '';
  document.querySelectorAll('.step').forEach(step => {
    step.style.display = 'none';
  });
  document.getElementById('step1').style.display = 'block';
}

// Show the first step on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('step1').style.display = 'block';
});
